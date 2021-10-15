import React from "react";
import { connect } from "react-redux";
import { registerWithEmail } from "../actions/authActions";
const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label>Email</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const mapStatetoprops = () => {};
const mapDispatchToProps = { registerWithEmail };

export default connect(mapStatetoprops, mapDispatchToProps)(Register);
