 age = prompt ('напишите ваше число');
var age = +a;
var ageType = typeof age;
console.log (ageType);
var isEven = age % 2 === 0;
if (ageType !== 'number') {
  console.log ('Упс, кажется вы ошиблись')
}
if (ageType === 'number' && isEven) {
  console.log('Число четное!')
} else if (ageType === 'number' && !isEven) {
  console.log('Число нечетное!')
}


