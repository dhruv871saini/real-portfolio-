import React from "react";
import "./contact.css";

const Contact = () => {
  const handleSubmit=(e)=>{
    // e.preventDefault();
  }
  return (
    <div className="heights">
      <div className="container">
        <div className="row">
          <div className="col-md-12 display-3 oranges text-uppercase">
            get in touch
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="input borders">
                  <label htmlFor="" className="oranges fs-4">
                    Name
                  </label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="input borders">
                  <label htmlFor="" className="oranges fs-4">
                    Email
                  </label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="input borders">
                  <label htmlFor="" className="oranges fs-4">
                    Message
                  </label>
                  <textarea className="form-control" placeholder="" />
                </div>
                <button type="submit" className="border-0 mt-5 w-50 rounded p-2 bg-oranges fs-4 fw-bold">
                  submit{" "}
                  <span className="hgi-twotone hgi-circle-arrow-down-03">
                    <RightArrowIcon />
                  </span>
                </button>
              </div>
            </div>
              </form>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-9 margintop">
                <div className="mt-4 mx-5">
                  <img
                    className="bg-oranges rounded images"
                    src={`${process.env.PUBLIC_URL}/images/computer-icons-email-stock-photography-e-mail-30bd8499f9c794ba8c0a4c8944542808.png`}
                    alt="Email"
                  />
                  <span className="fw-bold text-white fs-5 mx-3">
                    dhruvsaini871@gmail.com
                  </span>
                </div>
                <div className="mt-4 mx-5">
                  <img
                    className="bg-oranges rounded images"
                    src={`${process.env.PUBLIC_URL}/images/iphone-telephone-call-logo-email-awesome-vector-9cee9390146eccc7658ba9daa646b39a.png`}
                    alt="Phone"
                  />
                  <span className="fw-bold text-white fs-5 mx-3">
                    +91 7011643240
                  </span>
                </div>
                <div className="mt-4 mx-5 d-flex">
                  <div>
                    <img
                      className="bg-oranges rounded images"
                      src={`${process.env.PUBLIC_URL}/images/computer-icons-location-clip-art-location-icon-9b50fbb0c042719159b4919135d0d37e.png`}
                      alt="Location"
                    />
                  </div>
                  <span className="fw-bold text-white fs-5 mx-3">
                    <span>
                      Saini Maholla Nangloi
                      <div>New Delhi-41 India</div>
                    </span>
                  </span>
                </div>
                {/* <div className="mt-4 mx-5 d-flex">
                  <div className="mx-3">
                    <a href="" target="_blank">
                      <img
                        className="images"
                        src={`${process.env.PUBLIC_URL}/images/computer-icons-facebook-clip-art-facebook-fd1a7f79d70c176d951c3f96deea3433.png`}
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="" target="_blank">
                      <img
                        className="images"
                        src={`${process.env.PUBLIC_URL}/images/Instagram-icon-isolated-on-transparent-background-PNG.png`}
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="" target="_blank">
                      <img
                        className="images"
                        src={`${process.env.PUBLIC_URL}/images/5bbf4bc81d430-d3dba5516582cf35aac1f745da5c5fbd.png`}
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="" target="_blank">
                      <img
                        className="images"
                        src={`${process.env.PUBLIC_URL}/images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png`}
                        alt="GitHub"
                      />
                    </a>
                  </div>
                  <div className="mx-3">
                    <a href="https://www.youtube.com/channel/UC9Kig_7X95luVYcz9izfE2Q" target="_blank">
                      <img
                        className="images text-center"
                        src={`${process.env.PUBLIC_URL}/images/Youtube-icon-symbol-on-transparent-background-PNG.png`}
                        alt="YouTube"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-4 mx-5 d-flex">
                </div> */}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


const RightArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg"
      role="img"
      color="#000000"
    >
      <path
        d="M8.19486 5.40705C8.52237 4.96235 9.14837 4.86736 9.59306 5.19488C9.93847 5.44927 10.2668 5.70372 10.5528 5.92689C11.1236 6.3724 11.8882 6.98573 12.6556 7.65208C13.4181 8.31412 14.2064 9.04815 14.8119 9.73344C15.1136 10.0749 15.3911 10.4279 15.5986 10.7721C15.7895 11.0888 16 11.524 16 12.0001C16 12.4762 15.7895 12.9115 15.5986 13.2282C15.3911 13.5724 15.1136 13.9253 14.8119 14.2668C14.2064 14.9521 13.4181 15.6861 12.6556 16.3482C11.8882 17.0145 11.1236 17.6278 10.5528 18.0734C10.2668 18.2965 9.93847 18.551 9.59307 18.8054C9.14837 19.1329 8.52237 19.0379 8.19486 18.5932C8.0632 18.4144 7.99983 18.2064 8.00001 18.0002L8 12.0001L8 6.00007C7.99983 5.79387 8.0632 5.58581 8.19486 5.40705Z"
        fill="#000000"
      ></path>
    </svg>
  );
};
