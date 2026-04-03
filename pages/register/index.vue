<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import type { RegisterForm, ApiResponse, RegisterResponse } from '~/types'

// Reactive form data
const form = reactive<RegisterForm>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

// Loading state
const isLoading = ref<boolean>(false)

// Error message
const errorMessage = ref<string>('')

// Form validation
const isFormValid = computed((): boolean => {
  return form.name.length > 0 && 
         form.email.length > 0 && 
         form.password.length > 0 && 
         form.confirmPassword.length > 0 && 
         form.password === form.confirmPassword
})

// Password validation
const passwordError = computed((): string => {
  if (form.password.length > 0 && form.confirmPassword.length > 0) {
    if (form.password !== form.confirmPassword) {
      return 'Passwords do not match'
    }
  }
  return ''
})

// Handle register form submission
const handleRegister = async (): Promise<void> => {
  if (!isFormValid.value) {
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // TODO: Implement actual API call
    console.log('Register attempt:', form)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // TODO: Handle successful registration
    console.log('Registration successful')
    
    // Redirect to login page
    await navigateTo('/login')
  } catch (error) {
    console.error('Registration error:', error)
    errorMessage.value = 'Registration failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="unit-register-page">
    <div class="unit-register-page > .container">
      <div class="unit-register-page > .container > .header">
        <h1>Register</h1>
        <p>Create your account</p>
      </div>
      
      <form class="unit-register-page > .container > .form" @submit.prevent="handleRegister">
        <div v-if="errorMessage" class="unit-register-page > .container > .form > .error-message">
          {{ errorMessage }}
        </div>
        
        <div class="unit-register-page > .container > .form > .field">
          <label for="name" class="unit-register-page > .container > .form > .field > .label">
            Full Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="unit-register-page > .container > .form > .field > .input"
            placeholder="Enter your full name"
          />
        </div>
        
        <div class="unit-register-page > .container > .form > .field">
          <label for="email" class="unit-register-page > .container > .form > .field > .label">
            Email
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="unit-register-page > .container > .form > .field > .input"
            placeholder="Enter your email"
          />
        </div>
        
        <div class="unit-register-page > .container > .form > .field">
          <label for="password" class="unit-register-page > .container > .form > .field > .label">
            Password
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            class="unit-register-page > .container > .form > .field > .input"
            placeholder="Enter your password"
          />
        </div>
        
        <div class="unit-register-page > .container > .form > .field">
          <label for="confirmPassword" class="unit-register-page > .container > .form > .field > .label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            type="password"
            required
            class="unit-register-page > .container > .form > .field > .input"
            placeholder="Confirm your password"
          />
          <div v-if="passwordError" class="unit-register-page > .container > .form > .field > .field-error">
            {{ passwordError }}
          </div>
        </div>
        
        <button
          type="submit"
          class="unit-register-page > .container > .form > .submit-button"
          :disabled="isLoading || !isFormValid"
        >
          {{ isLoading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>
      
      <div class="unit-register-page > .container > .footer">
        <p>
          Already have an account? 
          <NuxtLink to="/login" class="unit-register-page > .container > .footer > .link">
            Login here
          </NuxtLink>
        </p>
        <NuxtLink to="/" class="unit-register-page > .container > .footer > .back-link">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.unit-register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--size-space-large);
  background-color: var(--color-background);
}

.unit-register-page > .container {
  width: 100%;
  max-width: 400px;
  background-color: var(--color-background-card);
  padding: var(--size-space-x-large);
  border-radius: var(--size-border-radius-large);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.unit-register-page > .container > .header {
  text-align: center;
  margin-bottom: var(--size-space-x-large);
}

.unit-register-page > .container > .header > h1 {
  font-size: 2rem;
  font-weight: var(--size-font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--size-space-small);
}

.unit-register-page > .container > .header > p {
  color: var(--color-text-secondary);
}

.unit-register-page > .container > .form {
  display: flex;
  flex-direction: column;
  gap: var(--size-space-large);
}

.unit-register-page > .container > .form > .error-message {
  padding: var(--size-space-medium);
  background-color: #fee2e2;
  color: #dc2626;
  border-radius: var(--size-border-radius);
  font-size: var(--size-font-size-body-small);
  text-align: center;
}

.unit-register-page > .container > .form > .field {
  display: flex;
  flex-direction: column;
  gap: var(--size-space-small);
}

.unit-register-page > .container > .form > .field > .label {
  font-weight: var(--size-font-weight-medium);
  color: var(--color-text-primary);
}

.unit-register-page > .container > .form > .field > .input {
  padding: var(--size-space-medium);
  border: var(--size-thinnest) solid var(--color-border);
  border-radius: var(--size-border-radius);
  font-size: var(--size-font-size-body);
  transition: border-color var(--transition-timer) ease;
}

.unit-register-page > .container > .form > .field > .input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.unit-register-page > .container > .form > .field > .field-error {
  color: #dc2626;
  font-size: var(--size-font-size-body-small);
}

.unit-register-page > .container > .form > .submit-button {
  padding: var(--size-space-medium);
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
  border: none;
  border-radius: var(--size-border-radius);
  font-size: var(--size-font-size-body);
  font-weight: var(--size-font-weight-medium);
  cursor: pointer;
  transition: background-color var(--transition-timer) ease;
}

.unit-register-page > .container > .form > .submit-button:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.unit-register-page > .container > .form > .submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.unit-register-page > .container > .footer {
  text-align: center;
  margin-top: var(--size-space-x-large);
  display: flex;
  flex-direction: column;
  gap: var(--size-space-medium);
}

.unit-register-page > .container > .footer > .link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--size-font-weight-medium);
}

.unit-register-page > .container > .footer > .link:hover {
  text-decoration: underline;
}

.unit-register-page > .container > .footer > .back-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--size-font-size-body-small);
}

.unit-register-page > .container > .footer > .back-link:hover {
  color: var(--color-text-primary);
}
</style>