import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/favicon.png' alt='' />
              <h2>Membutuhkan bantuan?</h2>
              <p>Jika terdapat saran, tanggapan, maupun kritikan bisa langsung mengisi pada form dibawah.</p>

              <div className='input flex'>
                <input type='text' placeholder='Ketik Pesan' />
                <button>Kirim</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Kelompok 5 PT Garapan Indonesia IKU.</span>
      </div>
    </>
  )
}

export default Footer
