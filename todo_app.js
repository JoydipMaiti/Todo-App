let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener("click" , function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);

    ul.appendChild(item);

    input.value = "";
});

// let dltBtns = document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click" , function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener("click",function(event){

    if(event.target.nodeName == "BUTTON"){
 
     let li = event.target.parentNode;
     li.remove();
    }
 }
 
 )