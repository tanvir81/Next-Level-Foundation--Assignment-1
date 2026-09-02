//Next Level Foundation Program-Assignment-1
// Question 1 Answer
function describeValue(value) {
  const typeString = typeof value;
  const truthyValue = value ? "truthy" : "falsy";
  return `${typeString} | ${truthyValue}`;
}
