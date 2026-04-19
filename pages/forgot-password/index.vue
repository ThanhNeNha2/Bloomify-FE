<script>
import {
  defineComponent
} from 'vue';

import ForgotPasswordPageContext from './ForgotPasswordPageContext';

import {
  Icon
} from '@iconify/vue';

export default defineComponent({
  name: 'ForgotPasswordView',

  components: {
    Icon
  },

  setup() {
    const displayNameRef = ref('Vo Chi Thanh');
    const context = ForgotPasswordPageContext.create({
      displayNameRef
    }).setupComponent();

    return {
      context
    };
  }
});
</script>
<template>
  <div class="unit-forgot">
    <main class="main-layout">
      <section class="editorial-panel">
        <div class="image-bg">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwVc4E5_grhHlb_TVKKCV_TorfWPSUN8W1ELwkqXCb0Z4UUKAKEmW1dTfCgdQR4y3uUksBp8sd0xTcLA8a_i-nIjk_hueo4yyNnYudi7GYj-DHB99ppO-zcQojbSlO1cBto0FZu926-gT0a31s4Zv0bGjq8MdxeHuqaUZ0K43-MQqgX_RPzhwmcUW8ea3UXLyVr2mp5PyAtOeoaDynNzk8t1UsjT5WhYFxpgq7-QQ39JOv6k7Fw2_YY4oLBZW7VX4ah7I5GQEQrA"
               alt="Monochrome cinematic shot of a luxury fashion atelier" />
        </div>
        <div class="gradient-overlay"></div>

        <div class="brand-anchor">
          <h1>ATELIER</h1>
          <p>The Digital Archive</p>
        </div>
      </section>

      <section class="form-panel">
        <div class="form-container">
          <div class="mobile-logo">
            <span>ATELIER</span>
          </div>

          <header class="form-header">
            <h2>
              Forgot <br />
              <span class="serif-italic">Password</span>
            </h2>
            <p>
              Enter your email address and we will send you a link to reset your password.
            </p>
          </header>

          <form class="forgot-form">
            <div class="input-group">
              <label for="email">Email address</label>
              <input type="email"
                     id="email"
                     placeholder="curator@atelier.com"
                     required />
            </div>

            <div class="actions-group">
              <button type="button" class="submit-btn group">
                <span>Send Reset Link</span>
                <Icon icon="mdi:arrow-right" />
              </button>

              <div class="link-wrapper">
                <a href="/login" class="return-link">
                  <Icon icon="ph:arrow-left" />
                  Return to Sign In
                </a>
              </div>
            </div>
          </form>

          <div class="support-block">
            <h3>Authentication Support</h3>
            <p>
              If you no longer have access to this email, please contact our
              <span class="highlight">Concierge Service</span> for identity verification.
            </p>
          </div>
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
.unit-forgot {
    --bg-color: #f9f9f7;
    --text-color: #1a1c1b;
    --primary-color: #000000;
    --on-primary: #ffffff;
    --secondary-color: #735a3a;
    --surface-bright: #f9f9f7;
    --surface-low: #f4f4f2;
    --on-surface-variant: #444748;
    --outline-variant: rgba(196, 199, 199, 0.3);
    --on-secondary-container: #785e3e;
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

.unit-forgot>.main-layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;

    @media (min-width: 768px) {
        flex-direction: row;
        overflow-y: hidden;
    }
}

.unit-forgot>.main-layout>.editorial-panel {
    display: none;

    @media (min-width: 768px) {
        display: block;
        width: 41.666667%;
        position: relative;
        overflow: hidden;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
}

.unit-forgot>.main-layout>.editorial-panel>.image-bg {
    position: absolute;
    inset: 0;
    background-color: var(--primary-color);
    overflow: hidden;
}

.unit-forgot>.main-layout>.editorial-panel>.image-bg>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    mix-blend-mode: luminosity;
    transition: transform 2s ease;
}

.unit-forgot>.main-layout>.editorial-panel>.image-bg>img:hover {
    transform: scale(1.05);
}

.unit-forgot>.main-layout>.editorial-panel>.gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent, transparent);
    pointer-events: none;
}

