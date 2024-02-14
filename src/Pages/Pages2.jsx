import React from 'react'
import products from '../Data/Data'
import { Link, useParams } from 'react-router-dom'
import './Pages.css'




function Pages1() {
  let {did}=useParams()
  return (
    <>
    
   
      <section>
      
        <div className="container">
          <div className="row">
            {products.slice(0,15).map((a)=>(

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
                    <Link to="/pages/2">
                        <p className='text-light bg-danger  rounded-circle pg px-2 py-1 mx-2 text-light'>
                        3</p></Link>
                     <span className='text-secondary'>Next<i class="bi bi-caret-right"></i></span>
                 </div>
                </div>
            </div>
        </div>
       </section>




       
    </>
  )
}

export default Pages1
