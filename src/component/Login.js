import React from 'react'

export default function Login() {
  return (
    <>
     <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Sign In</h3>
              
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example99">Password</label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-warning btn-lg ms-2">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
