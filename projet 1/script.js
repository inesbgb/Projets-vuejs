let products =[
    {
         id : 1,
         name: "Bic Mac",
         imageUrl: "img/big-mac.png",
         price: 5.99,
         quantity: 0,
         active : false,
 
     },
     {
         id : 2,
         name: "Mc Chicken",
         imageUrl: "img/mc-chicken.png",
         price: 4.99,
         quantity: 0,
         active : false,
     },
     {
         id : 3,
         name: "Doucle Cheese Burger",
         imageUrl: "img/double-cb.png",
         price: 2.99,
         quantity: 0,
         active : false,
     },
     {
         id : 4,
         name: "Fries",
         imageUrl: "img/fries.png",
         price: 2.99,
         quantity: 0,
         active : false,
     },
     {
         id : 5,
         name: "Mc Nuggets",
         imageUrl: "img/nuggets.png",
         price: 3.49,
         quantity: 0,
         active : false,
     },
     {
         id : 6,
         name: "Salad",
         imageUrl: "img/salad.png",
         price: 2.79,
         quantity: 0,
         active : false,
     },
     {
         id : 7,
         name: "Coke",
         imageUrl: "img/cola.png",
         price: 1.99,
         quantity: 0,
         active : false,
     },
     {
         id : 8,
         name: "Ice Tea",
         imageUrl: "img/lipton.png",
         price: 1.99,
         quantity: 0,
         active : false,
     },
     {
         id : 9,
         name: "Water",
         imageUrl: "img/water.png",
         price: 1.49,
         quantity: 0,
         active : false,
     }
 ];
 
 
 
 const app = Vue.createApp({
 
     data(){
         return{
             compteur : 0,
             prods : products,
         }
     },
 
     methods:{
         ToggleEvent(item){
             item.active=!item.active
             item.quantity = 1         
        
     },
         increm(franck){
             franck.quantity++
             
 
     },
         decrem(franck){
             if (franck.quantity>1){
                 franck.quantity--
             }    
         },
         totalProduit(toto){
             return (toto.price * toto.quantity).toFixed(2)
             
         },
 
         totalNote(){
              return this.prods.reduce(
                 (acc,prod)=>{
                     if (prod.active){
                         return acc + parseFloat(this.totalProduit(prod));
                     } else {
                         return acc;
                     }
                 } ,0 ).toFixed(2)           
             }       
     }
 });
 
 
 app.mount('#app')