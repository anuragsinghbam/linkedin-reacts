import React from 'react'
import SignupImage from '../../images/signup.jpg'

export default function Signup() {
    return (
        <div className="container">
            <div className="row">
         


            

         <div className="col-lg-7 mb-2 contact-form__wrapper p-1 order-lg-1">

         <center>
             <h2>Create Account</h2>
         </center>

         <br/>
        


                <form action="#" className="contact-form form-validate" noValidate="novalidate">
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Appleseed" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com" />
                      </div>
                    </div>



                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                      </div>
                    </div>
                   

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Date of birth</label>
                        <input type="date" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                      </div>
                    </div>
                   

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Upload Image</label>
                        <input type="file" className="form-control" id="phone" name="phone" placeholder="" />
                      </div>
                    </div>
                   
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Password</label>
                        <input type="password" className="form-control" id="phone" name="phone" placeholder="*******" />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Confirm Password</label>
                        <input type="password" className="form-control" id="phone" name="phone" placeholder="*******" />
                      </div>
                    </div>


                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Linkedin Profile URL</label>
                        <input type="text" className="form-control" id="phone" name="phone" placeholder="linkedin profile....." />
                      </div>
                    </div>








                    <div className="col-sm-12 mb-3">
                      <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div> {/* End Contact Form Wrapper */}


              <div className="col-lg-5" style={{overflow : 'hidden'}}>
    <img style={{objectFit : 'contain' , width : '80%'}} src={SignupImage} />
    </div>


              </div>
        </div>
    )
}
