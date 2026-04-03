// User related types
export interface User {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface LoginResponse {
  user: User
  token: string
}

export interface RegisterResponse {
  user: User
  token: string
}

// Component Props types
export interface LoginPageProps {}

export interface RegisterPageProps {}

export interface HomePageProps {}
