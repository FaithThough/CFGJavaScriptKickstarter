function dogYearsToHumanYears(dogYears, dogSize) {
  let humanYears = 0;

  if (dogSize === "small") {
    if (dogYears === 1) {
      humanYears = 15;
    } else if (dogYears === 2) {
      humanYears = 15 + 9;
    } else {
      humanYears = 15 + 9 + (dogYears - 2) * 5;
    }
  } else if (dogSize === "medium") {
    if (dogYears === 1) {
      humanYears = 15;
    } else if (dogYears === 2) {
      humanYears = 15 + 9;
    } else {
      humanYears = 15 + 9 + (dogYears - 2) * 7;
    }
  } else if (dogSize === "large") {
    if (dogYears === 1) {
      humanYears = 15;
    } else if (dogYears === 2) {
      humanYears = 15 + 9;
    } else {
      humanYears = 15 + 9 + (dogYears - 2) * 8;
    }
  }

  return humanYears;
}

document.getElementById("convertButton").addEventListener("click", function () {
  const dogYears = parseInt(document.getElementById("dogYears").value);
  const dogSize = document.getElementById("dogSize").value;
  const result = dogYearsToHumanYears(dogYears, dogSize);
  document.getElementById(
    "result"
  ).textContent = `Your ${dogSize} ${dogYears} year old dog, is approximately ${result} human years old!`;
});
