const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  
  setTimeout(() => {
    console.log(`'${sentence[i]}' => ${i * 50} ms \n`);
    
  }, i * 50) // <= 1s delay to make it noticeable. Can dial it down later.
  
}

