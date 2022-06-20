import "./App.css";
import useState from "react";
function App() {

  const initialformData = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialformData)
  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="container">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="separator"></div>
        <div className="formContent">
          <div className="formField">
            <label className="formLabel">Frist Name</label>
            <input type="text"
              placeholder="Enter first name"
              value={formData.firstName}
              onSubmit={handleChange}
              autoFocus required />
          </div>
          <div className="formField">
            <label className="formLabel">Last Name</label>
            <input type="text"
              placeholder="Enter last name"
              value={formData.lastName}
              onSubmit={handleChange}
              required />
          </div>
          <div className="formField">
            <label className="formLabel">Email</label>
            <input type="email"
              placeholder="Enter email"
              value={formData.email}
              onSubmit={handleChange}
              required />
          </div>
          <div className="formField">
            <label className="formLabel">Password</label>
            <input type="password"
              placeholder="Enter password"
              value={formData.password}
              onSubmit={handleChange}
              required />
          </div>
          <button className="signUpButton">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
