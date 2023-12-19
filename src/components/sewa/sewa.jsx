import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SewaPage = () => {
  const { boothId } = useParams();
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [transaksiBerhasil, setTransaksiBerhasil] = useState(false);

  const handleSewa = () => {
    // Proses penyewaan booth, misalnya kirim ke backend atau lakukan logika penyewaan
    // Di sini hanya mensimulasikan bahwa transaksi berhasil
    setTransaksiBerhasil(true);
  };

  return (
    <div>
      <h2>Detail Booth</h2>
      <p>ID Booth: {boothId}</p>
      {/* Tampilkan informasi lainnya tentang booth */}
      
      <h2>Form Penyewaan</h2>
      <form>
        <div>
          <label>Nama:</label>
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label>Alamat:</label>
          <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={handleSewa}>
            Sewa
          </button>
        </div>
      </form>

      {transaksiBerhasil && (
        <div>
          <p>Transaksi berhasil! Booth telah disewa.</p>
          {/* Notifikasi atau pengalihan ke halaman lain bisa ditambahkan di sini */}
        </div>
      )}
    </div>
  );
};

export default SewaPage;
