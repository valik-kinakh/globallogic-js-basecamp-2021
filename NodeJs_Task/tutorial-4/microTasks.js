const fibonacci=require('./fibo')

function callback()
{
  console.log('Next loop iteration');
}

function microTasks() {
  console.log('Micro tasks start');

  fibonacci(36);

  new Promise((resolve) => {
    resolve('simple promise fulfilled');
  }).then(result=>console.log(result));

  process.nextTick(callback);

  console.log('Micro tasks end...');
}
microTasks();