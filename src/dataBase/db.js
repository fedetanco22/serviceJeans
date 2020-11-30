export default function getProdFromDatabase() {
  return new Promise((resolve) => {
    resolve(products);
  });
}

const products = ` [{
  "id": 1,
  "name": "Sprouts - Onion",
  "price": 1224,
  "stock": 33,
  "image": "data:image/jpeg;base64,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"
}, {
  "id": 2,
  "name": "Sparkling Wine - Rose, Freixenet",
  "price": 1083,
  "stock": 73,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/51186e0d-7ca4-4c6a-adbb-d03f7203be8f_nube-fd6e3ca5d5a5ae546e15681989592320-640-0.jpg"
}, {
  "id": 3,
  "name": "Beef - Inside Round",
  "price": 1171,
  "stock": 98,
  "image": "http://dummyimage.com/234x175.bmp/5fa2dd/ffffff"
}, {
  "id": 4,
  "name": "Kahlua",
  "price": 1676,
  "stock": 66,
  "image": "http://dummyimage.com/212x157.bmp/5fa2dd/ffffff"
}, {
  "id": 5,
  "name": "Vodka - Smirnoff",
  "price": 1473,
  "stock": 39,
  "image": "http://dummyimage.com/249x197.png/5fa2dd/ffffff"
}, {
  "id": 6,
  "name": "Chocolate Bar - Reese Pieces",
  "price": 1161,
  "stock": 5,
  "image": "http://dummyimage.com/161x250.png/dddddd/000000"
}, {
  "id": 7,
  "name": "Chicken - Base",
  "price": 1405,
  "stock": 62,
  "image": "http://dummyimage.com/204x218.jpg/5fa2dd/ffffff"
}, {
  "id": 8,
  "name": "Longos - Chicken Caeser Salad",
  "price": 1310,
  "stock": 29,
  "image": "http://dummyimage.com/172x243.jpg/ff4444/ffffff"
}, {
  "id": 9,
  "name": "Wine - Domaine Boyar Royal",
  "price": 1500,
  "stock": 44,
  "image": "http://dummyimage.com/207x145.png/ff4444/ffffff"
}, {
  "id": 10,
  "name": "Zucchini - Yellow",
  "price": 1543,
  "stock": 72,
  "image": "http://dummyimage.com/245x241.bmp/cc0000/ffffff"
}, {
  "id": 11,
  "name": "Pie Pecan",
  "price": 1039,
  "stock": 77,
  "image": "http://dummyimage.com/101x146.bmp/5fa2dd/ffffff"
}, {
  "id": 12,
  "name": "Flower - Commercial Spider",
  "price": 1412,
  "stock": 13,
  "image": "http://dummyimage.com/250x127.png/ff4444/ffffff"
}, {
  "id": 13,
  "name": "Chestnuts - Whole,canned",
  "price": 2173,
  "stock": 100,
  "image": "http://dummyimage.com/107x192.png/ff4444/ffffff"
}, {
  "id": 14,
  "name": "Lid - 10,12,16 Oz",
  "price": 1360,
  "stock": 92,
  "image": "http://dummyimage.com/121x200.jpg/5fa2dd/ffffff"
}, {
  "id": 15,
  "name": "Mushroom - Chantrelle, Fresh",
  "price": 2337,
  "stock": 78,
  "image": "http://dummyimage.com/202x227.png/cc0000/ffffff"
}, {
  "id": 16,
  "name": "Chocolate - Dark Callets",
  "price": 2623,
  "stock": 69,
  "image": "http://dummyimage.com/156x197.bmp/cc0000/ffffff"
}, {
  "id": 17,
  "name": "Pork Ham Prager",
  "price": 1463,
  "stock": 5,
  "image": "http://dummyimage.com/218x239.png/cc0000/ffffff"
}, {
  "id": 18,
  "name": "Coffee - Frthy Coffee Crisp",
  "price": 2919,
  "stock": 90,
  "image": "http://dummyimage.com/164x131.png/cc0000/ffffff"
}, {
  "id": 19,
  "name": "Peach - Fresh",
  "price": 1691,
  "stock": 49,
  "image": "http://dummyimage.com/134x174.bmp/5fa2dd/ffffff"
}, {
  "id": 20,
  "name": "Peas - Pigeon, Dry",
  "price": 2436,
  "stock": 32,
  "image": "http://dummyimage.com/138x130.png/ff4444/ffffff"
}, {
  "id": 21,
  "name": "Pork - Back Ribs",
  "price": 1861,
  "stock": 100,
  "image": "http://dummyimage.com/104x229.png/cc0000/ffffff"
}, {
  "id": 22,
  "name": "Pimento - Canned",
  "price": 1450,
  "stock": 10,
  "image": "http://dummyimage.com/172x236.jpg/5fa2dd/ffffff"
}, {
  "id": 23,
  "name": "Oil - Olive, Extra Virgin",
  "price": 2085,
  "stock": 34,
  "image": "http://dummyimage.com/139x105.bmp/cc0000/ffffff"
}, {
  "id": 24,
  "name": "Beer - Muskoka Cream Ale",
  "price": 2408,
  "stock": 34,
  "image": "http://dummyimage.com/212x248.png/5fa2dd/ffffff"
}, {
  "id": 25,
  "name": "Muffin Mix - Banana Nut",
  "price": 1784,
  "stock": 66,
  "image": "http://dummyimage.com/158x162.bmp/5fa2dd/ffffff"
}]
`;
