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
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/img_63591-c13278c5dc6aade58815954262162323-640-0.jpg"
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
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/chl_15971-20f60017202127a8ba15385847648849-640-0.jpg"
}, {
  "id": 4,
  "name": "Kahlua",
  "price": 1676,
  "stock": 66,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/img_34181-1f31de2b29bf92277e15910983795164-640-0.jpg"
}, {
  "id": 5,
  "name": "Vodka - Smirnoff",
  "price": 1473,
  "stock": 39,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/pic_20201117_160740-0fd996279d08f5afa116056400872244-240-0.jpg"
}, {
  "id": 6,
  "name": "Chocolate Bar - Reese Pieces",
  "price": 1161,
  "stock": 5,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/img_78921-bf6bcfb776ee9f8af216009740469901-240-0.jpg"
}, {
  "id": 7,
  "name": "Chicken - Base",
  "price": 1405,
  "stock": 62,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/chl_13131-71aa4d999390287f0c15381517353009-240-0.jpg"
}, {
  "id": 8,
  "name": "Longos - Chicken Caeser Salad",
  "price": 1310,
  "stock": 29,
  "image": "https://d26lpennugtm8s.cloudfront.net/stores/857/432/products/img_11932-1eebaa3a12ffb5480116032004515775-240-0.jpg"
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
