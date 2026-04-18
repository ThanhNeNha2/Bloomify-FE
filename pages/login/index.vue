<script>
import {
  defineComponent,
  ref
} from 'vue';
import LoginPageContext from './LoginPageContext';

import {
  Icon
} from '@iconify/vue';

export default defineComponent({
  name: 'LoginView',

  components: {
    Icon
  },

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');

    const context = LoginPageContext.create({
      displayNameRef
    })
      .setupComponent();

    return {
      context,
      Icon
    };
  }
});
</script>

<template>
  <div class="unit-login">
    <header class="header">
      <a class="brand" href="/">ATELIER</a>
    </header>

    <main class="main-content">
      <div class="login-card">
        <div class="editorial-side">
          <img
            alt="Luxury atelier"
            class="editorial-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKPmY9hum8OUCHg8wo-O2soPnMvyBSlF1iqbR2wPQKA_Vzw9bNsp8UhgQ4h3Zkzftub4mdFeq5A0kuc1LKZ0OcjLYyql45s_p1Jy5u8XKFo0mUhyplVjUwrNCvOFbvrLbId0atYyJiGcLJ5iwQPE9kVBP2X4MLbM8IfZmnql-1lW-QcHZd64UgJllBY7a-6fyTOnTsS4dgryG--SkABtoZ2CdPrY9kBvONZkA31wTqcD40q6dazbGeOc1GDyrPY1ZQB2TuqH9P9gs"
          />
          <div class="overlay-gradient"></div>
          <div class="editorial-text">
            <p class="sub-title">The Digital Atelier</p>
            <h2 class="editorial-heading">Crafting excellence through digital precision.</h2>
            <div class="accent-line"></div>
          </div>
        </div>

        <div class="form-side">
          <div class="form-container">
            <header class="form-header">
              <h1 class="title">Sign In</h1>
              <p class="subtitle">Enter the world of professional fashion excellence.</p>
            </header>

            <form class="login-form" @submit.prevent>
              <div class="input-group">
                <label class="input-label">Email or Phone Number</label>
                <input
                  class="input-field"
                  placeholder="identity@atelier.com"
                  type="text"
                />
              </div>

              <div class="input-group">
                <div class="label-row">
                  <label class="input-label">Password</label>
                  <a class="forgot-link" href="#">Forgot password?</a>
                </div>
                <div class="relative-container">
                  <input
                    class="input-field"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button class="toggle-password" type="button">
                    <Icon icon="mdi:eye-outline" />
                  </button>
                </div>
              </div>

              <div class="checkbox-group">
                <input id="remember"
                       type="checkbox"
                       class="checkbox-input"/>
                <label for="remember" class="checkbox-label">Remember me for 30 days</label>
              </div>

              <button class="btn-primary">
                Sign In
              </button>

              <div class="divider">
                <span class="divider-text">Or continue with</span>
              </div>

              <div class="social-grid">
                <button class="social-btn" type="button">
                  <Icon icon="logos:google-icon" class="social-icon" />
                  <span>Google</span>
                </button>
                <button class="social-btn" type="button">
                  <Icon icon="logos:facebook" class="social-icon" />
                  <span>Facebook</span>
                </button>
              </div>
            </form>

            <footer class="form-footer">
              <p>
                New to the atelier?
                <a class="signup-link" href="#">Create an account</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>

    <footer class="bottom-footer">
      <div class="footer-brand">ATELIER</div>
      <div class="footer-links">
        <a href="#">PRIVACY</a>
        <a href="#">TERMS</a>
        <a href="#">CONTACT</a>
        <a href="#">SUBSCRIBE</a>
      </div>
      <div class="copyright">© 2024 ATELIER LUXE. ALL RIGHTS RESERVED.</div>
    </footer>
  </div>
</template>

<style scoped>
.unit-login {
  --primary: #000000;
  --secondary: #735a3a;
  --background: #f9f9f7;
  --surface-low: #f4f4f2;
  --surface-lowest: #ffffff;
  --on-surface-variant: #444748;
  --outline-variant: rgba(196, 199, 199, 0.3);

  background-color: var(--background);
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.unit-login > .header {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.unit-login > .header > .brand {
  font-family: 'Noto Serif', serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-decoration: none;
  color: var(--primary);
}

.unit-login > .main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem 1rem 1.5rem;
  min-height: 0;
}

.unit-login > .main-content > .login-card {
  width: 100%;
  max-width: 1000px;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--surface-low);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--outline-variant);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.unit-login > .main-content > .login-card > .editorial-side {
  display: none;
  position: relative;
  background-color: var(--primary);

  @media (min-width: 768px) {
    display: block;
  }
}

