fetch("https://vijaya2701.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	
	displayData(data)
})
function displayData(info){
   var bodyElement=document.querySelector("body");
   // var newElement=document.createElement("img")
   // newElement.src="img/apple.jpg";
   // newElement.classList.add("class1","class2","class3")
   //    newElement.classList.remove("class3")

   // newElement.setAttribute("class","image1 image2 image3 ")
   // newElement.textContent="vijaya"
   // console.log(newElement)

  
   var row=document.createElement("section")
   row.classList.add("row","justify-content-center")
   bodyElement.append(row)
   
   info.mobiles.map(value=>{
   	var column=document.createElement("article")
   	column.classList.add("col-sm-10","col-md-6","col-lg-3");
   	row.append(column)

   	// Card 
   	var card=document.createElement("div");
   	card.classList.add("card","mt-3")             //margintop-mt
   	//card-body
   	var cardBody=document.createElement("div");
    cardBody.classList.add("card-body");

    //image
    var imageElement=document.createElement("img");
    imageElement.src=value.image;
    imageElement.classList.add("img-responsive")
    imageElement.alt=value.name;

   //name
   var name=document.createElement("h3");
   name.textContent=value.name;
   name.classList.add("text-center","text-primary")
   //price
   var price=document.createElement("p");            //strike on price-s
   	price.classList.add("text-secondary","text-center","text-block")
   	price.innerHTML="<s>₹ "+value.price+" /-</s>";   //innerHTML-it will place any text either it is in html or not
   //oroginalPrice
   	var oprice=document.createElement("p");
   	oprice.textContent=value.orginalPrice; 
   	console.log(oprice)        //textContent-to place text in tags
   oprice.classList.add("text-center","text-danger")


   //button
   var buttonParent=document.createElement("div");
   buttonParent.classList.add("d-grid","gap-2");

    var button=document.createElement("button")
    button.classList.add("btn","btn-primary","btn-block");
    button.textContent="Add to cart"
    
    buttonParent.append(button)
    cardBody.append(imageElement)
    cardBody.append(name)
    cardBody.append(price)
    cardBody.append(oprice)
     card.append(cardBody)
     cardBody.append(buttonParent)
    column.append(card)
   })
}
