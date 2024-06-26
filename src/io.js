export function alert(text) {
  return window.alert(text);
}

export function ask(text, options) {
  return window.prompt(text);
}

export function print(...args) {
  return console.log(...args);
}
