import React from "react";

function Signup() {
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <div className="has-text-centered">
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
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
