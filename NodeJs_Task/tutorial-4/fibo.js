function fibonacci(limit) {
  function genFibonacciAsync(list, ceiling) {

    return new Promise(function(resolve) {
      let next = list[list.length - 1] + list[list.length - 2];
      if (next > ceiling || ceiling === 0)
        resolve();
      else {
        list.push(next);
        resolve(genFibonacciAsync(list, ceiling));
      }
    });
  }

  console.log('start fibonacci async...');
  const list = [0, 1];
  genFibonacciAsync(list, limit)
    .then(() => {
      list.forEach(val => {
        console.log(val + ',');
      });
    });
}

fibonacci(35);
module.exports = fibonacci;