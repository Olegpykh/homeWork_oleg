const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const body = document.querySelector('body');

const getProductById = (id, callback) => {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((error) => console.log('error'));
};

btn.addEventListener('click', () => {
  const inpValue = inp.value;
getProductById(inpValue,(product) => {

    const avg = (product.reviews.reduce((sum,reviews)=> sum + reviews.rating  ,0) / product.reviews.length).toFixed(2)

2
  body.innerHTML = `
   <main class="container">
      <div class="inp_btn">
        <input type="text" value="" id="inp" placeholder="Введите ID продукта"/>
        <button id="btn">Показать</button>
      </div>
    </main>
    
    <div class="container1">
      <div class="elememt">
        <img id="photo" src=${product.images[0]} alt="" />
        <h2 id="title">${product.title}</h2>
        <div class="info">
          <p> Stock:${product.stock} Stück</p>
          <p> Price:${product.price}$</p>
          <p> Rating AVG:${avg}</p>
          <p> Category:${product.category}</p>
        </div>
      </div>
    </div>
    
    
    `;})
})


