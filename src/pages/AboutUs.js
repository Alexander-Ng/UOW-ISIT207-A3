import React from 'react';
import Map from '../components/Map';

const aboutus = [
  {
    title: 'Our Mission',
    summary: 'Pet Heaven is dedicated to providing a safe haven for abandoned pets and ensuring they find loving homes. We believe every pet deserves a second chance, and we strive to connect them with caring families who will provide the love and care they deserve.'
  },
  {
    title: 'Our History',
    summary: 'Founded in 2015, Pet Heaven started as a small community effort to rescue and rehabilitate stray pets. Over the years, we have grown into a well-recognized charity organization that has helped thousands of pets find new homes. Our dedicated team of volunteers and supporters work tirelessly to ensure every pet in our care is well taken care of.'
  },
  {
    title: 'Our Team',
    summary: 'Our team is made up of passionate individuals and volunteers who love animals and are committed to their welfare. From our veterinarians to our adoption counselors, everyone at Pet Heaven works with one goal in mind: to provide the best possible life for the pets we care for.'
  },
  {
    title: 'Contact Us',
    summary: (
      <div>
        If you have any questions or would like to get involved, please don't hesitate to reach out to us. You can contact us via email at <a href="mailto:info@petheaven.org">info@petheaven.org</a> or visit us at our main shelter at SIM Global Education, 461 Clementi Rd, Singapore 599491.
      </div>
    )
  },
  {
    title: 'Map Location',
  }
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Pet Heaven Society</h1>
      <br></br>
      <div>
        {aboutus.map((about, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{about.title}</h2>
            <p>{about.summary}</p>
          </div>
        ))}
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

