const arr = [10, 303, 16, 20, 21]

let areGreater = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 10) {
    areGreater = false
    break
  }
  console.log (arr[i])
  console.log (areGreater)
}