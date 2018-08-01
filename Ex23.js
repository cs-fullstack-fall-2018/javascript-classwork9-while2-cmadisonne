function main() {
    var officialPW = "Idontknow";
    var userInput = prompt("Enter password.");
    while (userInput != officialPW)
    {
       userInput = prompt("Try again"); // You don't need to create a new variable each time, just reuse it.
    }
}
function yay(){
    alert("THAT IS CORRECT!!!");
}
main();
yay(); // KEY: Nice use of additional functions :-)

/*

	KEY: This looks good, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' to test for inequality.

*/