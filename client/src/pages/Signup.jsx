import { useState } from "react";

const Signup = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signup);
  };

  return (
    <div className="form">
      <form onSubmit={handleSignup}>
      <h1>Signup</h1>

        <div>
          <label>Email:</label><br></br><br></br>
          <input
            type="text"
            placeholder="your email here"
            value={signup.email}
            onChange={(e) => {
              setSignup({
                ...signup,
                email: e.target.value,
              });
            }}
          ></input><br></br><br></br>
        </div>
        <div>
          <label>Password:</label><br></br><br></br>
          <input
            type="password"
            placeholder="your password here"
            value={signup.password}
            onChange={(e) => {
              setSignup({
                ...signup,
                password: e.target.value,
              });
            }}
          ></input>
        </div><br></br>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Signup;
