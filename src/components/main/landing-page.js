import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './styles/landing-page.css';

import LoginForm from "../users/login-form";
import RegistrationForm from "../users/registration-form";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registering: false,
      redirectingToDash: false
    };
  }

  componentWillMount() {
    this.setState({
      registering: false,
      redirectingToDash: false
    });
  }
  componentWillUnmount() {
    this.setState({
      registering: false,
      redirectingToDash: false
    });
  }

  toggleRegistration(bool) {
    this.setState({
      registering: bool
    });
  }

  render() {
  return (
    <div>
      <div className="intro-topper">
        <h1>GO helps you explore the great outdoors - <br/>
          right in your own neighborhood</h1>
      </div>

      <div className="intro-text">
          <h3>Recommend your favorite nature sites: hiking <br/>
          trails, parks, ponds, mountains, stargazing, <br/>
          campgrounds...the sky is the limit!</h3><br/>
          <img className="backpack" src="https://i.postimg.cc/ZnFx9sN4/climbingpack.png" />
          <br/>
          <h3>See what places other users cannot<br/>
          talking about</h3>

          <img className="tent" src="https://i.postimg.cc/mDSPCvmX/kisspng-camping-tent-campsite-campfire-clip-art-sick-dog-cartoon.png" />
          <br/>
          <h2>Join the discussion.<br/>
          Make community.<br/>
          Get Outside.</h2>
      </div>
      <div className="login-form-placement">
        <LoginForm />
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
//=======
  // toggleRedirectingToDash(bool) {
  //   this.setState({
  //     redirectingToDash: bool
  //   });
  // }

  // // If we are logged in redirect straight to the user's dashboard
  // render() {
  //   if (this.state.redirectingToDash === true) {
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: "/dashboard"
  //         }}
  //       />
  //     );
  //   }
  //   if (this.props.loggedIn.currentUser !== null) {
  //     return (
  //       <div className="home">
  //         <h2>Parks!</h2>
  //         {/*depending on this.state.registering, we toggle between a registration
  //       and a login form. The button switches as well.*/}
  //         <button
  //           onClick={() => this.toggleRedirectingToDash(true)}
  //           name="go-to-dashboard"
  //         >
  //           Get <strong>GO</strong>
  //           ing!
  //         </button>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="home">
  //       <h2>Parks!</h2>
  //       {/*depending on this.state.registering, we toggle between a registration
  //       and a login form. The button switches as well.*/}
  //       {this.state.registering ? <RegistrationForm /> : <LoginForm />}
  //       {this.state.registering ? (
  //         <button
  //           onClick={() => this.toggleRegistration(false)}
  //           name="go-to-login"
  //         >
  //           Back to Login
  //         </button>
  //       ) : (
  //         <button
  //           onClick={() => this.toggleRegistration(true)}
  //           name="go-to-registration"
  //         >
  //           Create Account
  //         </button>
  //       )}
  //     </div>
  //   );
  // }
//>>>>>>> master
  }}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
