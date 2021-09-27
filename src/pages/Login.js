import React from "react";

function Login() {
  return (
    <div>
      <div className="columns">
        <div className="column">
            <h1>Welcome!</h1>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
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
