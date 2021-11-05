function getMiddle(s)
{
  let len = s.length;
  let start = len/2;
  
  if(len % 2 == 0) {
   let res = s.substr(start-1,2);
   return res;
   
  }
  else {
    res = s.substr(Math.ceil(start)-1,1);
    return res;
  }
}

console.log(getMiddle('test'));
console.log(getMiddle('A'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));