.unit-forgot>.main-layout>.editorial-panel>.brand-anchor {
    position: absolute;
    bottom: 2rem;
    left: 3rem;
    pointer-events: none;
}

.unit-forgot>.main-layout>.editorial-panel>.brand-anchor>h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-family: var(--font-headline);
    font-weight: 900;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.unit-forgot>.main-layout>.editorial-panel>.brand-anchor>p {
    color: rgba(255, 255, 255, 0.6);
    font-family: var(--font-headline);
    font-style: italic;
    font-size: 1rem;
    letter-spacing: -0.02em;
}

.unit-forgot>.main-layout>.form-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: var(--surface-bright);

    @media (min-width: 768px) {
        width: 58.333333%;
        padding: 2rem 4rem;
    }

    @media (min-width: 1024px) {
        width: 50%;
        padding: 3rem 6rem;
    }
}

.unit-forgot>.main-layout>.form-panel>.form-container {
    width: 100%;
    max-width: 26rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.mobile-logo {
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        display: none;
    }
}

.unit-forgot>.main-layout>.form-panel>.form-container>.mobile-logo>span {
    font-family: var(--font-headline);
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
    color: var(--primary-color);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.form-header {
    margin-bottom: 1.5rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.form-header>h2 {
    font-family: var(--font-headline);
    font-size: 2rem;
    font-weight: 300;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    line-height: 1.1;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
}

.unit-forgot>.main-layout>.form-panel>.form-container>.form-header>h2>.serif-italic {
    font-family: var(--font-headline);
    font-style: italic;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.form-header>p {
    color: var(--on-surface-variant);
    font-size: 0.875rem;
    line-height: 1.5;
    max-width: 24rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group {
    position: relative;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group:focus-within>label {
    color: var(--secondary-color);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group>label {
    display: block;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--on-surface-variant);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group>input {
    width: 100%;
    background-color: var(--surface-low);
    border: none;
    border-bottom: 1px solid var(--outline-variant);
    padding: 0.75rem 0;
    color: var(--text-color);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.3s ease;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group>input:focus {
    border-bottom-color: var(--primary-color);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.input-group>input::placeholder {
    color: #d4d4d8;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.submit-btn {
    width: 100%;
    background-color: var(--primary-color);
    color: var(--on-primary);
    padding: 1rem 1.5rem;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.submit-btn:hover {
    background-color: var(--secondary-color);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.submit-btn>.material-symbols-outlined {
    font-size: 16px;
    transform: translateX(0);
    transition: transform 0.3s ease;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.submit-btn:hover>.material-symbols-outlined {
    transform: translateX(4px);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.link-wrapper>.return-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 9px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: var(--primary-color);
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;
    transition: border-color 0.3s ease;
    text-decoration: none;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.link-wrapper>.return-link:hover {
    border-bottom-color: var(--primary-color);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.forgot-form>.actions-group>.link-wrapper>.return-link>.material-symbols-outlined {
    font-size: 14px;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.support-block {
    margin-top: 2.5rem;
    padding: 1.25rem;
    background-color: var(--surface-low);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.support-block>h3 {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: var(--on-secondary-container);
}

.unit-forgot>.main-layout>.form-panel>.form-container>.support-block>p {
    font-size: 0.75rem;
    color: var(--on-surface-variant);
    line-height: 1.5;
}

.unit-forgot>.main-layout>.form-panel>.form-container>.support-block>p>.highlight {
    color: var(--secondary-color);
    text-decoration: underline;
    cursor: pointer;
}

.unit-forgot>.bottom-footer {
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

.unit-forgot>.bottom-footer>.footer-brand {
    font-family: var(--font-headline);
    font-style: italic;
    font-size: 1rem;
    color: var(--primary-color);
}

.unit-forgot>.bottom-footer>.footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.unit-forgot>.bottom-footer>.footer-links>a {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #a1a1aa;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.3s ease;
}

.unit-forgot>.bottom-footer>.footer-links>a:hover {
    color: var(--secondary-color);
}

.unit-forgot>.bottom-footer>.footer-copyright {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #a1a1aa;
}
</style>
