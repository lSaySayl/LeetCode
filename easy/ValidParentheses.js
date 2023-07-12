let isValid = (s) => {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }

  return s === "";
};

console.log(isValid("(])"));
