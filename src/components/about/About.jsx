import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Tentang' title='Aplikasi Hibi Rent' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='HIBI RENT' subtitle='Aplikasi penyewaan booth pameran' />

            <p>Hibi Rent merupakan aplikasi yang menyediakan berbagai booth pameran untuk anda gunakan dalam promosi oleh perusahaan, lembaga sampai organisasi dalam sebuah pameran. </p>
            <p>Secara fisik, booth pameran adalah sebuah rancang bangun sebagai representasi dari pemilik (perusahaan, lembaga, organisasi, dan sebagainya) dan berfungsi sebagai garda depan marketing.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
