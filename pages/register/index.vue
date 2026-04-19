<script>
import {
  defineComponent
} from 'vue';
import RegisterPageContext from './RegisterPageContext';

export default defineComponent({
  name: 'RegisterPage',

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');
    const context = RegisterPageContext.create({
      displayNameRef
    }).setupComponent();

    return {
      context
    };
  }
});
</script>

<template>
  <div class="unit-register">
    <main class="main-layout">
      <section class="editorial-panel">
        <div class="image-overlay">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfJz29OU9I5w1F4arX6BHlKQ7DELTMaWsFzkz_iFYuuJdOl-m71Xe0rzZy65hsHcgMDkdTupFr4EgchYY4lQ7fMCPW36J3EHJe--Me6PDVfAoqT1mPfJR8xi6qGU7DMb4pBfYW4bYMgHoGQ_panU4E8t7tYqkhA6F5qLnSIteSRrhXJfwxopauyaFM8jbOgENuNAylotBacIVMg2iSLBN5xodx57pTttWBB3ShjDAs5jXl9-rVNh6F1fjPT-eo_vzsVH15Xudn30"
            alt="Premium editorial imagery"
          />
        </div>

        <div class="content-wrapper">
          <h1 class="brand-title">
            ATELIER <span class="brand-subtitle">Nouveau</span>
          </h1>
          <p class="brand-desc">
            Join an exclusive collective of visionaries. Experience the digital atelier where curation meets craft.
          </p>

          <div class="features">
            <div class="feature-item">
              <span class="material-symbols-outlined icon">verified</span>
              <span class="label">Verified Authenticity</span>
            </div>
            <div class="feature-item">
              <span class="material-symbols-outlined icon">auto_awesome</span>
              <span class="label">Curated Editorial Access</span>
            </div>
          </div>
        </div>

        <div class="brand-anchor">
          <p>EST. MMXXIV</p>
        </div>
      </section>

      <section class="form-panel">
        <div class="form-container">
          <div class="mobile-logo">
            <h2>ATELIER</h2>
          </div>

          <header class="form-header">
            <h2>Create Account</h2>
            <p>Enter your details to join the community.</p>
          </header>

          <form class="register-form">
            <div class="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Alexander Vane" />
            </div>

            <div class="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="alexander@atelier.com" />
            </div>

            <div class="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div class="password-grid">
              <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div class="input-group">
                <label>Confirm</label>
                <input type="password" placeholder="••••••••" />
              </div>
            </div>

            <div class="terms-group">
              <div class="checkbox-wrapper">
                <input type="checkbox" id="terms" />
              </div>
              <label for="terms">
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>

            <button type="button" class="submit-btn group">
              Register
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <footer class="form-footer">
            <p>
              Already have an account?
              <a href="#">Sign In</a>
            </p>
          </footer>
        </div>
      </section>
    </main>

    <footer class="bottom-footer">
      <div class="footer-brand">
        ATELIER
      </div>
      <div class="footer-links">
        <a href="#">PRIVACY</a>
        <a href="#">TERMS</a>
        <a href="#">CONTACT</a>
        <a href="#">SUBSCRIBE</a>
      </div>
      <div class="footer-copyright">
        © 2024 ATELIER LUXE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.unit-register {
  --bg-color: #f9f9f7;
  --text-color: #1a1c1b;
  --primary-color: #000000;
  --secondary-color: #735a3a;
  --surface-low: #f4f4f2;
  --surface-lowest: #ffffff;
  --on-surface-variant: #444748;
  --outline-variant: #c4c7c7;
  --ghost-border: rgba(196, 199, 199, 0.2);
  --satin-finish: linear-gradient(135deg, #000000 0%, #1c1b1b 100%);

  --font-headline: 'Noto Serif', serif;
  --font-body: 'Inter', sans-serif;

  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;

  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.unit-register > .main-layout {
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-y: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    overflow-y: hidden;
  }
}

.unit-register > .main-layout > .editorial-panel {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    background-color: var(--surface-low);
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  }
}

