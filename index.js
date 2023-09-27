
//task_1
function calculateAverage(arr) {
    
    if (arr.length === 0) {
      return 0;
    }
  
    
    const sum = arr.reduce((total, current) => total + current, 0);
    const average = sum / arr.length;
    return average;
  }
  const numbers = [1, 2, 3, 4, 5,6,7];
  const avg = calculateAverage(numbers);
  console.log(`The average is: ${avg}`);


  //task_2

const array = [10, 20, 30, 40, 50];

const result = array.map((value, index) => {
  return `Value at index ${index + 1} is ${value}`;
});

result.forEach((item) => {
  console.log(item);
});

//task_3



const person = {
  name: "Babar",
  age: 24,
  country: "Pakistan",
  semester: "Spring 2023",
  cms: "023-18-0038"
};


for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
      const value = person[key];
      console.log(value);
  }
}


  