const checkGrade = (totalmarks) => {
  if (totalmarks >= 80) {
    console.log("A+");
  } else if (totalmarks >= 70 && totalmarks <= 79) {
    console.log("A");
  } else if (totalmarks >= 60 && totalmarks <= 69) {
    console.log("A-");
  } else if (totalmarks >= 50 && totalmarks <= 59) {
    console.log("B");
  } else if (totalmarks >= 40 && totalmarks <= 49) {
    console.log("C");
  } else if (totalmarks >= 33 && totalmarks <= 39) {
    console.log("D");
  } else {
    console.log("F");
  }
};

checkGrade(40)
