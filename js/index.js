//let student ={
  //  firstname: "subash"
  //  age: 14, 
  //  is studying: true
//};
//  key  value pair
//console.log(student.firstname)
//onsole.log(typeof student)
//console.log(student1)
//console.log (student[0])
//console.log (student[1])
//console.log (student[3])

//console.log(arrayName[arrayName - 1])

// function  declaration
//function addSumOfTwoDigits() {
    ///const sum  = 10 + 12;
 //   console.log(sum);
//}
//addSumOfTwoDigits();

//function getReminder(quotient,divisor){
 //   let reminder= quotient % divisor;

//}

//return reminder;
//quotient = 105;
//divisor = 10;



const numbers = [null, 1, 2, 13, 9, 17, undefined, 19, 33, 55, -50];

const checkPrimeNumbers = (number) => {
  if (number === null|| number === undefined) {
    return;
  }else if (number === 1 || number === 2 || number === 0){
    console.log(number, 'is not a prime number');
  }else if (number < 0) {
    console.log('Negative number are not allowed');
  }else{
    for (let i=2; i < number; i++){
      if (number % i === 0) {
        console.log(number,'not a prime number')
        return;
      }
    }
    console.log(number,  'is a prime number')
  }
}
numbers.map((number) => {
  checkPrimeNumbers(number);
})