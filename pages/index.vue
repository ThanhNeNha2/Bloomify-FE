<script setup lang="ts">
import type { HomePageProps } from '~/types'

// Define page metadata
useHead({
  title: 'Note App - Home',
  meta: [
    { name: 'description', content: 'Your personal note-taking application' }
  ]
})

// Navigation functions
const navigateToLogin = (): void => {
  navigateTo('/login')
}

const navigateToRegister = (): void => {
  navigateTo('/register')
}
</script>

<template>
  <div class="unit-home-page">
    <div class="unit-home-page > .header">
      <h1>Welcome to Note App</h1>
      <p>Your personal note-taking application</p>
    </div>
    
    <div class="unit-home-page > .content">
      <div class="unit-home-page > .content > .actions">
        <button 
          @click="navigateToLogin"
          class="unit-home-page > .content > .actions > .button"
        >
          Login
        </button>
        <button 
          @click="navigateToRegister"
          class="unit-home-page > .content > .actions > .button"
        >
          Register
        </button>
      </div>
      
      <div class="unit-home-page > .content > .features">
        <h2>Features</h2>
        <ul class="unit-home-page > .content > .features > .list">
          <li>Create and manage notes</li>
          <li>Organize with categories</li>
          <li>Search functionality</li>
          <li>Secure authentication</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.unit-home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--size-space-large);
  background-color: var(--color-background);
}

.unit-home-page > .header {
  text-align: center;
  margin-bottom: var(--size-space-x-large);
}

.unit-home-page > .header > h1 {
  font-size: 2.5rem;
  font-weight: var(--size-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--size-space-medium);
}

.unit-home-page > .header > p {
  font-size: var(--size-font-size-body);
  color: var(--color-text-secondary);
}

.unit-home-page > .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-space-x-large);
  max-width: 600px;
  width: 100%;
}

.unit-home-page > .content > .actions {
  display: flex;
  gap: var(--size-space-large);
}

.unit-home-page > .content > .actions > .button {
  padding: var(--size-space-medium) var(--size-space-x-large);
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  border: none;
  border-radius: var(--size-border-radius);
  font-size: var(--size-font-size-body);
  font-weight: var(--size-font-weight-medium);
  cursor: pointer;
  transition: background-color var(--transition-timer) ease;
}

.unit-home-page > .content > .actions > .button:hover {
  background-color: var(--color-primary-dark);
}

.unit-home-page > .content > .features {
  text-align: center;
  background-color: var(--color-background-card);
  padding: var(--size-space-x-large);
  border-radius: var(--size-border-radius-large);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.unit-home-page > .content > .features > h2 {
  font-size: 1.5rem;
  font-weight: var(--size-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--size-space-large);
}

.unit-home-page > .content > .features > .list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--size-space-medium);
}

.unit-home-page > .content > .features > .list > li {
  padding: var(--size-space-small);
  background-color: var(--color-background);
  border-radius: var(--size-border-radius);
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .unit-home-page > .content > .actions {
    flex-direction: column;
    width: 100%;
  }
  
  .unit-home-page > .content > .actions > .button {
    width: 100%;
  }
}
</style>