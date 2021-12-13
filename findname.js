const arr = [
  {
    name: "Sos",
    surname: "Black",
    Age: 19,
  },

  {
    name: "va",
    surname: "Black",
    Age: 19,
  },
  {
    name: "Va",
    surname: "Black",
    Age: 19,
  },
  {
    name: "Sos",
    surname: "Black",
    Age: 19,
  },
  {
    name: "sos",
    surname: "Black",
    Age: 19,
  },
  {
    name: "SOS",
    surname: "Black",
    Age: 19,
  },
  {
    name: "ge",
    surname: "Black",
    Age: 19,
  },
  {
    name: "ger",
    surname: "Black",
    Age: 19,
  },
];

const findByName = (name) => {
  const result = [];
  arr.map(function (value) {
    if (value.name.toLowerCase() === name.toLowerCase()) result.push(value);
  });
  return result;
};

console.log(findByName("sos"));
