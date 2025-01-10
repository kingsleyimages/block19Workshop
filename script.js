// define base arrays

let people = ['John', 'Jane', 'Jack', 'Jill', 'James', 'Jamal'];
let price = [30, 50, 75, 100, 40, 20];
let job = [
  'Web Developer',
  'Teacher',
  'Marketer',
  'Janitor',
  'Handyman',
  'Writer',
];

// define base array of freelancers
let freelancers = [
  {
    name: 'Alice',
    occupation: 'Writer',
    rate: 30,
  },
  {
    name: 'Bob',
    occupation: 'Teacher',
    rate: 50,
  },
];
//define interval run variabel
const maxEmployees = 15;

// create constants for html elements to be updated
const avgText = document.querySelector('#average');
const entryRow = document.querySelector('#entry');

//average rates of freelancers
function average() {
  const sum = freelancers.reduce((acc, curVal) => {
    return (acc += curVal.rate);
  }, 0);
  avg = sum / freelancers.length;
  console.log(avg);
  avgText.innerText = 'The average starting price is: $' + avg.toFixed(2);
}
// create random freelancer
function newFreelancer() {
  const name = people[Math.floor(Math.random() * people.length)];
  const rate = price[Math.floor(Math.random() * price.length)];
  const occupation = job[Math.floor(Math.random() * job.length)];
  freelancers.push({ name, occupation, rate });

  //run average function
  average();
}

function render() {
  //map freelancers array
  const entry = freelancers.map((freelancers) => {
    // creat row for each freelancer
    const row = document.createElement('tr');

    // create td for freelancer name, add the name to the td and add it to the row
    const name = document.createElement('td');
    name.innerText = freelancers.name;
    row.appendChild(name);

    const occupation = document.createElement('td');
    occupation.innerText = freelancers.occupation;
    row.appendChild(occupation);

    const rate = document.createElement('td');
    rate.innerText = '$' + freelancers.rate;
    row.appendChild(rate);

    return row;
  });
  // replace the children of the entryRow with the new entry
  entryRow.replaceChildren(...entry);
}

const addShapeIntervalId = setInterval(() => {
  //call back to render every interval

  // adds new freelancer to  array
  newFreelancer();
  // re renders all rows
  render();
  // set stop interval if max employees reached
  if (freelancers.length === maxEmployees) {
    clearInterval(addShapeIntervalId);
  }
}, 1000);
