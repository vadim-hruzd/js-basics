function myAbs(a) {
    if(a<0) {
        a = -a;
        return a;
    }
    else {
        return a;
    }
}

console.log(myAbs(-3));
console.log(myAbs(3));