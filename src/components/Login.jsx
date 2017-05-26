import React from 'react';
class Login extends React.Component {
   render() {
      return (
         <div className="form-group">
            <form className="form-inline">

            <label className="sr-only" htmlFor="inlineFormInput">Username</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="User Name"/>

            <label className="sr-only" htmlFor="inlineFormInputGroup">password</label>
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Password"/>

            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Remember me
            </label>

            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
      )
   }
}

export default Login;
