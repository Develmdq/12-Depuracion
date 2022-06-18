const secFibo = (num) => {
  const arr = [0, 1];

  for (i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};
const arrFibo = secFibo(6);
console.log(arrFibo);
