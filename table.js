//Table part
var total_items = 4;

function CalculateItemsValue() {
  var total = 0;
  var totalStarters = 0;
  var totalMains = 0;
  var totalDrinks = 0;
  var totalDesserts = 0;
  var totalVeg = 0;
  var totalNonVeg = 0;


  for (let i = 1; i <= total_items; i++) {


    itemId = document.getElementById("starter" + i);
    itemId2 = document.getElementById("main" + i);
    itemId3 = document.getElementById("drink" + i);
    itemId4 = document.getElementById("dessert" + i);
    itemId5 = document.getElementById("veg" + i);
    itemId6 = document.getElementById("nonVeg" + i);




    if (itemId.className == "starters") {
      totalStarters = totalStarters + parseInt(itemId.value) * parseInt(itemId.getAttribute("data-price"));




      if (itemId2.className == "mains") {
        totalMains = totalMains + parseInt(itemId2.value) * parseInt(itemId2.getAttribute("data-price"));
      }
      if (itemId3.className == "drinks") {
        totalDrinks = totalDrinks + parseInt(itemId3.value) * parseInt(itemId3.getAttribute("data-price"));
      }
      if (itemId4.className == "desserts") {
        totalDesserts = totalDesserts + parseInt(itemId4.value) * parseInt(itemId4.getAttribute("data-price"));
      }
      if (itemId.className == "veg") {
        totalVeg = totalVeg + parseInt(itemId.value) * parseInt(itemId.getAttribute("data-price"));
      }
      if (itemId.className == "nonVeg") {
        totalNonVeg = totalNonVeg + parseInt(itemId.value) * parseInt(itemId.getAttribute("data-price"));
      }
      total = totalStarters + totalMains + totalDrinks + totalDesserts + totalVeg + totalNonVeg;


      document.getElementById("ItemsTotal").innerHTML = "€" + total;
      document.getElementById("totalStarters").innerHTML = "€" + totalStarters;
      document.getElementById("totalMains").innerHTML = "€" + totalMains;
      document.getElementById("totalDrinks").innerHTML = "€" + totalDrinks;
      document.getElementById("totalDesserts").innerHTML = "€" + totalDesserts;
      document.getElementById("totalVeg").innerHTML = "€" + totalVeg;
      document.getElementById("totalNonVeg").innerHTML = "€" + totalNonVeg;
    }
  }
}

