function firstWord(s) {
  // your code here
	s = s.trim();
	if (s === "") return ""; 
	const ans = str.split(" ");
    return ans[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
