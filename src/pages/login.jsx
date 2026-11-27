
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  }

  const formsubmit = (e) => {
    e.preventDefault();

    const registerdata = location.state;

    console.log("Login data", logindata);
    console.log("Register data", registerdata);

    if (
      registerdata &&
      logindata.username === registerdata.name &&
      logindata.password === registerdata.password
    ) {
      navigate("/dashboard", {
        state: logindata
      });
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={formsubmit}>

          <input
            type="text"
            placeholder="Enter your username"
            required
            name="username"
            onChange={handlechange}
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            onChange={handlechange}
          />

          <button type="submit">Login</button>

        </form>

      </div>

    </div>
  );
}

export default Login;
