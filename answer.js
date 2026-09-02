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

// Question 3 Answer
function validateUserName(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Spaces Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

// Question 4 Answer
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }
  fare += waitingMinutes * 2;
  if (isNight) {
    fare *= 1.2;
  }
  return fare;
}

// Question 5 Answer

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }
  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12)); // Example usage
console.log(getChaseVerdict(200, 190, 0)); // Example usage
console.log(getChaseVerdict(100, 90, 12)); // Example usage
console.log(getChaseVerdict(100, 80, 12)); // Example usage
console.log(getChaseVerdict(100, 70, 12)); // Example usage
console.log(getChaseVerdict(150, 149, 1)); // Example usage
