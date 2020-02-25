// let newtask = document.getElementById("submit-btn");


// newtask.addEventListener("click", create)

function create() {
    
    var btnsubmit=document.getElementById('submit-btn');

//    document.body.appendChild(div1);
let lastdic=document.createElement('div')
var divelement=document.createElement('div');
var textinput=document.createElement('p');
var completebntn=document.createElement('button');
var removebtn=document.createElement('button');
let place=document.getElementById('place');
let textinside=document.getElementById("text").value


if (textinside==('')) {
    alert ('text empty')
}
else{
   
    // document.body.appendChild(divelement)
    textinput.innerText =  textinside
  
    
    completebntn.innerHTML=('Complete')
    removebtn.innerHTML=('delete')
  
    divelement.appendChild(completebntn)
    divelement.appendChild(removebtn)     
    divelement.appendChild(textinput)
   place.appendChild(divelement)
   removebtn.addEventListener("click",function(){
    divelement.remove()

})

    completebntn.addEventListener("click",function(){
    
            if ( completebntn.innerHTML==="undo"){
                textinput.style.textDecoration="none";
        completebntn.innerHTML=("complete");
        }
        else {

            completebntn.innerHTML=("undo") ;
            textinput.style.textDecoration="line-through";
            
            
        }

       




      
    })
   

}
document.getElementById("text").value='';
}