.unit-register > .main-layout > .editorial-panel > .image-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.4;
}

.unit-register > .main-layout > .editorial-panel > .image-overlay > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 30rem;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .brand-title {
  color: var(--primary-color);
  font-family: var(--font-headline);
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .brand-title > .brand-subtitle {
  font-family: var(--font-headline);
  font-style: italic;
  font-weight: 400;
  display: block;
  margin-top: 0.25rem;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .brand-desc {
  color: var(--on-surface-variant);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  letter-spacing: 0.025em;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .features > .feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .features > .feature-item > .icon {
  color: var(--secondary-color);
}

.unit-register > .main-layout > .editorial-panel > .content-wrapper > .features > .feature-item > .label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
}

.unit-register > .main-layout > .editorial-panel > .brand-anchor {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
}

.unit-register > .main-layout > .editorial-panel > .brand-anchor > p {
  font-family: var(--font-headline);
  font-style: italic;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: rgba(0, 0, 0, 0.4);
}

.unit-register > .main-layout > .form-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--bg-color);

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
}

.unit-register > .main-layout > .form-panel > .form-container {
  width: 100%;
  max-width: 26rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .mobile-logo {
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
}

.unit-register > .main-layout > .form-panel > .form-container > .mobile-logo > h2 {
  font-family: var(--font-headline);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}

.unit-register > .main-layout > .form-panel > .form-container > .form-header {
  margin-bottom: 1.5rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .form-header > h2 {
  font-family: var(--font-headline);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .form-header > p {
  color: var(--on-surface-variant);
  font-size: 0.8rem;
  font-weight: 300;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .input-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .password-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form .input-group > label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--on-surface-variant);
  font-weight: 500;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form .input-group > input {
  width: 100%;
  background-color: var(--surface-lowest);
  border: 1px solid var(--ghost-border);
  border-radius: 0.125rem;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
  outline: none;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form .input-group > input:focus {
  border-color: var(--primary-color);
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form .input-group > input::placeholder {
  color: #d4d4d8;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .terms-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.25rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .terms-group > .checkbox-wrapper {
  display: flex;
  align-items: center;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .terms-group > .checkbox-wrapper > input {
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 0.125rem;
  border: 1px solid var(--outline-variant);
  background-color: var(--surface-lowest);
  cursor: pointer;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .terms-group > label {
  font-size: 0.7rem;
  color: var(--on-surface-variant);
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .terms-group > label > a {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #e4e4e7;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .submit-btn {
  width: 100%;
  background: var(--satin-finish);
  color: #ffffff;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  padding: 0.85rem;
  border-radius: 0.125rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .submit-btn:hover {
  opacity: 0.9;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .submit-btn > span {
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.unit-register > .main-layout > .form-panel > .form-container > .register-form > .submit-btn:hover > span {
  transform: translateX(4px);
}

.unit-register > .main-layout > .form-panel > .form-container > .form-footer {
  margin-top: 1.5rem;
  text-align: center;
}

.unit-register > .main-layout > .form-panel > .form-container > .form-footer > p {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
}

.unit-register > .main-layout > .form-panel > .form-container > .form-footer > p > a {
  color: var(--secondary-color);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  margin-left: 0.25rem;
  transition: color 0.3s ease;
}

.unit-register > .bottom-footer {
  width: 100%;
  background-color: var(--surface-low);
  padding: 1.25rem 2rem;
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

.unit-register > .bottom-footer > .footer-brand {
  font-family: var(--font-headline);
  font-style: italic;
  font-size: 1rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.unit-register > .bottom-footer > .footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.unit-register > .bottom-footer > .footer-links > a {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a1a1aa;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.3s ease;
}

.unit-register > .bottom-footer > .footer-links > a:hover {
  color: var(--secondary-color);
}

.unit-register > .bottom-footer > .footer-copyright {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a1a1aa;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}
</style>
