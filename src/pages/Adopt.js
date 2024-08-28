import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Release.css';

const Adopt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petName: location.state?.cat?.name || '',
    reason: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (location.state?.cat) {
      setFormData(prevData => ({
        ...prevData,
        petName: location.state.cat.name
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your application! We will contact you soon.');
      navigate('/');
    }
  };

  return (
    <div className="pet-release-form-container" style={styles.container}>
      <h1 style={styles.title}>Adopt a Pet</h1>
      {location.state?.cat && (
        <div style={styles.selectedCat}>
          <img src={location.state.cat.url} alt={`Cat named ${location.state.cat.name}`} style={styles.catImage} />
          <p>You're applying to adopt {location.state.cat.name}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={errors.name ? {...styles.input, ...styles.inputError} : styles.input}
          />
          {errors.name && <p style={styles.errorText}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={errors.email ? {...styles.input, ...styles.inputError} : styles.input}
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={errors.phone ? {...styles.input, ...styles.inputError} : styles.input}
          />
          {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="petName" style={styles.label}>Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            style={styles.input}
            readOnly
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="reason" style={styles.label}>Why do you want to adopt this pet?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.submitButton}>Submit Adoption Application</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: '#fff',
    textDecoration: 'none',
  },
  title: {
    fontSize: '2em',
    color: '#cdcdcd',
    marginBottom: '20px',
  },
  selectedCat: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  catImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  inputError: {
    borderColor: 'red',
  },
  textarea: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  errorText: {
    color: 'red',
    fontSize: '0.8em',
    marginTop: '5px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Adopt;