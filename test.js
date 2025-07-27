function createCounter() {
  let count = 0;  // 私有变量
  
  function increment() { 
    count++; 
  }
  function getCount() { 
    return count; 
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());