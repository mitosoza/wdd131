const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.getElementById("productSelect");
const option0 = document.createElement("option");
option0.text = "Select a product";
option0.id = "default";
option0.value = "";
option0.disabled = true;
option0.selected = true;
select.appendChild(option0);

products.forEach(product => {
  const option = document.createElement("option");
  option.id = product.id;
  option.text = product.name;
  option.value = product.averagerating;
  select.appendChild(option);
});