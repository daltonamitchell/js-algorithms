function fizzBuzz({start = 1, end = 100} = {}) {
  let items = [];

  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      items.push('FizzBuzz');
      continue;
    }

    if (i % 5 === 0) {
      items.push('Buzz');
      continue;
    }

    if (i % 3 === 0) {
      items.push('Fizz');
      continue;
    }

    items.push(i);
  }

  return items;
}

export default fizzBuzz;
