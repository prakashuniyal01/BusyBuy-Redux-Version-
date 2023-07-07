import React, { useState } from "react";
import styles from "./register.module.scss";
import { signUpUserWithEmailAndPassword, db } from "../../firebaseinit";
import { useAuth } from "../../context/userContext";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const { setUser } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user } = await signUpUserWithEmailAndPassword(
      data.email,
      data.password
    );
    // const newUser = {
    //   displayName: data.name,
    //   email: data.email,
    //   createdAt: new Date(),
    // };

    setUser(user);
    // Add a new document with a generated id.
    await addDoc(collection(db, "users"), user);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.register_container}>
      <div className={styles.register_wrapper}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={data.name}
            onChange={(e) => handleChange(e)}
          />
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
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
