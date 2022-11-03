let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printingReceipt([...rest]) {
  const itemsObj = {...rest};
  let totalOrderPrice = 0;
  
  for(key in itemsObj) {
    let totalItemPrice = itemsObj[key].unitPrice * itemsObj[key].quantity;
    totalOrderPrice += itemsObj[key].unitPrice * itemsObj[key].quantity;
    console.log(itemsObj[key].quantity, itemsObj[key].itemName, totalItemPrice);
  };
  console.log(totalOrderPrice);
};

printingReceipt(order);