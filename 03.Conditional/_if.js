// single condition signle comparison
var money = 1000;
var phonePrice = 900;

if (money > phonePrice) {
  console.log('i buy a phone');
}
else {
  console.log("I can't phone");
}

//single condition multiple comparison
var educated = true;
var job = true;
var salary = 30000;

if (educated == true && job == true && salary >= 20000) {
  console.log(" you should be preparetion for marrage");
}else{ console.log("sorry bro tomar ekhono time hoi nai");}

// multi stage condition
var money = 30;
var cake = 25;
var pizza = 40;
var juice = 20;

if (money > cake) {
  console.log('yes cake khabo');
}
else if (money > pizza) {
  console.log('yes pizza khabo');
}
else if (money > juice) {
  console.log('yes juice nibo');
}
else {
  console.log("ami fokir amar kichu nai");
}
// output : yes cake khabo
