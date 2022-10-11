var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\W)'|'(\W)|'$|^'/g, "$1\""));
// → "I'm the cook," he said, "it's my job."
