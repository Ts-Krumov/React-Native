function* numberGen(number) {
  try {
    for (let i = 0; i < number; i++) {
      yield new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, i);
      });
    }
    //throw 'Rejected error';
    //yield Promise.reject('Rejected error');
  } finally {
    console.log("Cleaning up. ");
  }
}

(async () => {
  
  try { 
    for await (const num of numberGen(5)) {
    console.log(num);
  }
} catch(err){
    console.log('Catched Error:', err);
}
})(); //IIFE
