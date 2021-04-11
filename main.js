let dropdown = document.getElementById("country-drop");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Choose Currency";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

fetch("./currencies.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    let option;
    for (currency in json) {
      option = document.createElement("option");
      option.text = currency;
      option.value = currency;
      dropdown.add(option);
    }
  });
