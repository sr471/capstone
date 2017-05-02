var select = document.getElementById("select")


function addDough(id){
   
makeImage("images/" + id + ".png",250,60,300,300,1)

select.innerHTML = "<button onclick='addSauce(this.id)' id='pesto-sauce' name='pesto' type='button'><img src='images/pesto.png' height='100' width='100'></button><button onclick='addSauce(this.id)' id='red-sauce' name='red' type='button'><img src='images/red.png' height='100' width='100'></button>"

}

function addSauce(id){
    
makeImage("images/" + id + ".png",250,60,300,300,1)

select.innerHTML = "<button onclick='addCheese(this.id)' id='cheese1' type='button'><img src='images/cheese1.png' height='100' width='100'></button><button onclick='addCheese(this.id)' id='cheese2' type='button'><img src='images/cheese2.png' height='100' width='100'></button>"

}

function addCheese(id){
    
    if(id == 'cheese2'){
        makeImage("images/" + id + ".png",255,65,290,290,1)
    }

    else{makeImage("images/" + id + ".png",240,10,350,350,1)}
    

select.innerHTML = "<button onclick='addToppings(this.id)' id='pepperoni' type='button'><img src='images/pep.png' height='100' width='100'></button><button onclick='addToppings(this.id)' id= 'mushroom' type='button'><img src='images/mush.png' height='100' width='100'</button><button onclick='addToppings(this.id)' id='pineapple-chuncks' type='button'><img src='images/pinapple.png' height='100' width='100'></button>"    

}

function addToppings(id){
    if(id == 'pepperoni'){
            makeImage("images/" + id + ".png",255,65,290,290,1)
        }

    else if(id=='mushroom'){
        makeImage("images/" + id + ".png",240,10,350,350,1)
    }

    else{
        makeImage("images/" + id + ".png",240,10,350,350,1)
    }

}

