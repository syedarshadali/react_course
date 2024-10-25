import { useState } from "react";

const SimpleFormValidation = () => {

  const [uName, setUName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    let formErrors = {};
    if (!uName) formErrors.uName = 'User Name is required';
    if (!email) formErrors.email = 'Email is required';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    // If no errors, submit the form
    alert(`Name: ${uName}, Email: ${email}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">User Name:</label>
      <input
        type="text"
        id="name"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
        className={errors.uName ? 'input-error' : ''}
      />
      {errors.uName && <p className="error-message">{errors.uName}</p>}
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={errors.email ? 'input-error' : ''}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}
    </div>
    <button type="submit" className="submit-btn">Submit</button>
  </form>
  );
}

export default SimpleFormValidation;
