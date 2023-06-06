import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const { signup, error, isLoading } = useSignup();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(signupData);
    await signup(signupData.email, signupData.password);
  };

  return (
    <div className="form">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>

        <div>
          <label>Email:</label>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="your email here"
            value={signupData.email}
            onChange={(e) => {
              setSignupData({
                ...signupData,
                email: e.target.value,
              });
            }}
          ></input>
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Password:</label>
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="your password here"
            value={signup.password}
            onChange={(e) => {
              setSignupData({
                ...signupData,
                password: e.target.value,
              });
            }}
          ></input>
        </div>
        <br></br>
        <button disabled={isLoading} type="submit">Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default Signup;
