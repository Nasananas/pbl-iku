import "./contact.css"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contact() {
  const containerStyle = {
      backgroundColor: "#F2F1EB",
      position: "relative",
      width: "100%",
      minHeight: "100vh",
  }; 
  const mediaQuery = `@media (max-width: 768px) {
      img {
          max-width: 80%;
      }
  }`;

  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      getContacts();
  }, []);

  const getContacts = async () => {
      try {
          const contactsData = await axios.get('http://localhost:8080/user');
          setContacts(contactsData.data);
      } catch (error) {
          console.error('Error fetching contact data:', error);
      }
  };

  const deleteContact = async (id) => {
      const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus kontak?");
      if (confirmDelete) {
          try {
              await axios.delete(`http://localhost:8080/Delete-user/${id}`);
              getContacts();
          } catch (error) {
              console.error('Error deleting contact:', error);
          }
      }
  };

  const updateContact = async (event) => {
      event.preventDefault();
      setLoading(true);

      try {
          const putData = await axios.put(
              `http://localhost:8080/Update-user/${id}`,
              {
                  nama: nama,
                  keterangan: keterangan,
                  tanggal: tanggal
              }
          );

          alert(putData.data.messages);
          window.location.reload();
      } catch (error) {
          setError("Data Gagal diubah");
      } finally {
          setLoading(false);
      }
  };

  const showModal = (data) => {
      setId(data.id);
      setNama(data.nama);
      setKeterangan(data.keterangan);
      setTanggal(data.tanggal);
      setShow(true);
  };

  const closeModal = () => {
      setId("");
      setNama("");
      setKeterangan("");
      setTanggal("");
      setShow(false);
      setError(null);
  };

  return (
      <div style={containerStyle}>

          <Modal show={show} onHide={closeModal}>
              <Modal.Header closeButton>
                  <Modal.Title>Form Update Data</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={updateContact}>
                      <Form.Group className="mb-3" controlId="formNama">
                          <Form.Label>Nama</Form.Label>
                          <Form.Control
                              type="text"
                              autoFocus
                              onChange={(e) => setNama(e.target.value)}
                              value={nama}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formKeterangan">
                          <Form.Label>Keterangan</Form.Label>
                          <Form.Control
                              type="text"
                              onChange={(e) => setKeterangan(e.target.value)}
                              value={keterangan}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formTanggal">
                          <Form.Label>Tanggal</Form.Label>
                          <Form.Control
                              type="date"
                              onChange={(e) => setTanggal(e.target.value)}
                              value={tanggal}
                          />
                      </Form.Group>
                      <Button type="submit" variant="primary" className="px-4" disabled={loading}>
                          {loading ? 'Updating...' : 'Update'}
                      </Button>
                      {error && <p className="text-danger">{error}</p>}
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal} disabled={loading}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>

          <div>
              <caption className="table-caption">Riwayat Penyewaan</caption>
              <Link to={'/add'} className='custom-button'> Tambah Data </Link>
              <table className="table-container">
                  <thead>
                      <tr>
                          <th>No</th>
                          <th>Nama</th>
                          <th>Keterangan</th>
                          <th>Tanggal</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                  {contacts.map((contactsData, index) => (
                        <tr key={contactsData.id}>
                            <td>{index + 1}</td>
                            <td>{contactsData.nama}</td>
                            <td>{contactsData.keterangan}</td>
                            <td>{contactsData.tanggal}</td>
                            <td>
                                <button onClick={() => showModal(contactsData)} className='custom-button'>edit</button>
                                <button onClick={() => deleteContact(contactsData.id)} className='custom-button'>Hapus</button>
                            </td>
                        </tr>
                    ))}

                  </tbody>
              </table>
          </div>
          <style>{mediaQuery}</style>
      </div>
  );
}

export default Contact
