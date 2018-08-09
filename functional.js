let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

function domainUrl(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}

console.log(domainUrl(states));

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

function functionalSingles(elements){
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements){
  let total = 0;
  elements.forEach(function(n){
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

function functionalSum(elements){
  return elements.reduce((total, n) => {
    return total += n
  });
}

console.log(functionalSum(numbers));

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach((element) => {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

function functionalLengths(elements){ return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {}); }

console.log(functionalLengths(states));

function functionalProduct(elements){
  return elements.reduce((product, element) => {
    return product *= element
  }, 1);
}

console.log(functionalProduct(numbers));
