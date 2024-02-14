import React from 'react'
import './Pages.css'

function Help() {
  return (
    <>
      <section className='py-3'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <div className='w-100%'>
  <iframe width='100%' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28246.93319227527!2d85.33371814831541!3d27.752258791813848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1707235988403!5m2!1sen!2snp"  height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</div>

                </div>


            </div>
            <div className="row py-3 gx-2 my-5">
                <div className="col-lg-3 lh-lg">
                    <div>
                        <p className='text-primary-emphasis'>Call or WhatsApp:</p>
                        <h5 className='text-primary-emphasis fw-bold'>0187595662</h5>
                    </div>
                    <div>
                        <p className='text-primary-emphasis'>Get in touch:</p>
                        <h5 className='text-primary-emphasis fw-bold'>sales@amazcart.com</h5>
                    </div>
                    <div>
                        <p className='text-primary-emphasis'>Social Media:</p>
                        <h5 className='text-primary-emphasis fw-bold '>

                            <ul className='d-flex gap-3 '>
                          <li> <div><i class="bi bi-facebook"></i></div></li> 
                      <li><i class="bi bi-instagram"></i></li>
                      <li><i class="bi bi-twitter"></i></li>

                            </ul>
                      
                        </h5>
                        <div>
                            <p className='text-primary-emphasis fw-bold'>Head Office:</p>
                       <h3 className='text-primary-emphasis'>Panthapath, Dhaka</h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 offset-4 lh-lg shadow text-center py-5 mapk">
                    <div>
                        <h2 className='text-primary-emphasis'>Get in touch</h2>
                    </div>
              <div className='my-3'><form action=""><input className=' ols' type="text" placeholder='Enter Name' /></form></div>     
              <div className='my-3'><form action=""><input className=' ols' type="text" placeholder='Enter Email Adress' /></form></div>     
              <div className='my-3'><form action=""><input className=' ols py-5' type="text" placeholder='Write Message' /></form></div>     
                <div className='my-3'>
                    <button className='okay'>Send Messages</button>
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Help
