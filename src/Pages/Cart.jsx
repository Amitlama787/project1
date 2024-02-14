import React from 'react'

function Cart() {
  return (
    <>
     <section className='py-5'>
        <div className="row w-100%">
         <div className="col-lg-12 lkc">
    <div><p className='text-center '>No product found </p></div>
    <hr />


       <div className='wio mse'>
        <h4 className='fw-bold text-primary-emphasis py-2'>Order Summary</h4>

        <div className='d-flex justify-content-between'>
            <span><h6 className='text-secondary-emphasis'>Subtotal</h6></span>  <p className='text-secondary'>+ $ 0.00</p>
        </div>
        <div className='d-flex justify-content-between'>
            <span><h6 className='text-secondary-emphasis'>Shipping Charge</h6></span>  <p className='text-secondary'>Calculated at next step</p>
        </div>
        <div className='d-flex justify-content-between'>
            <span><h6 className='text-secondary-emphasis'>Subtotal</h6></span>  <p className='text-secondary'>
- $ 0.00</p>
        </div>
        <div className='d-flex justify-content-between'>
            <span><h6 className='text-secondary-emphasis'>Discount</h6></span>  <p className='text-secondary'>+ $ 0.00</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <span><h6 className='text-secondary'>Total</h6></span>  <p className='text-primary-emphasis fs-4'>$ 0.00</p>
        </div>
        <hr />
       </div>
         </div>
        </div>
     </section>
    </>
  )
}

export default Cart
