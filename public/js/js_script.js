class menueItem {
  constructor(name, calori,lactos,gluten,ingridense){
    this.ProductName=name;
    this.Kcal=calori;
    this.islactos=lactos;
    this.isGluten=gluten;
    this.ingridense=ingridense
    this.image=
		this.getburger = function() {
  }
}
}
var burger1=new menueItem("green eggs and bacon", 92, true,true,["onion","egg"])


document.getElementById("burgeritem").innerHTML =burger1.getburger()
