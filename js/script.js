// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
    $("button").click(function() {
        var userInput = $("input").val();
        console.log("user input is " + userInput);
        var pigLatin = pigLatinizersentence(userInput);
        console.log("piglatin is " + pigLatin);
        $("div").html(pigLatin);

    });
});








function pigLatinizersentence(userInput) {
    var sentence = userInput.split(" ");
    console.log("sentence =" + sentence);
    
    
    
    return pigLatinizer(userInput);
}
// for (i = 0; i < sentence.length; i++) {

// }










function pigLatinizer(word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var firstLetter = word[0];
    var indexOf = vowels.indexOf(firstLetter);
    console.log("index of " + indexOf);
    var beginsWithVowel = indexOf > -1;
    if (beginsWithVowel) {
        return word + "yay";
    }
    else {
        return word.slice(1) + firstLetter + "ay";
    }
}





// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance
