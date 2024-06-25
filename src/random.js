export function randomInt(x, y) {
  if (arguments.length === 1) {
    y = x;
    x = 0;
  } else if (arguments.length === 0) {
    return 0;
  }
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

export function random() {
  return Math.random();
}
