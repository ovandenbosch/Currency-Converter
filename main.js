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

  
};
