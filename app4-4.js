function disemvowel(str) {
    const reg = /[aeiou]/gi;
    return str.replace(reg, "");
  
}