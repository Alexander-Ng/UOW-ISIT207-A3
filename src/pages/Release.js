import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Release.css';

function Release() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    petAge: '',
    petBreed: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    releaseReason: '',
    healthStatus: ''
  });

    const customStyles = {
        option: (base, { data, isDisabled, isFocused, isSelected }) => {
        return {
        ...base,
        backgroundColor: isFocused ? "red" : "blue",
        };
    }
    };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.petName) newErrors.petName = 'Pet name is required';
    if (!formData.petType) newErrors.petType = 'Pet type is required';
    if (!formData.petAge) newErrors.petAge = 'Pet age is required';
    if (!formData.petBreed) newErrors.petBreed = 'Pet breed is required';
    if (!formData.ownerName) newErrors.ownerName = 'Owner name is required';
    if (!formData.ownerEmail) newErrors.ownerEmail = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.ownerEmail)) newErrors.ownerEmail = 'Invalid email address';
    if (!formData.ownerPhone) newErrors.ownerPhone = 'Phone number is required';
    if (formData.ownerPhone.length < 10) newErrors.ownerPhone = 'Phone number must be at least 10 digits';
    if (!formData.releaseReason) newErrors.releaseReason = 'Reason for release is required';
    if (formData.releaseReason.length < 10) newErrors.releaseReason = 'Please provide more details about the reason for release, at least 10 or more characters';
    if (!formData.healthStatus) newErrors.healthStatus = 'Health status is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      console.log(formData);
      alert('Form submitted successfully. Our Pet Relinquishment Counselors will contact you soon regarding your pet surrender request.');
      navigate('/');
    }
  };

  return (
    <div className="pet-release-form-container">
      <h1>Pet Release Form</h1>
      <br></br>
      <p>We understand that you may have to release your pets due to unforseen circumstances, but all pets are family, and we do accept them here if you are no longer able to take care of them.</p>
      <p>Please fill out this form to release your pet to our animal shelter, and we will make sure that your pet will be taken care of.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Pet Information</h2>
          <div className="form-group">
            <label htmlFor="petType">Pet Type</label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleInputChange}
              styles={customStyles}
            >
              <option id="option" value="" hidden>Select pet type</option>
              <option id="option" value="dog">Dog</option>
              <option id="option" value="cat">Cat</option>
              <option id="option" value="other">Other</option>
            </select>
            {errors.petType && <span className="error">{errors.petType}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="petName">Pet Name</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
            />
            {errors.petName && <span className="error">{errors.petName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="petAge">Pet Age</label>
            <input
              type="text"
              id="petAge"
              name="petAge"
              value={formData.petAge}
              onChange={handleInputChange}
            />
            {errors.petAge && <span className="error">{errors.petAge}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="petBreed">Pet Breed</label>
            <input
              type="text"
              id="petBreed"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleInputChange}
            />
            {errors.petBreed && <span className="error">{errors.petBreed}</span>}
          </div>
        </div>

        <div className="form-section">
          <h2>Owner Information</h2>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
            />
            {errors.ownerName && <span className="error">{errors.ownerName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="ownerEmail">Email</label>
            <input
              type="email"
              id="ownerEmail"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
            />
            {errors.ownerEmail && <span className="error">{errors.ownerEmail}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="ownerPhone">Phone</label>
            <input
              type="tel"
              id="ownerPhone"
              name="ownerPhone"
              value={formData.ownerPhone}
              onChange={handleInputChange}
            />
            {errors.ownerPhone && <span className="error">{errors.ownerPhone}</span>}
          </div>
        </div>

        <div className="form-section">
          <h2>Release Information</h2>
          <div className="form-group">
            <label htmlFor="releaseReason">Reason for Release</label>
            <textarea
              id="releaseReason"
              name="releaseReason"
              value={formData.releaseReason}
              onChange={handleInputChange}
            ></textarea>
            {errors.releaseReason && <span className="error">{errors.releaseReason}</span>}
          </div>
          <div className="form-group">
            <label>Pet's Health Status</label>
            <div className="radio-group">
              {['Excellent', 'Good', 'Fair', 'Poor'].map((status) => (
                <label key={status}>
                  <input
                    type="radio"
                    name="healthStatus"
                    value={status.toLowerCase()}
                    checked={formData.healthStatus === status.toLowerCase()}
                    onChange={handleInputChange}
                  />
                  {status}
                </label>
              ))}
            </div>
            {errors.healthStatus && <span className="error">{errors.healthStatus}</span>}
          </div>
        </div>

        <button class="login-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Pet Release Form'}
        </button>
      </form>
    </div>
  );
}

export default Release;