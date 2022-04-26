const toodooList = new Vue({
    el:'#lista',
    data:{
        bambolaVodoo:[
            {
              id:1,
              check:false,
              nomeIngrediente:'Ciuffo di capelli',
              
              
            },
            {
                id:2,
                check:false,
                nomeIngrediente:'Tessuto della vittima',

                

            },
            {
                id:3,
                check:false,
                nomeIngrediente:'Liquido del corpo',

                

            },
            {
                id:4,
                check:false,
                nomeIngrediente:'Resti del cadavere di un parente',

                

            },
            {
                id:5,
                check:false,
                nomeIngrediente:'Bambola di Feltro',

                

            },
            {
                id:6,
                check:false,
                nomeIngrediente:'Bottoni',

                

            },
            {
                id:7,
                check:false,
                nomeIngrediente:'Kit-cucito',

                

            },





        ],

        nuovoIngrediente:'',


    

    },
    methods:{
        aggiungi(){
            const ingrediente = {
                check:false,
                nomeIngrediente:this.nuovoIngrediente,
            }
            this.bambolaVodoo.push(ingrediente)
            this.nuovoIngrediente = '';



        },
        rimuovi(i){
            this.bambolaVodoo.splice(i, 1)
        },



    },


});