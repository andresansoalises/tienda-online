let obj = [
  {
    id: 0,
    nombre: "Oxímetro de pulso portátil",
    marca: "SILFAB",
    categoria: "Control",
    precio: 6893,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY4-qrGbVxq5rTZNPUFdQAsFmr3ooB5ZJyAqZh_nQqTUr0BbRAVZTGn9Ibo4aqYBhpiI&usqp=CAU",
  },
  {
    id: 1,
    nombre: "Oxímetro de pulso portátil",
    marca: "Silfab",
    categoria: "Control",
    precio: 4875,
    img: "https://embon.com.ar/images/product_image/2177/0?fit=fill&w=300&h=300",
  },
  {
    id: 2,
    nombre: "Aspirador",
    marca: "Yuwell",
    categoria: "Terapia",
    precio: 4488,
    img: "https://oxicast.com.ar/wp-content/uploads/2021/12/publicaciones-yuwell-nuevas-131-eabb1cf86fcd7e15a615916313512187-640-0-300x300.jpg",
  },
  {
    id: 3,
    nombre: "Tensiómetro de muñeca",
    marca: "Philco",
    categoria: "Control",
    precio: 6741,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02taf_eVU71IY-fw4NnINoqG6Oebgd32agA&usqp=CAU",
  },
  {
    id: 4,
    nombre: "Tensiómetro aneroide",
    marca: "Magnus",
    categoria: "Control",
    precio: 5236,
    img: "https://magnus.com.ar/wp-content/uploads/2021/06/tensiometro-mcm-300x300.jpg",
  },
  {
    id: 5,
    nombre: "Aspirador",
    marca: "Silfab",
    categoria: "Terapia",
    precio: 16408,
    img: "https://www.silfab.com.ar/media/catalog/product/cache/1/small_image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/n/3/n33_1.jpg",
  },
];

export const gFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? obj.find((item) => item.id === id) : obj);
    }, 2000);
  });
};
