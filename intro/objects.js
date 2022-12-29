const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};


const cohort = {
  name: 'may2022',
  id: 1234,
  students: ['shah', 'robbie', 'chris', 'thomas']
};

const details = (cohort) => {
  return (`${cohort.id} ${cohort.name} ${cohort.students}.length students in this cohort`)
};

console.log(details(cohort))