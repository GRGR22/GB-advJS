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
    return `<div class="goods-item"><h3>${title}</h3> - <p>$${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    //document.querySelector(".goods-list").innerHTML = goodsList; // Вероятно innerHTML буквально транслитирирует содержимое массива, в результате, зпт появляются как HTML разметка
    goodsList.forEach(element => {
        document.querySelector(".goods-list").innerHTML += element; // Вариант неравного боя с запятыми
    });
  }
  
  renderGoodsList(goods);