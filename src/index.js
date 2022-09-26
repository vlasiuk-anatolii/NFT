function findRepeatedElement(A) {
  const result = [];

  A.forEach((item, i) => {
    let count = 1;

    for (let j = i + 1; j <= A.length; j++) {
      if (count === A.length / 2) {
        result.push(item);
      }

      if (item === A[j]) {
        count += 1;
      };
    }
  });

  return result[0];
}
const el = new Map();
console.log(el.set('fgfgg', 6));
console.log(el.set('fgfgg', 14));
console.log(el.set('fgfggs', 14));


console.log(el.entries());