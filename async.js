function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data loaded!");
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
}

fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done, either way"));
