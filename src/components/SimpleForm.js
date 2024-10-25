import { useState } from "react";

const SimpleForm = () => {

  const [uName, setUName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert(`Name: ${uName}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>User Name: </label>
      <input
        type="text"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
      />
    </div>
    <div>
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <br /><button type="submit">Submit</button>
  </form>
  );
}

export default SimpleForm;
