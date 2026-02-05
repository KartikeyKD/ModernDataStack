import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();

  useEffect(() => {
    props.setside("none");
    props.setNav("none");
  }, [props]);

  const handleSubmit = async (e) => {
    props.setProgress(10);
    e.preventDefault();
    // const response = await fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: credentials.email,
    //     password: credentials.password,
    //   }),
    // });
    props.setProgress(70);
    // const json = await response.json();
// console.log(response)
    // if (!response) {
    //   // props.showAlert("Logged in Successfully", "success");
    //   props.setProgress(100);
    //   // Save the auth token and redirect
    //   localStorage.setItem("name", credentials.email);
    //   localStorage.setItem("token", credentials.password);
    //   localStorage.setItem("userType", "admin");
    //   props.setUserName(credentials.email);
    //   history("/connectors");
    //   window.location.reload();
    // }else if(!response.error){
    //   console.log("Hello")
    //   props.setProgress(100);
    //   // Save the auth token and redirect
    //   localStorage.setItem("name", "Kartikeya");
    //   localStorage.setItem("token", credentials.password);
    //   localStorage.setItem("userType", "admin");
    //   props.setUserName(credentials.email);
    //   history("/connectors");
    //   window.location.reload();
    // } else {
    //   alert("Invalid credentials");
    // }
    console.log("Hello")
      props.setProgress(100);
      // Save the auth token and redirect
      localStorage.setItem("name", "Kartikeya");
      localStorage.setItem("token", credentials.password);
      localStorage.setItem("userType", "admin");
      props.setUserName(credentials.email);
      history("/connectors");
      window.location.reload();
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="loginleft">
        <div className="text">
          <h1>MDS</h1>
          <p>
            Unleash your database functionality with just single clicks here at
            ETL by BizMetrics Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus quasi alias molestiae! Repellendus saepe nesciunt
            sed, in modi excepturi ipsa magnam vel iste totam omnis sequi
            molestiae dicta consequatur fuga.
          </p>
        </div>
      </div>
      <div className="loginright">
        <div className="divvv">
          <div className="dblimg">
            <img src="/images/bml.png" style={{ height: "100px" }} alt="" />
            <div className="separator2"></div>
            <img src="/images/4.png" alt="" style={{ height: "90px" }} />
          </div>
        </div>
        {/* <h1 className="mds">MDS</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="logincontainer">
            <label
              htmlFor="email"
              style={{ color: "white" }}
              className="form-label"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control mt-2"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />

            <label
              htmlFor="password"
              style={{ color: "white" }}
              className="form-label mt-4"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control mt-2"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="passwordl"
            />

            <button
              type="submit"
              // style={{ width: "27vw" }}
              className="btn btn-outline-primary mt-2"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
