import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../Data/Data'

function Catego() {
    let {id}=useParams()
    let dd=products.filter((a)=>a.category==id)
  return (
    <>
   <section>
    
    
    <div className="container">
      <div className="row">
        {dd.map((a)=>(
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

export default Catego
