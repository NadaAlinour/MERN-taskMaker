import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div>
          <label>Email:</label><br></br>
          <br></br>
          <input
            type="text"
            placeholder="your email here"
            value={login.email}
            onChange={(e) => {
              setLogin({
                ...login,
                email: e.target.value,
              });
            }}
          ></input>
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Password:</label><br></br>
          <br></br>
          <input
            type="password"
            placeholder="your password here"
            value={login.password}
            onChange={(e) => {
              setLogin({
                ...login,
                password: e.target.value,
              });
            }}
          ></input>
        </div>
        <br></br>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;
