import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Booth Exhibition ' subtitle='Find new & featured property located in your bussiness.' />
        </div>
      </section>
    </>
  )
}

export default Hero
