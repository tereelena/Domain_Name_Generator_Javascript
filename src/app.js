console.log("hello world");

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let x = 0; x < noun.length; x++) {
      let word = pronoun[i] + adj[j] + noun[x];
      console.log(word + ".com");
    } //tercer for
  } //segundo for
} // primet for
