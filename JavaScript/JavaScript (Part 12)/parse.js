let jsonRes = '{"fact":"A form of AIDS exists in cats.","length":30}';

let validRes = JSON.parse(jsonRes);

console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);
