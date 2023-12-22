import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditUser = ({ userData, handleClose, handleUpdate }) => {
  const [nama, setNama] = useState(userData.nama);
  const [keterangan, setKeterangan] = useState(userData.keterangan);
  const [tanggal, setTanggal] = useState(userData.tanggal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const putData = await axios.put(
        `http://localhost:8080/Edit-user/${userData.id}`,
        {
          nama: nama,
          keterangan: keterangan,
          tanggal: tanggal
        }
      );

      alert(putData.data.messages);
      handleUpdate();
      handleClose();
    } catch (error) {
      setError("Data Gagal diubah");
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setNama("");
    setKeterangan("");
    setTanggal("");
    setError(null);
    handleClose(); // Menutup modal setelah operasi selesai
  };

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Form Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateUser}>
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
  );
};

export default EditUser;
