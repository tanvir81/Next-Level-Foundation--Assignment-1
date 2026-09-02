//Next Level Foundation Program-Assignment-1
// Question 1 Answer
function describeValue(value) {
  const typeString = typeof value;
  const truthyValue = value ? "truthy" : "falsy";
  return `${typeString} | ${truthyValue}`;
}

// Question 2 Answer

function getDayType(day) {
  switch (day.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid day";
  }
}
