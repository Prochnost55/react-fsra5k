let data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    id: i,
    number: Math.round(Math.random() * 100000000),
  });
}

export default data;
