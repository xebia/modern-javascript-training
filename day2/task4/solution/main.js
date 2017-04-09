const catalogue = {
  1: { id: 1, title: "Enemy Without Courage by Melania Vesna", price: 20, vatPercentage: 6 },
  2: { id: 2, title: "Human Of Greatness by Daria Gunda", price: 24, vatPercentage: 6 },
  3: { id: 3, title: "Trees Of Dread by Yuki Godwine", price: 22, vatPercentage: 6 },
  4: { id: 4, title: "Heroes And Visitors by Shankara Gudmund", price: 24, vatPercentage: 6 },
  5: { id: 5, title: "Kobo Aura Edition 2", price: 99, vatPercentage: 21 },
  6: { id: 6, title: "Kobo Aura H2O", price: 179, vatPercentage: 21 }
};

const addItem = (cart, item) => {
  const items = [...cart.items, item];
  const subtotal = cart.subtotal + item.price;
  const vat = cart.vat + item.price / 100 * item.vatPercentage;
  const total = subtotal + vat;
  return { items, subtotal, vat, total };
};

let cart = {
  items: [],
  subtotal: 0,
  vat: 0,
  total: 0
};

cart = addItem(cart, catalogue[3]);
cart = addItem(cart, catalogue[4]);
cart = addItem(cart, catalogue[5]);

console.log(cart.items.length); // 3
console.log(cart.total);        // 168.55
