import React from "react";
import {Link} from "react-router-dom";

function News()
{
    return(
          
        <div>
            <div className="flash-news-banner">
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="badge badge-success mr-3">Flash news</span>
                <p className="mb-0">
                  Latest news should be put here!!
                </p>
              </div>
              <div className="d-flex">
                <span className="mr-3 text-success">Wed, March 4, 2020</span>
                <span className="text-success">30°C,London</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-xl-8 stretch-card grid-margin">
                <div className="position-relative">
                  <img
                    src="assets/images/dashboard/biofuel.jpg"
                    alt="banner"
                    className="img-fluid"
                  />
                  <div className="banner-content">
                    <div className="badge badge-secondary fs-12 font-weight-bold mb-3">
                      global news
                    </div>
                    <h1 className="mb-0 text-warning">Bio Fuel - Emerging Trend</h1>
                    <h1 className="mb-2 text-warning">
                        20 pc ethenol blending in petrol can create economic activity of Rs. 1 Lakh Cr. 
                    </h1>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 stretch-card grid-margin">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h2 className="text-light">Latest news</h2>

                    <div
                      className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    >
                      <div className="pr-3">
                        <h5>UPM’s biofuel growth plans progress to the next stage</h5>
                        <div className="fs-12">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                      <div className="rotate-img">
                        <img
                          src="assets/images/dashboard/bio1.jpg"
                          alt="thumb"
                          className="img-fluid img-lg"
                        />
                      </div>
                    </div>

                    <div
                      className="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between"
                    >
                      <div className="pr-3">
                        <h5>Atmanirbhar Bharat: IAF aircraft to fly on 'made in India' bio-jet fuel</h5>
                        <div className="fs-12">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                      <div className="rotate-img">
                        <img
                          src="assets/images/dashboard/bio2.jpg"
                          alt="thumb"
                          className="img-fluid img-lg"
                        />
                      </div>
                    </div>

                    <div
                      className="d-flex pt-4 align-items-center justify-content-between"
                    >
                      <div className="pr-3">
                        <h5>Gadkari urges farmers to make biofuel to replace petrol, diesel --Zee News</h5>
                        <div className="fs-12">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                      <div className="rotate-img">
                        <img
                          src="assets/images/dashboard/bio3.jpg"
                          alt="thumb"
                          className="img-fluid img-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="row" data-aos="fade-up">
              <div className="col-sm-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="card-title">
                          Video
                        </div>
                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/vid1.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Bio Fuel</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/vid2.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Bio Fuel</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/vid3.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Bio Fuel</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/vid4.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Bio Fuel</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/new1.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-10 mb-0 fs-18">
                          Cabinet approves National Biofuel Policy
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/new2.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-10 mb-0">
                          India’s EV wave is the future but Biofuels are changing the game now!
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_13.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-10 mb-0">
                          Tata Steel deploys first biofuel-powered ship for raw material transport
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                
                                src="assets/images/dashboard/new4.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-10">
                          Need to boost biofuel production to reduce dependence on import of crude oil
                          </h3>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
        </div>
         </div>
                 
      </div>
    );
}

export default News;