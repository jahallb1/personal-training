import React from "react";

function Login() {
  return (
    <div>
      <div className="columns">
        <div className="column">
            <h1>Welcome!</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
