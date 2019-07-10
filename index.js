
function takeANumber(katzDeliLine, name) {
  var message = "Welcome, " + name + ". " + "You are number " + (katzDeliLine.push(name)) + " in line.";

return message
}

var ticketNumber = 0;
function takeANumber(katzDeliLine) {
  katzDeliLine.push(++ticketNumber);
var message = "Welcome. You have ticket number " + ticketNumber;
return message
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    var lineOut = "The line is currently: ";
    for (var i=0; i < deliLine.length; i++){
    lineOut += String(i+1) + ". " + deliLine[i] +", ";
    }
    return lineOut.slice(0, lineOut.length - 2);
  }
}
