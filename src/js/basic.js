export default class Validator {
  /* eslint-disable */   validateUsername(nickname) {
 /* eslint-disable */     return /^[A-Za-z][A-Za-z0-9_@\-]*[A-Za-z]$/.test(nickname);
  }
}