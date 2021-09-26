let displaySize = Object.displaySize

console.log(displaySize);




window.addEventListener("resize",function(){
    let height = this.innerHeight;
    let width = this.innerWidth;
    console.log(height + " x " + width);
    let button = document.querySelector('#schedule');
    if (width < 990){
        button.setAttribute("style","bottom:-40px")        
    }else{
        button.setAttribute("style","bottom:20px")        

    } 

})
