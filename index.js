function scuberGreetingForFeet(ride){
  if(ride <= 400) {
return("This one is on me!");
  } else if(ride > 400 && ride < 2500) {
    return("I will gladly take your thirty bucks.");
  } else if(ride > 2500) {
    return("No can do.");
  }
}

function ternaryCheckCity(destination){
  //if (destination === "NYC") {
    //return("Ok, sounds good.")
  //} else
  //return("No go.")
  return destination === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
switch(tip) {
  case "generous":
    return("Thank you so much.")
    break;
  case "not as generous":
    return("Thank you.")
    break;
  default:
  return("Bye.")
  }
}
switchCase("generous")