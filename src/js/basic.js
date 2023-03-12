export default class Validator {
  /* eslint-disable */   validateUsername(nickname) {
  // return /^[A-Za-z](?!.*\d{4})[A-Za-z0-9_@\-]*[A-Za-z]$/.test(nickname);
  const onlyLatinLetters = /[a-zA-Z]+/;
  const hyphen = /-/;
  const numbers = /\d/;
  const underscore = /_/;
  const threNnumbers = /\d{4}/;
  const lookAhead = /^(?![0-9][_-])/
  const lookBehind = /(?<![0-9][_-])$/;
  return onlyLatinLetters.test(nickname) && hyphen.test(nickname) && underscore.test(nickname) && numbers.test(nickname) && threNnumbers.test(nickname) && lookAhead.test(nickname) && lookBehind.test(nickname);
}
} 