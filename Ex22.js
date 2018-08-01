function main(){

    var userInput = prompt("Enter a word. Press q to quit.");

    while (userInput !== "q")
    {
        var userInput = prompt("Enter another word or q to quit.");
    }
}

main();

/*

	KEY: This looks good, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' to test for inequality.

*/