import React, { useState } from "react";
import "./LoginSingup.css";
import logo from "../assets/logo.png";
import bgVideo from "../assets/website3.mp4";

const LoginSingup = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerEmailError, setRegisterEmailError] = useState("");
  const [registerPasswordError, setRegisterPasswordError] = useState("");
  const [registerUsernameError, setRegisterUsernameError] = useState("");
  const [blinkError, setBlinkError] = useState(false);

  // Password visibility states
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Helper: Email Validation
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
    return emailRegex.test(email);
  };

  // Helper: Username Validation
  const validateUsername = (username) => {
    if (!/^[a-zA-Z]/.test(username)) {
      return { valid: false, message: "Username must start with a letter" };
    }
    if (/\s/.test(username)) {
      return { valid: false, message: "Username cannot contain spaces" };
    }
    if (username.length > 9) {
      return { valid: false, message: "Username must be maximum 9 characters" };
    }
    if (username.length === 0) {
      return { valid: false, message: "Please enter a username" };
    }
    return { valid: true, message: "" };
  };

  // Login form validation
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (!loginEmail.trim()) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!validateEmail(loginEmail)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!loginPassword.trim()) {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (loginPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (isValid) window.location.href = "app.html";
  };

  // Register form validation
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    setRegisterEmailError("");
    setRegisterPasswordError("");
    setRegisterUsernameError("");

    if (!registerEmail.trim()) {
      setRegisterEmailError("Please enter your email");
      isValid = false;
    } else if (!validateEmail(registerEmail)) {
      setRegisterEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!registerPassword.trim()) {
      setRegisterPasswordError("Please enter your password");
      isValid = false;
    } else if (registerPassword.length < 6) {
      setRegisterPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    const userCheck = validateUsername(registerUsername);
    if (!userCheck.valid) {
      setRegisterUsernameError(userCheck.message);
      isValid = false;
    }

    if (!termsCheckbox) {
      setBlinkError(true);
      setTimeout(() => {
        setBlinkError(false);
      }, 1500);
      isValid = false;
    }

    if (isValid) window.location.href = "app.html";
  };

  return (
    <div className="auth-section">
      {/* Background Video */}
      <video id="bg-video" autoPlay muted loop playsInline preload="auto">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="STRUVO" className="logo-icon" />
        <h1>STUVO5</h1>
      </div>

      {/* Auth Box */}
      <div className="login-box">
        {/* ================= LOGIN ================= */}
        <div className={`objects ${isLogin ? "show" : "hidden"}`}>
          <div className="box-head">
            <h1>Log in</h1>
          </div>

          <form id="loginForm" onSubmit={handleLoginSubmit}>
            <div className="input-box">
              <div className="input-wrapper">
                <i className="bx bx-envelope"></i>
                <input
                  id="loginEmail"
                  type="email"
                  placeholder="Enter your email"
                  className={emailError ? "error" : ""}
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                    setEmailError("");
                  }}
                />
                <i
                  id="toggleLoginPassword"
                  className={`bx ${showLoginPassword ? "bx-show" : "bx-hide"}`}
                  style={{ display: "none" }}
                ></i>
              </div>
              {emailError && (
                <span id="emailError" className="error-message show">
                  {emailError}
                </span>
              )}
            </div>

            <div className="input-box">
              <div className="input-wrapper">
                <i className="bx bx-lock"></i>
                <input
                  id="loginPassword"
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Password"
                  className={passwordError ? "error" : ""}
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                <i
                  id="toggleLoginPassword"
                  className={`bx toggle-password ${showLoginPassword ? "bx-show" : "bx-hide"}`}
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              {passwordError && (
                <span id="passwordError" className="error-message show">
                  {passwordError}
                </span>
              )}
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />{" "}
                Remember me
              </label>
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <div className="login-button">
              <button type="submit">Log in</button>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="google-login">
              Continue with Google
            </button>

            <div className="account">
              <p>
                Don&apos;t have an account?{" "}
                <span className="creat-acc" onClick={() => setIsLogin(false)}>
                  Create an account
                </span>
              </p>
            </div>
          </form>
        </div>

        {/* ================= REGISTER ================= */}
        <div className={`objects-register ${isLogin ? "hidden" : "show"}`}>
          <div className="box-head-2">
            <h1>Register</h1>
          </div>

          <form id="registerForm" onSubmit={handleRegisterSubmit}>
            <div className="input-box">
              <div className="input-wrapper">
                <i className="bx bx-envelope"></i>
                <input
                  id="registerEmail"
                  type="email"
                  placeholder="Enter your email"
                  className={registerEmailError ? "error" : ""}
                  value={registerEmail}
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                    setRegisterEmailError("");
                  }}
                />
              </div>
              {registerEmailError && (
                <span id="registerEmailError" className="error-message show">
                  {registerEmailError}
                </span>
              )}
            </div>

            <div className="input-box">
              <div className="input-wrapper">
                <i className="bx bx-lock"></i>
                <input
                  id="registerPassword"
                  type={showRegisterPassword ? "text" : "password"}
                  placeholder="Password"
                  className={registerPasswordError ? "error" : ""}
                  value={registerPassword}
                  onChange={(e) => {
                    setRegisterPassword(e.target.value);
                    setRegisterPasswordError("");
                  }}
                />
                <i
                  id="toggleRegisterPassword"
                  className={`bx toggle-password ${showRegisterPassword ? "bx-show" : "bx-hide"}`}
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              {registerPasswordError && (
                <span id="registerPasswordError" className="error-message show">
                  {registerPasswordError}
                </span>
              )}
            </div>

            <div className="input-box">
              <div className="input-wrapper">
                <i className="bx bx-user"></i>
                <input
                  id="registerUsername"
                  type="text"
                  placeholder="Username"
                  className={registerUsernameError ? "error" : ""}
                  value={registerUsername}
                  onChange={(e) => {
                    setRegisterUsername(e.target.value);
                    setRegisterUsernameError("");
                  }}
                />
              </div>
              {registerUsernameError && (
                <span id="registerUsernameError" className="error-message show">
                  {registerUsernameError}
                </span>
              )}
            </div>

            <div className={`remember ${blinkError ? "blink-error" : ""}`}>
              <label>
                <input
                  id="termsCheckbox"
                  type="checkbox"
                  checked={termsCheckbox}
                  onChange={(e) => {
                    setTermsCheckbox(e.target.checked);
                    setBlinkError(false);
                  }}
                />{" "}
                I agree with terms and conditions
              </label>
            </div>

            <div className="Register-button">
              <button type="submit">Register</button>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="google-login">
              Continue with Google
            </button>

            <div className="have-account">
              <p>
                Already have an account?{" "}
                <span className="Login-acc" onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
