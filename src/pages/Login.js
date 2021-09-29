import React from "react";
import { Link } from 'react-router-dom';

const titleHead = {
    paddingTop: "1rem",
}

function Login() {
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <div className="has-text-centered" style={titleHead}>
            <h1 className="is-size-3">Welcome!</h1>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="yourname@email.com"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" />
            </div>
          </div>
          <div className="has-text-right question">
              <p>Don't have an account?  <Link to={"/signup"}>Click me</Link> to make one.</p>
          </div>
          <button className="btn is-primary">Login</button>
          <button className="btn is-warning">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

  
