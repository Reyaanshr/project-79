var name_of_pizzas = [];
function enter(){
    var a_pizza = (document.getElementById("InputPizzaName").value);
    name_of_pizzas.push(a_pizza);
    console.log("Value is entered")
}

function showMenu(){
    document.getElementById("Pizzas").innerHTML = name_of_pizzas;
    console.log(name_of_pizzas);
}