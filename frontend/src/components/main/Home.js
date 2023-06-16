import React from 'react'

const Home = () => {
  return (
    <div className='home-page'>
      <div
        data-draggable="true"
        className=""
        style={{ position: "relative" }}
        draggable="false"
      >
        {/**/}
        {/**/}
        <section
          draggable="false"
          className="overflow-hidden pt-0"
          data-v-271253ee=""
        >
          <section className="mb-10">
            {" "}
            {/* Background image */}
            <div
              className="p-5 text-center bg-image"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1535378273068-9bb67d5beacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjI0M3wwfDF8c2VhcmNofDF8fEFydGlmaWNpYWwlMjBpbnRlbGxlZ2VuY2V8ZW58MHx8fHwxNjg0NzQ2MjI5fDA&ixlib=rb-4.0.3&q=80&w=1080")',
                height: '48rem',
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundColor: "transparent"
              }}
              aria-controls="#picker-editor"
            >
              <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                      <div className="text-white pb-md-5">
                        <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight">
                          {" "}
                          <span>
                            WEBCHEF
                            <br />
                            The AI Webpage&nbsp;
                            <br />
                            Builder
                            <br />
                          </span>{" "}
                          <br /> <span className="" />{" "}
                        </h1>{" "}
                        {/* <a
                          className="btn                 btn-light btn-lg py-3 px-5 me-2"
                          href="#!"
                          role="button"
                          aria-controls="#picker-editor"
                          draggable="false"
                          style={{}}
                        >
                          Get started
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Background image */}
          </section>
        </section>
        {/**/}
      </div>

    </div>
  )
}

export default Home;