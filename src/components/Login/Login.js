import { useState, useEffect } from "react";
import { gapi, loadAuth2 } from "gapi-script";
import { useHistory } from "react-router-dom";

import LoginGif from "../../assets/login.gif";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";
import { AUTHENTICATE_USER_URL } from "../../constants/serverDetails";
import { postRequestOptions } from "../../util/generateRequestOptions";
import axios from "axios";
import { DASHBOARD } from "../../routes/routes";

const Login = () => {
  let history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [user, setUser] = useState(null);

  const saveUser = ({ user, token }) => {
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("token", token);
  };

  const authenticateUser = ({ name, emailId }) => {
    const requestOptions = postRequestOptions(AUTHENTICATE_USER_URL, {
      name,
      emailId,
    });
    axios(requestOptions).then((response) => {
      setShowLoader(false);
      history.push(DASHBOARD);
    });
  };

  useEffect(() => {
    const setAuth2 = async () => {
      console.log(process.env.REACT_APP_CLIENT_ID);
      const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_ID, "");
      if (!auth2.isSignedIn.get()) {
        auth2.attachClickHandler(
          document.getElementById("customBtn"),
          {},
          (googleUser) => {
            setShowLoader(true);
            updateUser(googleUser);
          },
          (error) => {
            console.log(JSON.stringify(error));
          }
        );
      }
    };
    setAuth2();
  }, []);

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(
          gapi,
          process.env.REACT_APP_CLIENT_ID,
          ""
        );
        auth2.attachClickHandler(
          document.getElementById("customBtn"),
          {},
          (googleUser) => {
            setShowLoader(true);
            updateUser(googleUser);
          },
          (error) => {
            console.log(JSON.stringify(error));
          }
        );
      };
      setAuth2();
    }
  }, [user]);

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    const accessToken = currentUser.getAuthResponse(true).access_token;
    const emailId = currentUser.getBasicProfile().getEmail();
    console.log(name, accessToken);
    setUser({
      name,
      profileImg,
      accessToken,
    });
    saveUser({ user: name, token: accessToken });
    authenticateUser({ name, emailId });
  };

  return (
    <div className="login-container">
      {showLoader && (
        <div className="d-flex justify-content-center m-auto preloader">
          <div
            className="spinner-grow spinner-grow-sm text-light"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow spinner-grow-sm text-light"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow spinner-grow-sm text-light"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <main className="d-flex flex-row main">
        <div className="left-panel bg-dark">
          <img src={LoginGif} alt="Login" />
        </div>
        <div className="right-panel">
          <div className="text-dark h3 login-header">
            We have designed a super smooth login so you can get started with
            your expense management really fast!
          </div>
          <div className="text-dark login-info">
            Simply click the below button to login using your gmail account and
            start tracking your expenses!
          </div>
          <button
            id="customBtn"
            type="button"
            className="btn btn-light text-secondary sign-in text-dark"
            data-onsuccess="onSignIn"
          >
            <FcGoogle className="google-icon" />
            <i className="text-primary bi bi-google"></i>
            <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
