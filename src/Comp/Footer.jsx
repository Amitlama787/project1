import React from 'react'
import './New.css'
import { Link, Route, Routes } from 'react-router-dom'
import Helpsupport from '../Pages/Helpsupport'
import Career from '../Pages/Career'
function Footer() {
    return (
        <>
            <section className='moi'>
                <div className="containerfluid bg-dark oik py-5 ">
                    <div className="row">
                        <div className="col-lg-2  mx-auto">
                            <nav>
                                <ul className='lh-lg'>
                                    <a className='text-light fw-bold' href=""><li>My Account</li></a>
                                    <a className='text-light fw-bold' href=""><li>Order Statust</li></a>
                                    <a className='text-light fw-bold' href=""><li>Referral</li></a>
                                    <a className='text-light fw-bold' href=""><li>Coupons</li></a>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-2 offset-0 me-2 lh-lg ">
                            <nav>
                                <ul>
                                    <Link className='text-light fw-bold' to="/aboutus"><li>About us</li></Link>
                                    <li><Link className='text-light fw-bold' to="/help&support/">Help & Support</Link></li>
                                    <Link className='text-light fw-bold' to="/career"><li>Career</li></Link>
                                    <a className='text-light fw-bold' href=""><li>Terms & Condition</li></a>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-2 offset-1">
                            <div className='olp'>
                                <img className='ol' width='30' src="https://amazcart.ischooll.com/public/frontend/amazy/img/amaz_icon/google_play.svg" alt="" />
                                <span className='lo'> <p className='text-light fs-6'>Get it on  <br />
                                    <span className='text-light fs-2 fw-bold'>Google play</span>
                                </p>

                                </span>



                            </div>
                            <div className='olp my-1'>
                                <img className='ol' width='30' src="https://amazcart.ischooll.com/public/frontend/amazy/img/amaz_icon/google_play.svg" alt="" />
                                <span className='lo'> <p className='text-light fs-6'>Get it on   <br />
                                    <span className='text-light fs-2 fw-bold'>APP STORE</span>
                                </p>

                                </span>



                            </div>
                        </div>

                        <div className="col-lg-3 offset-1">
                            <div><p className='text-light'> GET TO KNOW PLACES ESTIMATE?</p></div>
                            <div> <form action=""> <input className='px-5 py-2 rounded border' type="text" placeholder='Enter email adress'/></form></div>
                            <div><button className='btn  bg-danger'>Subscribe</button></div>
                        </div>
                        <div className='border border-black align-self-center py-3 px-3'>
                       <p className='text-white '>© 2024 Amazy . All Rights Reserved. Made By CodeThemes﻿ </p> </div>
                    </div>
                </div>
              
            </section>
            
               
               

        </>
    )
}

export default Footer