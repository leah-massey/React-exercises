//G PROMISES

//* in order to fetch data from an api we have to 'fetch'

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
// this is a callback function with the response (res) it has received
//   .then((data) => console.log(data));
// this returns another promise (data), returning all the todos

//* BUT this data arrives later (after logging 'Leah')

//* fetching the data will take some time
//* in the meantime JS keeps running

//console.log("Leah");
//=> Leah cl

//* a cleaner way of doing the above is to create an async function:
//G ASYNC FUNCTION

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

// the 'await' keyword means that nothing happens until the command has been perfomred
// the waiting only works inside the async function

const todos = getTodos();
console.log(todos);

console.log("leah");
// this will be logged BEFORE the function getTodods()
