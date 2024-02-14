import React from 'react'
import './New.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from '../Pages/Contact'
import Aboutus from '../Pages/Aboutus'
import Auction from '../Pages/Auction'
import Career from '../Pages/Career'
import Pages1 from '../Pages/Pages1'
import categories from '../Data/Cat'
import Catego from '../Pages/Catego'
import Details from '../Pages/Details'
import Pages2 from '../Pages/Pages2'
import Track from '../Pages/Track'
import Cart from '../Pages/Cart'
import Help from '../Pages/Help'
import products from '../Data/Data'

function Header() {
   
    return (
        <>
        <header className='bg-light-subtle d-none d-lg-block'>
            <section className='py-4 '>
                <div className="containerfluid border-bottom bg-light-subtle">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className='d-flex gap-3 '>
                                <a href=""><li>PLAY STORE</li></a>
                                <a href=""><li>APP STORE</li></a>
                            </ul>
                        </div>
                        <div className="col-lg-7 offset-2">
                            <nav className=''>
                                <ul className='d-flex gap-4'>
                                    <Link to="/track/"><li> <span className='ico'><i class="bi bi-truck"></i></span>TRACK YOUR ORDER</li></Link>
                                    <a href=""><li><span className='ico'><i class="bi bi-arrow-down-up"></i></span>COMPARE(0)</li></a>
                                    <a href=""><li> <span className='ico'><i class="bi bi-heart-fill"></i></span>WISHLIST (0)</li></a>
                                    <Link to="/cart/"><li><span className='ico'><i class="bi bi-cart"></i></span>CART (0)R</li></Link>
                                    <a href=""><li>EN</li></a>
                                    <a href=""><li>USD<span className='ico'><i class="bi bi-chevron-down"></i></span></li> </a>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-1 px-4 bg-light-subtle'>
                <div className="containerfluid bg-light-subtle">
                    <div className="row">
                        <div className="col-lg-1">
                        <Link to="/"><img src="https://amazcart.ischooll.com/public/uploads/settings/6166a70d94ded.png" alt="" /></Link>
                        </div>
                        <div className="col-lg-4 offset-3 ">
                            <form action="">
                                <input className='op' type="text" placeholder='Search your item' />
                            </form>
                        </div>
                        <div className="col-lg-2 offset-2">
                            <p className='fs-6'> <span><i class="bi bi-person"></i></span>LOGIN/REGISTER</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-3 px-1 ms-2'>
                <div className="containerfluid border bg-light-subtle">
                    <div className="row">
                        <div className="col-lg-1 ">
                            <div class="dropdown">
                                <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </button>
                                <ul class="dropdown-menu">
                                    {categories.map((a)=>(
                                        <li key={a} className='py-1 px-3 mx-auto text-center border-bottom text-primary-emphasis '>
                                      <Link to={`/cateo/${a}`}> {a}</Link>  </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-2 ">
                           <ul className='d-flex gap-5 '>
                            <li><Link className='fs-6' to="/">Home</Link></li>
                            <li><Link className='fs-6' to="/contact">Conatct us</Link></li>
                            <li><Link className='fs-6' to="/aboutus">About us</Link></li>
                            <li><Link className='fs-6' to="/auction">Auction</Link></li>
                           </ul>


                          
                        </div>
                        <div className="col-lg-3 offset-1 ">
                            <ul className='d-flex gap-3'>
                                <li><a href="">
                                   <span className='fs-5'><i class="bi bi-person-add"></i></span> New User Zon</a></li>
                                <li>
                                 <a href=""> <span className='fs-5'><i class="bi bi-activity"></i></span>  Daily Deals</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
          
        </header>

<section>

  <div className='d-lg-none d-block'>
   <Link to="/"><img src="https://amazcart.ischooll.com/public/uploads/settings/6166a70d94ded.png" alt="" /></Link> </div> 
  <nav className="navbar bg-body-tertiary d-lg-none d-block">
    <div className="container-fluid">
     
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          
          <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fw-bold ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Conatct us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/aboutus">About us</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               All categories
              </a>
              <ul className="dropdown-menu">
                {categories.map((a)=>(
                      <li className='border-bottom py-1 text-center fw-bold fs-5 text-uppercase'> <Link to={`/cateo/${a}`}> {a}</Link>  </li>
                       
                       
                ))}
               
                
              </ul>
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  </nav>
</section>

       
        <section>
            <div>
                
            </div>
        </section>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/auction' element={<Auction/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/page/:did/' element={<Pages1/>}/>
            <Route path='/pages/:did/' element={<Pages2/>}/>
            <Route path='/cateo/:id/' element={<Catego/>}/>
            <Route path='/details/:cid/' element={<Details/>}/>
            <Route path='/track/' element={<Track/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/help&support/' element={<Help/>}/>
           
            
        </Routes>
        </>
    )
}

export default Header