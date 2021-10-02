let displaySize = Object.displaySize

console.log(displaySize);

let height = this.innerHeight;
let width = this.innerWidth;
console.log(height + " x " + width);
let button = document.querySelector('#schedule');
let carasoulItem = document.querySelector('.carousel-item');

if (width < 990){
    button.setAttribute("style","bottom:-50px") 
    carasoulItem.setAttribute("style","height: 300px")       
}else{
    button.setAttribute("style","bottom:20px")
    carasoulItem.setAttribute("style","max-height:400px")         
    } 




window.addEventListener("resize",function(){
    let height = this.innerHeight;
    let width = this.innerWidth;
    console.log(height + " x " + width);
    let button = document.querySelector('#schedule');
    if (width < 990){
        button.setAttribute("style","bottom:-50px")        
    }else{
        button.setAttribute("style","bottom:20px")        

    } 

})




  





