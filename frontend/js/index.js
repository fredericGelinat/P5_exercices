//variables

const boutonDeLaCarte = document.querySelector(".boutonCarteShopping");
const boutonFermetureCarte = document.querySelector(".carteFermee");
const clearCartBouton = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const couvertureDeLaCarte = document.querySelector(".couvertureDeLaCart");
const carteItems = document.querySelector(".carteItems");
const cartTotal = document.querySelector(".cartTotal");
const cartContaineur = document.querySelector(".cartConteneur");
const produitsDOM = document.querySelector(".produitsCentraux");
//cart
let cart = [];


//aller chercher les produits
class Products {
   async  getProducts() {
try{
     let result = await fetch("http://localhost:3000/api/teddies#");
     let data = await result.json();
     return data;
    } catch (error) {
        console.log(error);
    }
}
}



// afficher les produits
class UI {
displayProducts(products){
   let result = "";
   products.forEach(product => {
     result += `<article class="produit">
     <div class="imgContainer">
         <img src=${product.imageUrl} alt="ours numero un" class="imgProduit">
         <button class="btnDuPanier" data-id=${product.id}>
             <i class=" fas fa-shopping-cart"></i>
             ajouter au panier
         </button>
     </div>
         <h3>${product.name}</h3>
         <h4>${product.price}</h4>
         <h4>${product.description}</h4>
 </article>`
  ;

    } );
  productsDOM.innerHTML = result;
}
}

           
            
            

        

   


//local Storage
class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // aller chercher tous les produits
    products.getProducts().then(data => console.log((data)));
});