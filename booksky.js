//getting add new card button
var popup_bg = document.querySelector(".popup_bg");
var popup = document.querySelector(".popup");
var canbutt =document.querySelector("#cancel_button");

function newBook(){
    popup_bg.style.display="block";
    popup.style.display="block";
}

//to cancel the default reloading and adding cancel attribute
canbutt.addEventListener("click",function(event)
{
    event.preventDefault();
    popup_bg.style.display="none";
    popup.style.display="none";
})

//getting datas for new book

var container = document.querySelector(".master_container")
var bookTitle = document.getElementById("book_title_input");
var bookAuthor = document.getElementById("book_author_input");
var bookDescription = document.getElementById("book_description_input");
var addButton = document.getElementById("add_newbook_button");


addButton.addEventListener("click", function(event)
{
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","card_container");
    div.innerHTML=`                
    <h2>${bookTitle.value}</h2>
    <h3>${bookAuthor.value}</h3>
    <p>${bookDescription.value}</p>
    <button onclick="deleteCard(event)">Delete</button>`
    container.append(div);
    popup_bg.style.display="none";
    popup.style.display="none";
})

//deleting the card
function deleteCard(event){
    event.target.parentElement.remove();
}

//blah balh abolalkdfoihjnfkinhfkd

function dom(){
    event.delete()
}


