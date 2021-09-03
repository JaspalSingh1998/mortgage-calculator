let state = {
  price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: getNumber(
    document.querySelectorAll('[name="loan_years"]')[0].value
  ),
  down_payment: getNumber(
    document.querySelectorAll('[name="down_payment"]')[0].value
  ),
  interest_rate: getNumber(
    document.querySelectorAll('[name="interest_rate"]')[0].value
  ),
  property_tax: getNumber(
    document.querySelectorAll('[name="property_tax"]')[0].value
  ),
  home_insurance: getNumber(
    document.querySelectorAll('[name="home_insurance"]')[0].value
  ),
  hoa: getNumber(document.querySelectorAll('[name="hoa"]')[0].value),
};

let totalLoan,
  totalMonths,
  monthlyInterest,
  monthlyPrincipalInterest,
  monthlyPropertyTaxes,
  monthlyHomeInsurance,
  monthlyHOA,
  labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"],
  backgroundColor = [
    "rgba(255,99,132,1)",
    "rgba(54,162,235,1)",
    "rgba(255,206,86,1)",
    "rgba(75,192,192,1)",
    "rgba(153,102,255,1)",
    "rgba(255,159,64,1)",
  ],
  borderColor = [
    "rgba(255,99,132,1)",
    "rgba(54,162,235,1)",
    "rgba(255,206,86,1)",
    "rgba(75,192,192,1)",
    "rgba(153,102,255,1)",
    "rgba(255,159,64,1)",
  ];

function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""));
}

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

console.log(state);
