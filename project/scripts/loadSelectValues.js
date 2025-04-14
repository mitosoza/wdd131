const products = [
  {
    id: "bh-1000",
    name: "Joining a Team",
    value: 1000
  },
  {
    id: "bh-2000",
    name: "Registering a Team",
    value: 2000
  },
  {
    id: "bh-3000",
    name: "Registering a Venue",
    value: 3000
  },
  {
    id: "bh-4000",
    name: "Registering a Tournament",
    value: 3000
  },
  {
    id: "bh-5000",
    name: "Other",
    value: 3000
  }
];

const select = document.getElementById("productSelect");
const option0 = document.createElement("option");
option0.text = "Select an option";
option0.id = "default";
option0.value = "";
option0.disabled = true;
option0.selected = true;
select.appendChild(option0);

products.forEach(product => {
  const option = document.createElement("option");
  option.id = product.id;
  option.text = product.name;
  option.value = product.value;
  select.appendChild(option);
});