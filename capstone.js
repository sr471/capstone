var select = document.getElementById("select")


function addDough(id){
   
makeImage("images/" + id + ".png",250,60,300,300,1)

select.innerHTML = "<button onclick='addSauce(this.id)' id='red-sauce' name='red' type='button'><img src='images/red.png' height='100' width='100'><br>Red Sauce</button><button onclick='addSauce(this.id)' id='pesto-sauce' name='pesto' type='button'><img src='images/pesto.png' height='100' width='100'><br>Pesto Sauce</button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"

}

function addSauce(id){
    
makeImage("images/" + id + ".png",250,60,300,300,1)

select.innerHTML = "<button onclick='addCheese(this.id)' id='cheese2' type='button'><img src='images/cheese2.png' height='100' width='100'><br>Mozzarella Cheese</button><button onclick='addCheese(this.id)' id='cheese1' type='button'><img src='images/cheese1.png' height='100' width='100'><br>Chedder Cheese</button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"

}

function addCheese(id){
    
    if(id == 'cheese2'){
        makeImage("images/" + id + ".png",255,65,290,290,1)
    }

    else{makeImage("images/" + id + ".png",240,10,350,350,1)}
    

select.innerHTML = "<button onclick='addToppings(this.id)' id='pepperoni' type='button'><img src='images/pep.png' height='100' width='100'><br>Pepperoni</button><button onclick='addToppings(this.id)' id= 'mushroom' type='button'><img src='images/mush.png' height='100' width='100'><br>Mushrooms</button><button onclick='addToppings(this.id)' id='pineapple-chuncks' type='button'><img src='images/pinapple.png' height='100' width='100'><br>Pineapple</button> <button onclick='drinks()' id = 'drinks' type='button'><img src='images/drinks.png' height='100' width='100'><br>Drinks</button><button onclick='done()' id = 'done' type='button'><img src='images/done.png' height='100' width='100'><br>You finished?</button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"   

}

function addToppings(id){
    if(id == 'pepperoni'){
            makeImage("images/" + id + ".png",320,115,100,100,1)
            makeImage("images/" + id + ".png",390,195,100,100,1)
        }

    else if(id=='mushroom'){
        makeImage("images/" + id + ".png",290,90,150,150,1)
        makeImage("images/" + id + ".png",360,165,150,150,1)
    }

    else{
         makeImage("images/" + id + ".png",320,195,100,100,1)
         makeImage("images/" + id + ".png",390,115,100,100,1)
    }

}

function drinks(){
select.innerHTML = "<button onclick='chooseDrink(this.id)' id='coke1' type='button'><img src='images/coke1.png' height='100' width='100'><br>Coke</button><button onclick='chooseDrink(this.id)' id= 'sprite' type='button'><img src='images/sprite.png' height='100' width='100'><br>Sprite</button><button onclick='chooseDrink(this.id)' id='pepsi' type='button'><img src='images/pepsi.png' height='100' width='100'><br>Pepsi</button><button onclick='chooseDrink(this.id)' id='dr-pepper' type='button'><img src='images/dr-pepper.png' height='100' width='100'><br>Dr. Pepper</button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"
}

function chooseDrink(id){
    makeImage("images/" + id + ".png",100,30,150,150,1)
select.innerHTML = "<button onclick='done()' id = 'done' type='button'><img src='images/done.png' height='100' width='100'></button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"   
}

function done(){
    makeText("Congragulations",100,100,72)
    
    makeText("You done it",200,200,72)
    
select.innerHTML = "<button onclick='location.reload()' id = 'again' type='button'><img src='images/again.png' height='100' width='100'><br>Make Another?</button><a href='index.html'><button><img  src='images/home.png' height='100' width='100'><br>Home</button></a>"   

}

