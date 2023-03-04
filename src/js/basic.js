export default class Validator {
  /* eslint-disable */   validateUsername(nickname) {
  return /^[A-Za-z](?!.*\d{3})[A-Za-z0-9_@\-]*[A-Za-z]$/.test(nickname);
  }
} /* eslint-disable */   