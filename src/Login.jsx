import { useState } from 'react';
import PropTypes from 'prop-types';
import bookIllustration from './assets/colorful_img.png';

const componentStyles = String.raw`.login-page {
min-height: 100vh;
  background:
    radial-gradient(ellipse at 12% 18%, rgb(255 221 243 / 70%), transparent 32%),
    linear-gradient(130deg, #fffafe, #fff3fa 65%, #fff);
  color: #171a39;
  font-family: 'Poppins', sans-serif;
}

.login-header {
display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(20px, 6vw, 88px);
  border-bottom: 1px solid rgb(238 232 245 / 75%);
  background: rgb(255 255 255 / 70%);
}

.login-brand {
display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #171a39;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1.2px;
  text-decoration: none;
}

.login-brand-mark {
width: 42px;
  height: 36px;
}

.login-brand strong {
color: #ec1682;
}

.login-back {
display: inline-flex;
  min-height: 40px;
  align-items: center;
  gap: 8px;
  padding: 0 15px;
  border: 1px solid #eee3ef;
  border-radius: 999px;
  background: #fff;
  color: #34334f;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: border-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.login-back:hover {
transform: translateX(-2px);
  border-color: #ffc4e1;
  color: #d90070;
}

.login-layout {
display: grid;
  width: min(1120px, calc(100% - 48px));
  min-height: calc(100vh - 77px);
  grid-template-columns: minmax(0, 1.1fr) minmax(380px, .9fr);
  align-items: center;
  gap: clamp(32px, 7vw, 92px);
  margin: 0 auto;
  padding: 48px 0;
}

.login-intro {
position: relative;
  min-width: 0;
}

.login-eyebrow {
display: inline-flex;
  min-height: 30px;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 999px;
  background: #ffe2f2;
  color: #ce0870;
  font-size: 12px;
  font-weight: 600;
}

.login-intro h1 {
max-width: 560px;
  margin: 20px 0 12px;
  color: #171a39;
  font-size: clamp(38px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -2.6px;
  line-height: 1.08;
}

.login-intro h1 span {
color: #ec1682;
}

.login-intro > p {
max-width: 440px;
  margin: 0;
  color: #596080;
  font-size: 15px;
  line-height: 1.8;
}

.login-illustration {
display: block;
  width: min(100%, 520px);
  max-height: 360px;
  margin: 12px auto 0;
  object-fit: contain;
  filter: drop-shadow(0 16px 24px rgb(193 78 146 / 12%));
}

.login-benefit {
display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  color: #596080;
  font-size: 13px;
}

.login-benefit svg {
color: #ec1682;
}

.login-card {
width: 100%;
  padding: clamp(26px, 4vw, 42px);
  border: 1px solid #f0e5f1;
  border-radius: 24px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 18px 55px rgb(64 37 81 / 10%);
}

.login-card h2 {
margin: 0;
  color: #171a39;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
}

.login-card-subtitle {
margin: 7px 0 26px;
  color: #747995;
  font-size: 13px;
  line-height: 1.6;
}

.login-form {
display: grid;
  gap: 18px;
}

.login-field {
display: grid;
  gap: 8px;
  color: #34334f;
  font-size: 13px;
  font-weight: 600;
}

.login-input-wrap {
position: relative;
}

.login-input-wrap input {
width: 100%;
  min-height: 50px;
  padding: 0 14px;
  border: 1px solid #e5dfeb;
  border-radius: 11px;
  outline: none;
  background: #fff;
  color: #171a39;
  font-size: 14px;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.login-input-wrap input:focus {
border-color: #ec1682;
  box-shadow: 0 0 0 3px rgb(236 22 130 / 12%);
}

.login-input-wrap input::placeholder {
color: #a3a5b7;
}

.login-input-wrap.has-action input {
padding-right: 68px;
}

.login-password-toggle {
position: absolute;
  top: 50%;
  right: 12px;
  padding: 5px;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: #747995;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.login-password-toggle:hover {
color: #d90070;
}

.login-form-options {
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: -3px;
}

.login-remember {
display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #596080;
  cursor: pointer;
  font-size: 12px;
}

.login-remember input {
width: 15px;
  height: 15px;
  accent-color: #ec1682;
}

.login-forgot {
padding: 0;
  border: 0;
  background: transparent;
  color: #d90070;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
}

.login-submit {
min-height: 50px;
  margin-top: 2px;
  border: 0;
  border-radius: 11px;
  background: linear-gradient(110deg, #ff3da1, #e60078);
  box-shadow: 0 6px 15px rgb(230 0 120 / 20%);
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.login-submit:hover {
transform: translateY(-1px);
  box-shadow: 0 9px 18px rgb(230 0 120 / 25%);
}

.login-message {
margin: 0;
  color: #596080;
  font-size: 12px;
  line-height: 1.5;
}

.login-card-footer {
margin: 22px 0 0;
  padding-top: 18px;
  border-top: 1px solid #f0eaf2;
  color: #747995;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 800px) {
.login-layout {
width: min(520px, calc(100% - 36px));
  min-height: auto;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 32px 0;
}

.login-intro {
text-align: center;
}

.login-intro h1 {
margin: 13px auto 8px;
  font-size: clamp(34px, 8vw, 46px);
}

.login-intro > p {
margin: 0 auto;
  font-size: 13px;
}

.login-illustration {
width: min(72%, 300px);
  max-height: 190px;
  margin: 6px auto 0;
}

.login-benefit {
display: none;
}
}

@media (max-width: 480px) {
.login-header {
min-height: 64px;
  padding: 0 16px;
}

.login-brand {
gap: 6px;
  font-size: 20px;
}

.login-brand-mark {
width: 34px;
  height: 30px;
}

.login-back {
min-height: 36px;
  gap: 5px;
  padding: 0 11px;
  font-size: 12px;
}

.login-layout {
width: calc(100% - 32px);
  gap: 16px;
  padding: 23px 0 32px;
}

.login-illustration {
max-height: 150px;
}

.login-card {
padding: 25px 20px;
  border-radius: 19px;
}

.login-card h2 {
font-size: 26px;
}
}

@media (prefers-reduced-motion: reduce) {
.login-back,
  .login-input-wrap input,
  .login-submit {
transition: none;
}
}`;

