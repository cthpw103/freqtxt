//freqtxt
//by cth103

//all the letters
var frequencies = ["12.02", "9.10", "8.12", "7.68", "7.31", "6.95", "6.28", "6.02", "5.92", "4.32", "3.98", "2.88", "2.71", "2.61", "2.30", "2.11", "2.09", "2.03", "1.82", "1.49", "1.11", "0.69", "0.17", "0.11", "0.10", "0.10"];

//alphabet
var alphabet = ["e", "t", "a", "o", "i", "n", "s", "r", "h", "l", "d", "c", "u", "m", "f", "p", "g", "w", "y", "b"; "v", "k", "x", "j", "q", "z"];
var end = ""; 

//letters to frequencies

function letters2freq(string) {
 end = ""; 
  for (count = 0; i < alphabet.length; count++) { 
    end += string.replace(alphabet[i], frequencies[i]);
  }
 return end;
}

//frequencies to letters

function letters2freq(string) {
 end = ""; 
  for (count = 0; i < alphabet.length; count++) { 
    end += string.replace(frequencies[i], alphabet[i]);
  }
 return end;
}
