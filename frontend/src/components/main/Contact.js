import React from 'react';

const Contact = () => {
  return (
    <div style={{minHeight: '100vh', backgroundImage: `url('https://usabilitygeek.com/wp-content/uploads/2019/07/2-1024x576.png')`, backgroundSize: 'cover'}} className='d-flex align-items-center justify-content-center'>
      <div style={{ width: '100%' }}>
        <div className="col-md-6 mx-auto">
          <div className="card my-5 mx-auto p-2">
            <div className="card-body">
              <h1 className="card-title text-center text-black mb-4">Contact us</h1>
              <form>
                {/* Name input */}
                <div className=" mb-4">
                  <label className="form-label" htmlFor="form4Example1">
                    {/* Name */}
                  </label>
                  <input type="text" id="form4Example1" className="form-control" placeholder="Name" />
                </div>
                {/* Email input */}
                <div className=" mb-4">
                  <label className="form-label" htmlFor="form4Example2">
                    {/* Email address */}
                  </label>
                  <input type="email" id="form4Example2" className="form-control" placeholder="Email Address" />
                </div>
                {/* Message input */}
                <div className=" mb-4">
                  <label className="form-label" htmlFor="form4Example3">
                    {/* Message */}
                  </label>
                  <textarea className="form-control" id="form4Example3" rows={4} defaultValue={''} placeholder="Message" />
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" defaultValue="" id="form4Example4" defaultChecked="" />
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
  );
};

export default Contact;
