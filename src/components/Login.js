import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login__container">
      <div className="hero__bg">
        <img
          src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
          alt="Hero bg"
        />
      </div>
      <div className="form__area">
        <div className="form">
          <img
            src="data:image/png;base64,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"
            alt="Instagram Logo"
          />
          <form>
            <div className="form__field">
              <input type="email" id="Email" name="Email" required />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form__field">
              <input type="password" id="password" name="Password" required />
              <label htmlFor="Password">Password</label>
            </div>
            <button className="primary-insta-btn">Log In</button>
            <div className="fb__login">
              <button className="btn__authFb">
                <FacebookIcon /> Log in with Facebook
              </button>
            </div>
            <a href="#!" className="forgotPassword">
              Forgot Password?
            </a>
          </form>
        </div>
        <div className="signup__area">
          <p>
            Don't have and account? <Link>Signup</Link>
          </p>
        </div>
        <p className="gettheapp">Get the App</p>
        <div className="stores">
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="App Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6A647A9F-A56E-4159-9B48-90D97AD8E20D%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Play Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

//
//
