import React from 'react'

const Contact = () => {
  return (
    <div>
        <div  style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/contact-us BG.jpg')`,backgroundSize: 'cover',backgroundPosition:'bottom' }}>

<div className="container ">
  {/* <div className="row"> */}

    {/* <div className="col-md-6 my-5 ">
      <img src="/img/contact us pic.jpg" alt="contact us photo" className='w-100 img-thumbnail'/>
    </div> */}
    {/* <div className="col-md-6 my-5 "> */}
      <div className="card my-5 mx-auto  p-2" style={{ height: '75vh' ,width:'55vh' }}>
        <div className="card-body">
          <h1 className="card-title text-center text-black mb-4">Contact us</h1>
          <form>
            {/* Name input */}
            <div className=" mb-4">
              <label className="form-label" htmlFor="form4Example1">
               {/* Name */}
              </label>
              <input type="text" id="form4Example1" className="form-control" 
              placeholder="Name"/>
            </div>
            {/* Email input */}
            <div className=" mb-4">
              <label className="form-label" htmlFor="form4Example2">
                {/* Email address */}
              </label>
              <input type="email" id="form4Example2" className="form-control"
              placeholder="Email Address"/>
            </div>
            {/* Message input */}
            <div className=" mb-4">
              <label className="form-label" htmlFor="form4Example3">
                {/* Message */}
              </label>
              <textarea
                className="form-control"
                id="form4Example3"
                rows={4}
                defaultValue={""}
                placeholder='Message' />
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form4Example4"
                defaultChecked=""
              />
              <label className="form-check-label text-black" htmlFor="form4Example4">
                Send me a copy of this message
              </label>
            </div>
            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mb-4">
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>






  </div>
    </div>
  )
}

export default Contact