var options = {
  url: "./currencies.json",

  getValue: "code",

  list: {
    match: {
      enabled: true,
    },
  },
};

$("#currencies1").easyAutocomplete(options);
$("#currencies2").easyAutocomplete(options);

const convert = () => {
  let selected = document.getElementsByClassName("selected");

  let currency1 = selected[0].textContent;
  let currency2 = selected[1].textContent;
  let amount = document.getElementById("amount");
  let converted = document.getElementById('converted')
  amount = amount.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/352b76412c86b5af5c9ccc3b/pair/${currency1}/${currency2}/${amount}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      converted.value = data.conversion_result;
    });
};
