//Lesson 008 - DNA Pairing

function pairElement(str) {
  let dna_A = ["A", "T"];
  let dna_T = ["T", "A"];
  let dna_G = ["G", "C"];
  let dna_C = ["C", "G"];
  var returnDnaStrand = [];

  for(let i =0; i < str.length; i++){
    switch(str.charAt(i)){
      case "A":
        returnDnaStrand.push(dna_A);
        break;
      case "T":
        returnDnaStrand.push(dna_T);
        break;
      case "G":
        returnDnaStrand.push(dna_G);
        break;
      case "C":
        returnDnaStrand.push(dna_C);
        break;
        default:
        returnDnaStrand.push([str.charAt(i) + " element?!?!?", "Is this an Alien??"]);
    }
  }
  return returnDnaStrand;
}

console.log(pairElement("GCG"));
