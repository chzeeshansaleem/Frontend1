import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Authcontext } from "../useContext/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setuserauth, userId, setUserId } = useContext(Authcontext);
  const auth = sessionStorage.getItem("token");
  const adminauth = sessionStorage.getItem("Admintoken");

  const login = async (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please Enter All Fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const response = await axios.post("http://localhost:4000/adminlogin", {
          email,
          password,
        });

        if (response.status === 200) {
          if (response.data.user.email === "admin@gmail.com") {
            sessionStorage.setItem("Admintoken", response.data.token);
            setuserauth(true);
            // alert("Admin login Successful");
            toast.success("Login Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/dashboard");
          } else {
            sessionStorage.setItem("token", response.data.token);
            setUserId(response.data.user);
            console.log(userId);
            setuserauth(true);
            toast.success("Login Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/");
          }
        } else if (response.status == 400) {
          alert("User does not exist!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);

  return (
    <div className={`${auth || adminauth ? "d-none" : "d-block"}`}>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Lush Store</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn mt-3" type="submit" onClick={login}>
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="#">Forget password?</Link> or{" "}
          <Link to="/register">Sign up</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
