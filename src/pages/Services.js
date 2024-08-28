import React from 'react';

const services = [
  {
    title: 'Adoption Center',
    summary: 'Our Adoption Center is dedicated to finding forever homes for our animals. Visitors can interact with pets in a comfortable environment, supported by knowledgeable counselors who help make the perfect match between adopters and pets.'
  },
  {
    title: 'Adoption Counseling',
    summary: 'Adoption Counseling ensures that both pets and their new families have a successful and happy experience. Our counselors guide prospective adopters through selecting the right pet and provide post-adoption support to address any challenges.'
  },
  {
    title: 'Administrative Offices',
    summary: 'The Administrative Offices manage all operations of the shelter, including fundraising, budgeting, HR, and outreach. Our team ensures that the shelter runs smoothly and continues to fulfill its mission to care for and rehome animals.'
  },
  {
    title: 'Animal Intake and Assessment',
    summary: 'The Animal Intake and Assessment facility is where newly arrived animals are first brought in. Each animal undergoes a thorough health and behavior evaluation to determine the best placement within the shelter or foster care.'
  },
  {
    title: 'Pet Relinquishment Counseling',
    summary: 'Pet Relinquishment Counseling offers compassionate support to pet owners who are considering surrendering their pets. Our counselors explore all alternatives before finalizing the decision and ensure the transition is as stress-free as possible.'
  }
];

const Services = () => {
  return (
    <div className="about-container">
      <h1>Our Services</h1>
      <br></br>
      <div>
        {services.map((service, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
