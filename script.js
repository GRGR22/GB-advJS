class Shawarma {
    constructor(size, stuffing, topping) {
      this.size = size;
      this.stuffing = stuffing;
      this.topping = topping;
      this.checked = function (inputs, compliance) {   
        let arr = [];     
        inputs.forEach(el => {
          if (el.checked) {
            arr.push(compliance[el.value-1])} 
        });         
        return arr;              
      };
    }
    // addTopping(topping) { 
    // }   // Добавить добавку }
    // removeTopping(topping) {
    // } // Убрать добавку }
    getSize() {   
      let sizeCompliance = [{subPrice: 50, calorie: 20}, {subPrice: 100, calorie: 40}, {subPrice: 150, calorie: 60}];  
      let shawarmaSizeInput = document.body.querySelectorAll("#shawarmaSize");     
      this.size = this.checked(shawarmaSizeInput, sizeCompliance);    
    };        // Узнать размер гамбургера }
    
    getStuffing() {  
      let stuffCompliance = [{subPrice: 10, calorie: 20}, {subPrice: 20, calorie: 5}, {subPrice: 15, calorie: 10}]  
      let stuffing = document.querySelectorAll("#stuffing");      
      this.stuffing = this.checked(stuffing, stuffCompliance);
    }        // Узнать начинку гамбургера }

    getToppings() {  
      let toppingCompliance = [{subPrice: 0, calorie: 0}, {subPrice: 15, calorie: 5}, {subPrice: 0, calorie: 0}, {subPrice: 20, calorie: 5}, {subPrice: 40, calorie: 10}]  
      let toppingSearch = document.querySelectorAll("#topping");      
      this.topping = this.checked(toppingSearch, toppingCompliance);
    } // Получить список добавок }     
    
    calculatePrice() { 
      let totalPrice = calc(this.size) + calc(this.stuffing) + calc(this.topping); //  
      function calc(params) {
        if (!params.length) {
          alert ('Эээ, брэт, начинка выбирай. Это обязательнэ!')
        }
         let summ = 0;
        for (let i = 0; i < params.length; i++) {
           summ += params[i].subPrice          
        }   
        return summ     
      }
      return totalPrice;
    }      // Узнать цену }
    calculateCalories() {  
      let totalCalories = calc(this.size) + calc(this.stuffing) + calc(this.topping); //  
      function calc(params) {        
        let summ = 0;
        for (let i = 0; i < params.length; i++) {
           summ += params[i].calorie          
        }
        return summ
      }
      return totalCalories
    }  // Узнать калорийность }    
  }
  const supaShawarma = new Shawarma ();
  console.log ('Lets Go');

  let getBtn = document.querySelector('.cart-button');
    getBtn.onclick = function() {
      supaShawarma.getSize();
      supaShawarma.getStuffing();
      supaShawarma.getToppings();
      console.log (`Цена: ${supaShawarma.calculatePrice()} рублей. Калорийность: ${supaShawarma.calculateCalories()} кКал.`);  
      ;
    };