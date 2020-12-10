// here we handle the tokens
export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function logout() {
  window.localStorage.removeItem('token')
}

// here we should create a function to save the details of the allergies of in the locale storage