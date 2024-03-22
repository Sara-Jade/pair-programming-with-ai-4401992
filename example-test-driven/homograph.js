// Check URIs for homograph attacks. Return clean URIs.
function isHomographAttack(uri) {
  const homographRegex = /[^\u0000-\u007F]/;
  return homographRegex.test(uri);
}
// Clean URIs by replacing homographs with their ASCII equivalents.
function cleanUri(uri) {
  const homographs = {
    "а": "a",
    "е": "e",
    "ӏ": "l",
    "о": "o",
    "р": "p",
    "х": "x",
    "ɡ": "g"
  };
  return uri.replace(/[аеӏорхɡ]/g, (match) => homographs[match]);
}