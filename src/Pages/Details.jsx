import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/Data'
import './Pages.css'

function Details() {
    let {cid}=useParams()
    let cc=products.find((a)=> a.id==cid)
    
  return (
    <div>
     
     
      <section className='car'>
        <div className="container">
          <div className="row">
           <div className="col-lg-3">
            <div className='loc'>
            <div>
              <img className='detai' src={cc.thubmnail} alt="" />
            </div>
           <div>  <img className='it d-none d-lg-block ' src='https://www.shutterstock.com/image-vector/red-banner-special-offer-260nw-1035467014.jpg' alt="" /> </div>
           </div>
           
            </div>
           <div className="col-lg-5    lh-lg okayp">
            <div className='upper fs-3 fw-bold text-primary-emphasis border-bottom'>
              {cc.title}
            </div>
            <div className='upper text-danger border-bottom py-2'>
              {cc.Specifications}
            </div>

            <div className='py-5 fw-bold text-danger '>Price:{cc.price}</div>
            <button className='btnlo '>PLACE BID</button>
           </div>
           
          </div>
        





          <div className="row py-5 my-3 ">
            <div className="col-lg-6 wid">
              <div className='fs-2 fw-bold text-primary-emphasis chio'>Description</div>
              <div className='chio text-danger upper'>
                {cc.description}
              </div>
              <div><hr /></div>
              <div className='chio'>
                <h2 className='text-primary-emphasis '>Rating & Reviews</h2> <hr />
                <div className='text-center text-secondary'>This product has no reviews.</div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
