import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import { signInUserWithEmailAndPassword, db } from "../../firebaseinit";
import { useAuth } from "../../context/userContext";
import { collection, addDoc } from "firebase/firestore";

const Login = () => {
  const { setUser } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user } = await signInUserWithEmailAndPassword(
      data.email,
      data.password
    );
    console.log(user);
    setUser(user);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={data.password}
            onChange={(e) => handleChange(e)}
          />
          <button>Sign In</button>
          <Link to="/signup">
            <p>Or SignUp instead</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
