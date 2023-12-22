import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../contact/Add.css';

const AddUser = () => {
  const containerStyle = {
    backgroundColor: "#F2F1EB",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/Add-user', {
        nama: nama,
        keterangan: keterangan,
        tanggal: tanggal,
      });
      alert('Berhasil Ditambahkan!');
      navigate('/contact'); // Ganti dengan rute yang sesuai
    } catch (error) {
      alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
      console.error('Error adding user:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="table-caption">Form Input Data</legend>
          <div className="field">
            <label htmlFor="nama" className="label">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              className="input"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
            />
          </div>
          <div className="field">
            <label htmlFor="keterangan" className="label">
              Keterangan
            </label>
            <input
              type="text"
              id="keterangan"
              className="input"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              placeholder="Keterangan"
            />
          </div>
          <div className="field">
            <label htmlFor="tanggal" className="label">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              className="input"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              placeholder="Tanggal"
            />
          </div>
          <div>
            <button type="submit" className="custom-button">
              Tambahkan Data
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddUser;
