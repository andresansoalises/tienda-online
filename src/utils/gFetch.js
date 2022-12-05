let obj = [
  {
    id: "0",
    nombre: "Oxímetro de pulso portátil",
    marca: "Silfab",
    categoria: "Oxímetro",
    precio: 6893,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtY4-qrGbVxq5rTZNPUFdQAsFmr3ooB5ZJyAqZh_nQqTUr0BbRAVZTGn9Ibo4aqYBhpiI&usqp=CAU",
  },
  {
    id: "1",
    nombre: "Oxímetro de pulso portátil",
    marca: "Silfab",
    categoria: "Oxímetro",
    precio: 4875,
    img: "https://www.farmanobel.com/images/products/674/69d1acb2-fe8f-4b91-816c-e075cd6c09ef_7790808035412.jpg",
  },
  {
    id: "2",
    nombre: "Aspirador",
    marca: "Yuwell",
    categoria: "Aspirador",
    precio: 4488,
    img: "https://oxicast.com.ar/wp-content/uploads/2021/12/publicaciones-yuwell-nuevas-131-eabb1cf86fcd7e15a615916313512187-640-0-300x300.jpg",
  },
  {
    id: "3",
    nombre: "Tensiómetro de muñeca",
    marca: "Philco",
    categoria: "Tensiómetro",
    precio: 6741,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02taf_eVU71IY-fw4NnINoqG6Oebgd32agA&usqp=CAU",
  },
  {
    id: "4",
    nombre: "Tensiómetro aneroide",
    marca: "Magnus",
    categoria: "Tensiómetro",
    precio: 5236,
    img: "https://magnus.com.ar/wp-content/uploads/2021/06/tensiometro-mcm-300x300.jpg",
  },
  {
    id: "5",
    nombre: "Aspirador",
    marca: "Silfab",
    categoria: "Aspirador",
    precio: 16408,
    img: "https://www.silfab.com.ar/media/catalog/product/cache/1/small_image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/n/3/n33_1.jpg",
  },
];

export const gFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id?obj.find(item=>item.id===id):obj)}, 2000);
  });
};
