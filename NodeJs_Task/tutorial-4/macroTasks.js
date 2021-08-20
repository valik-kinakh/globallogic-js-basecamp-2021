const readStream=require('./readStream');

function macroTasks() {
  console.log('Macro tasks start');

  // setTimeout(() => {
  //   return new Promise((resolve, reject) => {
  //     resolve('setTimeout promise fulfilled')
  //   }).then(result=>console.log(result))
  // }, 0);

  readStream();

  // setImmediate(()=>
  // {
  //   console.log('immediate callback');
  // })


  console.log('Macro tasks end...');
}

macroTasks()