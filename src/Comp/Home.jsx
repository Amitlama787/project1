import React from 'react'
import products, { Slider } from '../Data/Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './New.css'
import { Route, Routes } from 'react-router-dom';
import Career from '../Pages/Career';
import Productbycat from '../Pages/Productbycat';
import Banner from '../Banner/Banner';
import Middle from '../Banner/Middle';


function Home() {
  return (
    <>
      <section className='py-2'>
        <div className="containerfluid">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {Slider.map((a) => (
                  <SwiperSlide key={a}> <img width='100%' src={a} alt="" /></SwiperSlide>
                ))}

              </Swiper>
            </div>

          </div>
        </div>
      </section>

     
   
     
     <Productbycat title="mobiles"/>
     <Productbycat title="camera"/>
     <Banner/>
     <Productbycat title="watch"/>
     <Productbycat title="shoes"/>
     <Middle/>
     <Productbycat title="cars"/>
     
     <Productbycat title="bike"/>
      <section className='py-3 px-3'>
        <div className="containerfluid">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h1 className='text-primary-emphasis'> Top Brand</h1>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='border py-3 mx-3'>
        <div className='d-flex justify-content-between  gap-5 py-3 px-2  '>
          <div>
            <img src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2cb6216298.png" alt="" />
          </div>
          <div><img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2cc4dbd273.png" alt="" /></div>
          <div> <img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c1b6f31dd.png" alt="" /></div>
          <div> <img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c1f5756fc.png" alt="" /></div>
          <div> <img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c118c682d.png" alt="" /></div>

        </div>
        <div className='d-flex justify-content-between gap-5 py-3'>
          <div><img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c1d300418.png" alt="" /></div>
          <div><img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c18a3cc18.png" alt="" /></div>
          <div><img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c198cdb8a.png" alt="" /></div>
          <div><img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2cbf44fdec.png" alt="" /></div>
          <div> <img className='wrr' src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c0e3e8fe8.png" alt="" /></div>

        </div>
      </section>

      <section className='mx-auto py-4 px-4'>
        <div className="containerfluid">
          <div className="row">
            <div className="col-lg-12 lh-lg ">
              <div>
                <h1 className='text-primary-emphasis'>Amazcart | AN ONLINE SHOPPING PLATFORM</h1>
                <p className='text-secondary'>The current global economy is incorporating more and more e-commerce. The way we shop and do business has changed over the last several decades. Amazcart, on the other hand, gives online buyers and sellers the confidence to buy and sell the products they like. Moreover, throughout the course of significant festivals like the New Year, Eid, Pahela Baishakh, and so on we have enormous promotions and offers with fantastic deals and discounts for our customers. Additionally, as options for smaller events, we also provide our clients with "Daily Deals" & "New User Zone" deals on our Amazcart. We ensure that every one of the different online retailers in AmazCart strictly abides by the global quality standards in order to uphold customer confidence and dependability.</p>
              </div>
              <div>
                <h6 className='text-primary-emphasis py-3n'>SHOP FOR VARIETY WITH AMAZCART</h6>
                <p className='text-secondary'>
                  On the off chance that you are searching for an easy-to-use  E-Commerce platform, you can find Amazcart significantly more valuable for your regular routine. Amazcart offers different categories of items, for example, Computer Accessories to House Appliances at the best costs. You can find top brands like Sony, Mi, Otobi, Asgardia, Casio, Kanba, Samsung, Nikon, One Plus, etc. For clients, they could purchase hardware contraptions, shirts, pants, wooden furniture, and so on. On Amazcart, anyone can sell their product and make their own shop. Merchant can set their SEO on both google and Facebook which is extremely valuable for the vendors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Home
