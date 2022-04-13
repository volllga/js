<<<<<<< HEAD
const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) {
        return 100;
    }
      else if (exam > 75 && projects >= 5) {
        return 90;
    }
      else if (exam > 50 && projects >= 2) {
        return 75;
    }
      else {
        return 0;
    }
}
=======
let capacity = 14;
if(capacity === 15) {
    console.log("We have a full capacity");
} else if (capacity < 15) {
    console.log("Capacity is " + capacity);
} else {
    console.log("We are over capacity");
}
>>>>>>> 8bbf3c97379addf98058bc3ff1abd581ef8ce037
