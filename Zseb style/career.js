//let birthInput = document.querySelector('[name="birthYear"]');

//birthInput.setAttribute("style","background-color: lightgray")






function addNewCandidate(){
    let nameOfCandidate = document.querySelector("#name").value;
    console.log(nameOfCandidate);
    writeCV(nameOfCandidate);
}




function writeCV(nameOfCandidate){
    let cvContainer = document.querySelector('[name = "cv"]');
    cvContainer.setAttribute("style","display: block");
    document.querySelector('[name="name"]').innerHTML = nameOfCandidate;
    
    

}
