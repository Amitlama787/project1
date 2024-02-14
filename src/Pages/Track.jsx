import React from 'react'
import './Pages.css'

function Track() {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 lkc">
                    <div className='text-center mkc'>
                        <div><h2 className='fw-bold text-primary-emphasis'>Track Your Order</h2></div>
                        <div className='text-secondary'><p>Enter your Order ID in the box below and press the “Track” button.</p></div>
                        <div>Order Tracking Number <span className='text-danger'>*</span></div>
                        <form><input className='order' type="text" placeholder='Order Tracking Number' /></form>

                        <div>Secret ID (Only For Guest User) <span className='text-danger'>*</span></div>
                        <form><input className='order' type="text" placeholder='Secret Id (Only For Guest)' /></form>

                        <button className='btnp my-4 '>TRACK KNOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Track
