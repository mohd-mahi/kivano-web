import React from "react";

const WhatsNextCTA = () => {
  return (
    <section className="whats-next-section padding-section pt-0">
      <div className="container">
        <div className="whats-next-wrapper">
          <div className="container position-relative z-10">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="whats-next-left-content">
                  <div className="whats-next-img">
                    <img src="/images/looking-for-help-char.png" alt="" />
                  </div>
                  <div className="whats-next-text">
                    <h2>
                      What's <i> Next?</i>
                    </h2>
                    <ul>
                      <li>
                        <img src="/images/browse-toys-icon.png" alt="" />
                      </li>
                      <li>
                        <img src="/images/brochure-icon.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="whats-next-right-content">
                  <h2>looking for help ?</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/images/call-icon.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/whatsapp-icon.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/email-icon.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNextCTA;
