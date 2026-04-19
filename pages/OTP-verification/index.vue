<script>
import { defineComponent, ref } from 'vue';
import OTPVerificationPageContext from './OTPVerificationPageContext';

export default defineComponent({
  name: 'OTPVerificationView',

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');
    const context = OTPVerificationPageContext.create({
      displayNameRef
    }).setupComponent();

    return {
      context
    };
  }
});
</script>

<template>
  <div class="unit-verify">
    <header class="top-nav">
      <div class="brand-logo">L'ATELIER</div>
    </header>

    <main class="main-layout">
      <section class="editorial-panel">
        <div class="overlay"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjSNApyIeOag125M7Yqaau6fqZm1__hYIv5ncK97U54a2LuQ8Y74Hj7J-keAieGNiVtVRx2kBnsL7F-YZgF2rMjM2Yv5BaS9jXQgNjBtE-NvTyUQblekeox7xcAbDx-OzThHJdwVOsvNlLhvGe7ArbTFpiMsddo4WP26U65BJBTsxefS-moyXRvBVYvYt9xNGyzg1uEafxsLGbtPyClmkww5Cy1IVGX8UDgGFQArwaFv1wHLmRSDeTmTlFQvyvAPtxlXmIgtjmCF8"
          alt="minimalist interior of a luxury fashion atelier"
        />
        <div class="quote-box">
          <p>"True luxury is found in the quiet moments of certainty."</p>
          <div class="divider"></div>
        </div>
      </section>

      <section class="form-panel">
        <div class="form-container">
          <div class="header-text">
            <h1>Verify Your Identity</h1>
            <p>
              Enter the 6-digit verification code sent to your email
              <span class="highlight">v***e@atelier.com</span>
            </p>
          </div>

          <form class="verify-form">
            <div class="otp-cluster">
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
              <input type="text"
                     maxlength="1"
                     placeholder="·" />
            </div>

            <div class="timer-group">
              <div class="timer">
                <span class="material-symbols-outlined">schedule</span>
                <span>Resend code in <span class="time">00:54</span></span>
              </div>
              <button type="button"
                      disabled
                      class="resend-btn">
                Resend Code
              </button>
            </div>

            <button type="button" class="submit-btn">
              VERIFY
            </button>
          </form>

          <div class="status-feedback">
            <span class="material-symbols-outlined">verified_user</span>
            <span>Secure verification powered by L'ATELIER</span>
          </div>
        </div>
      </section>
    </main>

    <div class="toast-message">
      <div class="toast-content">
        <span class="material-symbols-outlined icon-success">check_circle</span>
        <span>Code verified successfully.</span>
      </div>
    </div>

    <footer class="bottom-footer">
      <div class="footer-content">
        <p>© 2024 L'ATELIER. ALL RIGHTS RESERVED.</p>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.unit-verify {
  --bg-color: #f9f9f7;
  --text-color: #1a1c1b;
  --primary-color: #000000;
  --on-primary: #ffffff;
  --secondary-color: #735a3a;
  --surface-low: #f4f4f2;
  --surface-lowest: #ffffff;
  --on-surface-variant: #444748;
  --outline-variant: rgba(196, 199, 199, 0.3);
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
  position: relative;
}

.unit-verify > .top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  pointer-events: none;
}

.unit-verify > .top-nav > .brand-logo {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: var(--primary-color);
  font-family: var(--font-headline);
}

.unit-verify > .main-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    overflow-y: hidden;
  }
}

.unit-verify > .main-layout > .editorial-panel {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    position: relative;
    background-color: var(--surface-low);
    overflow: hidden;
  }
}

.unit-verify > .main-layout > .editorial-panel > .overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.unit-verify > .main-layout > .editorial-panel > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.2) brightness(0.95);
}

.unit-verify > .main-layout > .editorial-panel > .quote-box {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  z-index: 20;
  max-width: 24rem;
}

.unit-verify > .main-layout > .editorial-panel > .quote-box > p {
  font-family: var(--font-headline);
  font-size: 1.875rem;
  font-style: italic;
  color: var(--text-color);
  line-height: 1.625;
}

.unit-verify > .main-layout > .editorial-panel > .quote-box > .divider {
  margin-top: 1rem;
  width: 3rem;
  height: 1px;
  background-color: var(--secondary-color);
}

.unit-verify > .main-layout > .form-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem;
  background-color: var(--bg-color);

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 6rem;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container {
  width: 100%;
  max-width: 28rem;
}

.unit-verify > .main-layout > .form-panel > .form-container > .header-text {
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container > .header-text > h1 {
  font-family: var(--font-headline);
  font-size: 2.25rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container > .header-text > p {
  color: var(--on-surface-variant);
  font-family: var(--font-body);
  line-height: 1.625;
}

.unit-verify > .main-layout > .form-panel > .form-container > .header-text > p > .highlight {
  font-weight: 600;
  color: var(--primary-color);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .otp-cluster {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .otp-cluster > input {
  width: 100%;
  aspect-ratio: 1 / 1;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  background-color: var(--surface-lowest);
  border: 1px solid var(--outline-variant);
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .otp-cluster > input:focus {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 1px var(--secondary-color);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .timer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--on-surface-variant);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .timer > .material-symbols-outlined {
  font-size: 14px;
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .timer > span > .time {
  color: var(--primary-color);
  font-weight: 500;
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .resend-btn {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(68, 71, 72, 0.4);
  background: transparent;
  border: none;
  cursor: not-allowed;
  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .resend-btn:not(:disabled) {
  cursor: pointer;
  color: var(--secondary-color);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .timer-group > .resend-btn:not(:disabled):hover {
  text-decoration-color: rgba(115, 90, 58, 0.5);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .submit-btn {
  width: 100%;
  padding: 1.25rem;
  background-color: var(--primary-color);
  color: var(--on-primary);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .submit-btn:hover {
  background-color: var(--secondary-color);
}

.unit-verify > .main-layout > .form-panel > .form-container > .verify-form > .submit-btn:active {
  transform: scale(0.98);
}

.unit-verify > .main-layout > .form-panel > .form-container > .status-feedback {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(68, 71, 72, 0.6);
  font-size: 0.875rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.unit-verify > .main-layout > .form-panel > .form-container > .status-feedback > .material-symbols-outlined {
  font-size: 18px;
}

.unit-verify > .toast-message {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: none;

  @media (min-width: 768px) {
    left: auto;
    right: 2rem;
    transform: none;
  }
}

.unit-verify > .toast-message > .toast-content {
  background-color: var(--surface-lowest);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 20px 40px rgba(26, 28, 27, 0.06);
  border: 1px solid rgba(196, 199, 199, 0.1);
}

.unit-verify > .toast-message > .toast-content > .icon-success {
  color: var(--secondary-color);
  font-variation-settings: 'FILL' 1;
}

.unit-verify > .toast-message > .toast-content > span:last-child {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.unit-verify > .bottom-footer {
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: transparent;

  @media (min-width: 768px) {
    position: fixed;
    bottom: 0;
    padding: 2rem 3rem;
    pointer-events: none;
  }
}

.unit-verify > .bottom-footer > .footer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  pointer-events: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.unit-verify > .bottom-footer > .footer-content > p {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(68, 71, 72, 0.4);
}

.unit-verify > .bottom-footer > .footer-content > .footer-links {
  display: flex;
  gap: 2rem;
}

.unit-verify > .bottom-footer > .footer-content > .footer-links > a {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(68, 71, 72, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.unit-verify > .bottom-footer > .footer-content > .footer-links > a:hover {
  color: var(--primary-color);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}
</style>
