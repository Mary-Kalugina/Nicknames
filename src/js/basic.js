export default class Validator {
  constructor() {

  }
  validateUsername(nickname) {
   return /^[\A(A-Za-z)(0-9_-@"(\d)\1{2}")\z]$/.test(nickname)
  }
}
