const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) {
    return "Please add all fileds"
  }
  else {
    if (password.length < 6) {
      return "Password must be at least 6 characters"
    }
    if (password !== cf_password) {
      return "Confirm password did not match"
    }
  }
}

export default valid
