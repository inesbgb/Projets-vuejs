products = [
    {
        nom: "produit 1",
        prix: 10,
        quantite: 20,
        categorie: "Catégorie 1",
    },
    {
        nom: "produit 2",
        prix: 20,
        quantite: 30,
        categorie: "Catégorie 2",
    }
]

const app = {
    data() {
        return{
            prod: products,

            newProducts: {},
            show:false,
            editNom:'',
            editPrix:0,
            editQuantite:0,
            editCategorie:'',
            indexProdModifie:0,

        }
    },

    methods: {
        ajouter() {
            console.log("dans le save" )
            this.prod.push(this.newProducts);
            this.newProducts = {};
        },
        supprimer(index) {
            console.log("dans le supp" )
           this.prod.splice(index,1);
          
            // delete this.prod[index];
           
        },
        openModifier(index){
          
            this.show=true;
           this.indexProdModifie=index;
            this.editNom=this.prod[index].nom;
            this.editPrix=this.prod[index].prix;
            this.editQuantite=this.prod[index].quantite;
            this.editCategorie=this.prod[index].categorie;

            console.log("dans le modif " +  this.editCategorie)
        },
        enregistrerModif(){
            console.log('dans enregistrer' + this.indexProdModifie)
            let editNom = document.querySelector('#editName');
            let editPrix = document.querySelector('#editPrice');
            let editQuantite = document.querySelector('#editQuantity');
            let editCategorie = document.querySelector('#editCategory');

            this.prod[this.indexProdModifie].nom= editNom.value;
            this.prod[this.indexProdModifie].prix= editPrix.value;
            this.prod[this.indexProdModifie].quantite= editQuantite.value;
            this.prod[this.indexProdModifie].categorie= editCategorie.value
           
            this.show=false;

        },

    }
}

Vue.createApp(app).mount("#app")