function BrandMark() {
  return (
    <svg className="login-brand-mark" viewBox="0 0 48 40" aria-hidden="true">
      <path d="M3 8c8-3 15-1 21 5v23C17 30 10 28 3 31V8Z" fill="#ec1682" />
      <path d="M45 8c-8-3-15-1-21 5v23c7-6 14-8 21-5V8Z" fill="#fa4eae" />
      <path d="M7 12c5-1 10 0 14 3M7 17c5-1 10 0 14 3m20-8c-5-1-10 0-14 3m14 2c-5-1-10 0-14 3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M2 34c8-3 15-1 22 5 7-6 14-8 22-5" fill="none" stroke="#b50870" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Sign-in is not connected yet. Please connect an authentication service to continue.');
  }

  return (
    <>
      <style>{componentStyles}</style>
      <main className="login-page">
        <header className="login-header">
          <a className="login-brand" href="#home" onClick={onClose} aria-label="BookStore home">
            <BrandMark />
            <span>book<strong>Store</strong></span>
          </a>
          <button className="login-back" type="button" onClick={onClose}>
            <span aria-hidden="true">←</span>
            Back to store
          </button>
        </header>

        <div className="login-layout">
          <section className="login-intro" aria-labelledby="login-welcome-title">
            <span className="login-eyebrow">
              <span aria-hidden="true">✦</span>
              Your next chapter starts here
            </span>
            <h1 id="login-welcome-title">Welcome back to your <span>book world.</span></h1>
            <p>Sign in to pick up where you left off and keep discovering stories, ideas, and new skills.</p>
            <img
              className="login-illustration"
              src={bookIllustration}
              alt="A colorful stack of books ready for your next read"
            />
            <div className="login-benefit">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 4 4L19 6" />
              </svg>
              Your reading journey, all in one place
            </div>
          </section>

          <section className="login-card" aria-labelledby="login-title">
            <h2 id="login-title">Welcome back</h2>
            <p className="login-card-subtitle">Enter your details to sign in to your account.</p>

            <form onSubmit={handleSubmit} className="login-form">
              <label className="login-field">
                <span>Name </span>
                <span className="login-input-wrap">
                  <input
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => {  
                    setName(event.target.value);
                    setMessage('');
                    }}
                    required
                    placeholder="Enter your name"
                  />
                </span>
              
                <span>Email address</span>
                <span className="login-input-wrap">
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setMessage('');
                    }}
                    required
                    placeholder="name@example.com"
                  />
                </span>
              </label>

              <label className="login-field">
                <span>Password</span>
                <span className="login-input-wrap has-action">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setMessage('');
                    }}
                    required
                    placeholder="Enter your password"
                  />
                  <button
                    className="login-password-toggle"
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </span>
              </label>

              <div className="login-form-options">
                <label className="login-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <button
                  className="login-forgot"
                  type="button"
                  onClick={() => setMessage('Password recovery is not available until an authentication service is connected.')}
                >
                  Forgot password?
                </button>
              </div>

              <button className="login-submit" type="submit">Sign in</button>
              {message && <p className="login-message" role="status">{message}</p>}
            </form>

            <p className="login-card-footer">
              Secure sign-in for your BookStore account.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};
