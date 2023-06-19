//G PROMISES

//* in order to fetch data from an api we have to 'fetch'

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json()) // this is a callback function with the response (res) it has received
  .then((data) => console.log(data)); // this returns another promise (data), returning all the todos
// .then method
//res=>res.json()

//* BUT this data arrives later (after logging 'Leah')

//* fetching the data will take some time
//* in the meantime JS keeps running

console.log("Leah");
//=> Leah cl
