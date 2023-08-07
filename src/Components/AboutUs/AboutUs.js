import React from "react";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-section" style={{ marginTop: "20vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="aboutus">
                <h2 className="aboutus-title">About Us</h2>
                <p className="aboutus-text">
                  With over 40 years of experience, Lush continues its legacy of
                  providing superior fabric, value for money and trendsetting
                  apparel to its consumers. It all began in 1976 when the
                  textile industry had not even flourished to its complete
                  potential,
                </p>
                <p className="aboutus-text">
                  The umbrella brand is now clearly divided into two: Lush –
                  Men’s Formal Clothing, Knits, and Ethnic Wear; and Store –
                  Women’s Prêt, Unstitched, and Accessories.
                </p>
                <a className="aboutus-more" href="#">
                  read more
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="aboutus-banner">
                <img
                  style={{ width: "200px" }}
                  src="https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/292232735_1784549591876344_8983966659688233200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG0sHCgLV2gULmqEDV-NR2h01yH35fLqHvTXIffl8uoe-AmgwFpoU4W6drjuqlqWHIjzqVPdlvWOFpyClnZj4jY&_nc_ohc=f8hZVxvHYz0AX8-C28L&_nc_ht=scontent.flhe5-1.fna&oh=00_AfDAvkMxE0QBzTMTGBwxWyyO0GmiuywYPG2XdFZ2WjAk7Q&oe=645D3436"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
