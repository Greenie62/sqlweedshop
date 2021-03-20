var priceSelect = document.querySelector("#price");
var quantitySelect = document.querySelector("#quantity");

var html;
var qhtml;


for(let i = 15; i< 100;i++){
    html += `<option style="color:red" value=${i}>$${i}</option>`
    qhtml += `<option value=${i-14}>${i-14}</option>`
}

priceSelect.innerHTML = html
quantitySelect.innerHTML = qhtml


var rollBadges = document.querySelectorAll(".roll");
var smokeBadges = document.querySelectorAll(".smoke");



rollBadges.forEach((b,idx)=>{
    b.onclick=(e)=>{
        console.log("ID: " + e.target.getAttribute('data-id'))
        fetch(`/rollweed/${e.target.getAttribute('data-id')}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }
})


smokeBadges.forEach((b,idx)=>{
    b.onclick=(e)=>{
        console.log("ID: " + e.target.getAttribute('data-id'))
        fetch(`/smokeweed/${e.target.getAttribute('data-id')}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }
})