.unit-login > .main-content > .login-card > .editorial-side > .editorial-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  mix-blend-mode: luminosity;
}

.unit-login > .main-content > .login-card > .editorial-side > .overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--primary), transparent, transparent);
}

.unit-login > .main-content > .login-card > .editorial-side > .editorial-text {
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
  right: 2.5rem;
}

.unit-login > .main-content > .login-card > .editorial-side > .editorial-text > .sub-title {
  color: #e2c19b;
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.unit-login > .main-content > .login-card > .editorial-side > .editorial-text > .editorial-heading {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: 1.75rem;
  color: white;
  line-height: 1.2;
  max-width: 320px;
}

.unit-login > .main-content > .login-card > .editorial-side > .editorial-text > .accent-line {
  margin-top: 1.5rem;
  height: 1px;
  width: 6rem;
  background-color: var(--secondary);
}

.unit-login > .main-content > .login-card > .form-side {
  padding: 1.5rem;
  background-color: var(--surface-lowest);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
}

.unit-login > .main-content > .login-card > .form-side > .form-container {
  max-width: 28rem;
  margin: 0 auto;
  width: 100%;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-header {
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-header > .title {
  font-family: 'Noto Serif', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-header > .subtitle {
  color: var(--on-surface-variant);
  font-size: 0.875rem;
  font-weight: 300;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .input-label {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--on-surface-variant);
  margin-left: 0.25rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--surface-low);
  border: 1px solid var(--outline-variant);
  border-radius: 0.125rem;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .input-field:focus {
  outline: 1px solid var(--secondary);
  border-color: var(--secondary);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .label-row > .forgot-link {
  font-size: 10px;
  color: var(--secondary);
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .relative-container {
  position: relative;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .relative-container > .input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--surface-low);
  border: 1px solid var(--outline-variant);
  border-radius: 0.125rem;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .input-group > .relative-container > .toggle-password {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--on-surface-variant);
  cursor: pointer;
  font-size: 1.25rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.25rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .checkbox-group > .checkbox-input {
  /* Default styles for input if needed */
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .checkbox-group > .checkbox-label {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  font-weight: 300;
  cursor: pointer;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .btn-primary {
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 0.875rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: none;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .btn-primary:hover {
  background-color: var(--secondary);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .btn-primary:active {
  transform: scale(0.98);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .divider {
  position: relative;
  padding: 0.5rem 0;
  text-align: center;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--outline-variant);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .divider > .divider-text {
  position: relative;
  background-color: var(--surface-lowest);
  padding: 0 1rem;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  letter-spacing: 0.1em;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .social-grid > .social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--outline-variant);
  background: none;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: background 0.3s;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .social-grid > .social-btn:hover {
  background-color: var(--surface-low);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .social-grid > .social-btn > span {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .login-form > .social-grid > .social-btn > .social-icon {
  font-size: 1rem;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-footer {
  margin-top: 1.5rem;
  text-align: center;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-footer > p {
  font-size: 0.75rem;
  font-weight: 300;
  color: var(--on-surface-variant);
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-footer > p > .signup-link {
  color: var(--primary);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 0.25rem;
  transition: color 0.3s;
}

.unit-login > .main-content > .login-card > .form-side > .form-container > .form-footer > p > .signup-link:hover {
  color: var(--secondary);
}

.unit-login > .bottom-footer {
  width: 100%;
  background-color: #f4f4f2;
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-height: 750px) {
    opacity: 0;
    visibility: hidden;
    height: 0;
    padding: 0;
    margin: 0;
    border: none;
    overflow: hidden;
  }
}

.unit-login > .bottom-footer > .footer-brand {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: 1.125rem;
}

.unit-login > .bottom-footer > .footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.unit-login > .bottom-footer > .footer-links > a {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9ca3af;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.unit-login > .bottom-footer > .footer-links > a:hover {
  color: var(--secondary);
}

.unit-login > .bottom-footer > .copyright {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9ca3af;
}
</style>
