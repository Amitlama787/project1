import React from 'react'
import products from '../Data/Data'
import './Pages.css'
import { Link, Route, Routes } from 'react-router-dom'
import Pages1 from './Pages1'


function Auction() {
  return (
    <>
      <section>
        <div className="containerfluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className='red'>
                        <h1 className='text-light'>AUCTION PRODUCTS GALLARY</h1>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section className='py-3 mx-2'>
                    <div className="containerfluid ">
                        <div className="row gx-5">
                <div className="col-lg-3">
                    <div>
                        <p className='text-primary-emphasis'>Showing 1 - 3 out of total 3 Products</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex gap-3 offset-5 ">
                    <div className='fs-3 text-primary-emphasis'><i class="bi bi-card-list"></i></div>
                    <input className='px-3 py-1 border rounded' type="text" list='N' placeholder='show items' />
                    <datalist id='N'>
                        <option>show 9 items</option>
                        <option>show 10 items</option>
                        <option>show 15 items</option>
                        <option>show 18 items</option>

                    </datalist>
                    </div>
                </div>
                </div>
                </section>

                <hr />
         
         <section>
            <div className="containerfluid">
                <div className="row">
                    {products.slice(0,3).map((a)=>(
                                             <div key={a} className="col-lg-4">
                                             <div className=''>
                                               <div className='bord text-center'>
                                             <img className='img border-bottom' src={a.thubmnail} alt="" /> 
                                              
                                             <div className='warn text-center '>
                                               <ul className='text-light d-flex gap-1 mx-auto'>
                                                 <li><i class="bi bi-star"></i></li>
                                                 <li><i class="bi bi-star"></i></li>
                                                 <li><i class="bi bi-star"></i></li>
                                                 <li><i class="bi bi-star"></i></li>
                                                 <li><i class="bi bi-star"></i></li>
                                               </ul>
                                             </div>
                                             <div className='title text-center'> {a.title} 
                                             </div>
                 
                                             
                                          <div className='d-flex justify-content-between mx-5 align-items-center halka'> 
                                           <Link to={`/details/${a.id}`}> <div className='fs-3 shop'><i class="bi bi-cart"></i></div> </Link>
                                             <div className='text-danger fw-bold'>{a.price}</div>
                                          </div>
                                            </div>
                                          </div>
                                          </div>
                    ))}
                 
                </div>
            </div>
         </section>
       
     
       <section>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12">
                 <div className='d-flex justify-content-center'>
                    <span className='text-secondary'><i class="bi bi-caret-left"></i>prev</span> 
                    <Link to="/page/1">
                        <p className='text-light bg-danger  rounded-circle pg px-2 py-1 mx-2 text-light'>
                        1</p></Link>
                     <span className='text-secondary'>Next<i class="bi bi-caret-right"></i></span>
                 </div>
                </div>
            </div>
        </div>
       </section>
       
    </>
  )
}

export default Auction
