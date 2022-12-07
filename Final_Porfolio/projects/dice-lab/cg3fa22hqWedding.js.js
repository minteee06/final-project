var inputGuest = prompt("How many guests do you have?");
var inputTable = prompt("How many tables do you want?");

var length1 = inputGuest.length;
var numGuest = inputGuest.slice(-length1, -7);

var length2 = inputTable.length;
var numTable = inputTable.slice(-length2, -7);

var remainingTable = numTable - 1;
var divide = Math.floor(numGuest/numTable);
var leftover = numGuest - (divide * remainingTable);
if (numGuest % numTable == 0){
    alert("Your" + numGuest + "guests will be seated as follows: " + numTable + " tables of " + divide + ",");
}
else{
    alert("Your " + numGuest + " guests will be seated as follows: " + remainingTable + " tables of" + divide + ", and 1 table of " + leftover + ".");

}
                        