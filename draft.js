var stomuch = []
function cat(name){
	this.name = name;
	this.eat = (item)=> {
        stomuch.push(item)
        console.log(stomuch)
	}
}