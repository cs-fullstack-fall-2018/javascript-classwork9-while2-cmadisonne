function main() {
    var officialPW = "Idontknow";
    var userInput = prompt("Enter password.");
    while (userInput != officialPW)
    {
       var userInput = prompt("Try again");
    }
}
function yay(){
    alert("THAT IS CORRECT!!!")
}
main();
yay();