// function myFunc(){
//     alert("Please wait, this should take less than a minute");
//   } 

// const btn=document.getElementById("btn");

// btn.addEventListener("click", function myFunc(){
//     alert("Please wait, this should take less than a minute")
// });


function clickHandler(event){
    console.log('Button clicked');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler)