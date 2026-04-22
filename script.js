function processArray(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

processArray([1, 2, 3, 4])
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter((n) => n % 2 === 0);
        document.getElementById("output").textContent = evens.join(",");
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map((n) => n * 2);
        document.getElementById("output").textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  });