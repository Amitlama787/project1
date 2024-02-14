import React from 'react'
import './Pages.css'

function Contact() {
  return (
    <>
     <section className='my-3 py-4'>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 d-flex gap-4 lala">
            <div className='shadow bg-light get '>
              <h3 className='text-center'>GET IN TOUCH!</h3>
               <h6 className='text-center py-2'>We would love to hear from you.</h6>

               <div className='ms-4 '>
               <p>Name *</p>
               <form action="">
                <input className='px-5 px-4 border rounded nu'  type="text" placeholder='Your Name' />
               </form>
               <div className='py-3'>
               <p>Email *</p>
               <form action="">
                <input className='px-5 px-4 border rounded nu'  type="text" placeholder='Your Email' />
               </form>
               </div>
               <div className='py-4'>
               <p>Mobilenumber *</p>
               <form action="">
                <input className='px-5 px-4 border rounded nu'  type="text" placeholder='Your Number' />
               </form>
               </div>
               <div className='py-4'>
               <p>Message</p>
               <form action="">
                <input className='px-5 py-5 border rounded nu'  type="text" placeholder='Your messgae' />
               </form>
               </div>
               </div>
               <button className='btn1 py-3 px-4 rounded ms-4 my-4'>SUBMIT ENQUIRY</button>
            </div>
             

          </div>
          <div className="col-lg-6">
          
          <section>
                  <div className='ms-2 lh-lg'>
                   <p className='fs-bold'>Amaz Pvt. Ltd.</p>
                   <div className=''>
                   <span className='text-secondary fs-3'><i class="bi bi-geo-alt"></i></span>Shreeganesh Marg, Subidhanagar, Tinkune, Kathmandu 44600, Nepal
                   </div>
                   <div>
                   <span className='text-secondary fs-3'><i class="bi bi-telephone"></i></span>+977-1-4117578 / +977-1-4111849 / +977-1-4111583 / +977-1-5912405
9808724535
                   </div>
                   <div>
                   <span className='text-secondary fs-3'><i class="bi bi-telephone"></i></span>Inquiry Hotline : 9841002000
                   </div>
                   <div className='gap-1 d-flex'>
                   <span className='text-secondary fs-3'><i class="bi bi-envelope"></i></span> <p>info@broadwayinfosys.com <br />
hr@broadwayinfosys.com
support <br />@broadwayinfosys.com <br />
inquiry@broadwayinfosys.com</p>
                   </div>
                   </div>

                    <div className='py-5 ms-4 lh-lg'>
                 <div className='d-flex gap-2'>
                  <img src="https://broadwayinfosys.com/assets/themes/new/new/img/ico-colored-messenger.svg" alt="" /> <span><p>Messenger</p></span>
                 </div>
                 <div className='d-flex gap-2'>
                  <img src="https://broadwayinfosys.com/assets/themes/new/new/img/ico-colored-skype.svg" alt="" /> <span><p> Facebook</p></span>
                 </div>
                 <div className='d-flex gap-2'>
                  <img width='30' src="https://broadwayinfosys.com/assets/themes/new/new/img/instagram.svg" alt="" /> <span><p>Instagram</p></span>
                 </div>
                 <div className='d-flex gap-2'>
                  <img width='30' src="https://broadwayinfosys.com/assets/themes/new/new/img/map.svg" alt="" /> <span><p>Get Direction</p></span>
                 </div>
                 </div>
               
                
                   
                </section>
          </div>
          
        </div>
      </div>
     </section>
     <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
         
        <div>
       <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10827.549441247404!2d85.34829051466984!3d27.670775662523404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1706854897100!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
    
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Contact
