import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

// create array for pronouns
// create function to concat all different domain names

document.getElementById("domain").innerHTML = generateDomain();
function generateDomain() {

      let pronoun = ['my', 'the', 'their', 'her', 'our', 'your'];
      let adj = ['clever', 'tiny', 'pretty', 'grumpy', 'adventurous', 'brave', 'happy'];
      let noun = ['friend', 'road', 'river', 'city', 'flamingo', 'friend', 'corner', 'tree'];

           
      
      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
            console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
          }
          }
      }

    
        let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
        let randomAdj = adj[Math.floor(Math.random() * adj.length)];
        let randomNoun = noun[Math.floor(Math.random() * noun.length)];

      return `${randomPronoun}${randomAdj}${randomNoun}.com`;


      
    }

  let domain = generateDomain();
  console.log(domain);

  console.log("Hello Rigo from the console!");
};
 