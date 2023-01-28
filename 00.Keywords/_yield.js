function* hello( a ) {
  while (a < 4) {
    yield a+4;
    yield a - 10;
   }
  }
  const num = hello ( 1 );
  console.log(num.next().value);  //ans: 1
  console.log(num.next().value);  //ans: 2
  console.log(num.next().value);  //ans: 3