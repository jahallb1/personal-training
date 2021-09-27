import React from "react";

function Signup() {
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <div className="has-text-centered">
            <h1 className="is-size-3">Please Signup</h1>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
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
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;

// Add in passwor confimration streghtn thing
