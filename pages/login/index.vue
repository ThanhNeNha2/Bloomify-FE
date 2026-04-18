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
/* Root variables based on your Tailwind config */
.unit-login {
  --primary: #000000;
  --secondary: #735a3a;
  --background: #f9f9f7;
  --surface-low: #f4f4f2;
  --surface-lowest: #ffffff;
  --on-surface-variant: #444748;
  --outline-variant: rgba(196, 199, 199, 0.3);

  background-color: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

/* Header */
.header {
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .header { justify-content: flex-start; }
}

.brand {
  font-family: 'Noto Serif', serif;
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-decoration: none;
  color: var(--primary);
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem 5rem 1.5rem;
}

.login-card {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--surface-low);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--outline-variant);
}

@media (min-width: 768px) {
  .login-card { grid-template-columns: 1fr 1fr; }
}

/* Left Side Image */
.editorial-side {
  display: none;
  position: relative;
  min-height: 600px;
  background-color: var(--primary);
}

@media (min-width: 768px) {
  .editorial-side { display: block; }
}

.editorial-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-cover: cover;
  opacity: 0.8;
  mix-blend-mode: luminosity;
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--primary), transparent, transparent);
}

.editorial-text {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  right: 3rem;
}

.sub-title {
  color: #e2c19b;
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.editorial-heading {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: 2.25rem;
  color: white;
  line-height: 1.2;
  max-width: 320px;
}

.accent-line {
  margin-top: 2rem;
  height: 1px;
  width: 6rem;
  background-color: var(--secondary);
}

/* Right Side Form */
.form-side {
  padding: 2rem;
  background-color: var(--surface-lowest);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .form-side { padding: 4rem; }
}

.form-container {
  max-width: 28rem;
  margin: 0 auto;
  width: 100%;
}

.form-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .form-header { text-align: left; }
}

.title {
  font-family: 'Noto Serif', serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--on-surface-variant);
  font-size: 0.875rem;
  font-weight: 300;
}

/* Inputs */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--on-surface-variant);
  margin-left: 0.25rem;
}

.input-field {
  width: 100%;
  padding: 1rem;
  background-color: var(--surface-low);
  border: 1px solid var(--outline-variant);
  border-radius: 0.125rem;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.input-field:focus {
  outline: 1px solid var(--secondary);
  border-color: var(--secondary);
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 10px;
  color: var(--secondary);
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
}

.relative-container {
  position: relative;
}

.toggle-password {
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

/* Checkbox */
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.25rem;
}

.checkbox-label {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  font-weight: 300;
  cursor: pointer;
}

/* Button */
.btn-primary {
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 1rem;
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

.btn-primary:hover {
  background-color: var(--secondary);
}

.btn-primary:active {
  transform: scale(0.98);
}

/* Divider */
.divider {
  position: relative;
  padding: 1rem 0;
  text-align: center;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--outline-variant);
}

.divider-text {
  position: relative;
  background-color: var(--surface-lowest);
  padding: 0 1rem;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  letter-spacing: 0.1em;
}

/* Social Buttons */
.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--outline-variant);
  background: none;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: background 0.3s;
}

.social-btn:hover {
  background-color: var(--surface-low);
}

.social-btn span {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.social-icon {
  font-size: 1rem;
}

/* Form Footer */
.form-footer {
  margin-top: 3rem;
  text-align: center;
}

.form-footer p {
  font-size: 0.75rem;
  font-weight: 300;
  color: var(--on-surface-variant);
}

.signup-link {
  color: var(--primary);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 0.25rem;
  transition: color 0.3s;
}

.signup-link:hover {
  color: var(--secondary);
}

/* Bottom Footer */
.bottom-footer {
  width: 100%;
  background-color: #f4f4f2;
  padding: 3rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .bottom-footer {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: 1.125rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.footer-links a {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9ca3af;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-links a:hover {
  color: var(--secondary);
}

.copyright {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9ca3af;
}
</style>
