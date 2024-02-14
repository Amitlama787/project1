import React from 'react'
import products from '../Data/Data'
import './Pages.css'
import { Link } from 'react-router-dom'



function Productbycat(props) {
    let cat=products.filter((a)=>a.category==props.title)
 
  return (
    <>
    <section>
        <div className="containerfluid">
            <div className="row  ms-1">
            <div>
                        <p className='fw-bold text-primary-emphasis  py-3 fw-bold fs-3'>Product By {props.title}</p>
                    </div>
                    {cat.slice(0,3).map((a)=>(
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
      
    </>
  )
}

export default Productbycat
