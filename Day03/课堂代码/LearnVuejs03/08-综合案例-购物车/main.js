const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1001,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 1002,
        name: '《UNIX编程艺术》',
        date: '2006-9',
        price: 59.00,
        count: 1
      },
      {
        id: 1003,
        name: '《编程珠玑》',
        date: '2006-9',
        price: 39.00,
        count: 1
      },
      {
        id: 1004,
        name: '《代码大全》',
        date: '2006-9',
        price: 128.50,
        count: 1
      },

    ]
  },
  methods: {
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeBook(index){
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice(){
      return this.books.reduce(function(pre,book){
        return pre + book.price * book.count;
      },0)

      // let totalPrice = 0;
      // for(let i of this.books){
      //   totalPrice +=i.count * i.price;
      // }
      // return totalPrice;
    }
  },
  filters: {
    finalPrice(price){
      return "￥" + price.toFixed(2);
    }
  },


})