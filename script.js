let getBtn = document.querySelector('.cart-button');
let getClass = document.querySelector('.goods-list');
    getBtn.onclick = function() {
    getClass.classList.toggle('display-none');
};

class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h4>${this.title}</h4><p>$ ${this.price}</p></div>`;
    }
    TotalPrice(total) {
        return `<div class="goods-item"><h3>Total Price :</h3><p>$ ${total}</p></div>`;
      }
  }

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
    totalPrice() {
        let totalPriceCount = 0;
        this.goods.forEach(good => {
            totalPriceCount += good.price          
        });
        const tp = new GoodsItem();        
        document.querySelector('.goods-list').innerHTML += tp.TotalPrice(totalPriceCount);
      }
  };

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalPrice();