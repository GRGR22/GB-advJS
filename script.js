let getBtn = document.querySelector('.cart-button');
let getClass = document.querySelector('.goods-list');
    getBtn.onclick = function() {
    getClass.classList.toggle('display-none');
};

  const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    console.log ('goodsList');
    return `<div class="goods-item"><h3>${title}</h3> - <p>$${price}</p></div>`
  };
  
  const renderGoodsList = (list) => {
    //   Изыскания по добавлению параметров по умолчаню не увенчались успехом.
    //   Не нашел другого выхода, как добавить проверку на пустоту корзины.
    //   Попахивает, но работает.
    list.length ? 0: list = [{ title: 'Корзина пуста', price: 0 }];
    
    let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));    
    goodsList.forEach(element => {
        document.querySelector(".goods-list").innerHTML += element;
    });
  }
  
  renderGoodsList(goods);