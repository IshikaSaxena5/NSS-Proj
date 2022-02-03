import React from 'react';
import rd1 from '../images/rd1.jpeg'
import rd2 from '../images/rd2.jpeg'
import rd3 from '../images/rd3.jpeg'
import rd4 from '../images/rd4.jpeg'
import rd5 from '../images/rd5.jpeg'
import rd6 from '../images/rd6.jpeg'
import rd7 from '../images/rd7.jpeg'
import rd8 from '../images/rd8.jpeg'
import rd9 from '../images/rd9.jpeg'
import rd10 from '../images/rd10.jpeg'
import rd11 from '../images/rd11.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css";

const Nukarnatak = () => {
  return (
      <>
      <div className="rd-img" >
          <div className="row">
              <div className="col-lg-4 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd1} alt="" />
              </div>
              <div className="col-lg-4 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd2} alt="" />
              </div>
              <div className="col-lg-4 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd3} alt="" />
              </div>
          </div>

          <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd4} alt="" />
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd5} alt="" />
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd6} alt="" />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd7} alt="" />
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd8} alt="" />
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd9} alt="" />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd10} alt="" />
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1 rdImgCol">
              < img className="rdImage" src={rd11} alt="" />
              </div>
              
          </div>
      </div>
      
      </>
  )
}

export default Nukarnatak;