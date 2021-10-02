
 /* <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Zseb style/zsebi.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Zseb style/palyafutas.html">Pályafutás</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Zseb style/szolgaltatasok.html">Szolgáltatások</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Zseb style/kapcsolat.html">Kapcsolat</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/

let body = document.querySelector('body');
let navBar = document.createElement('nav');
let conatinerFluid = document.createElement('div');
let navbarButton = document.createElement('button');
let spanIcon = document.createElement('span');
let collapseDiv = document.createElement('div');


navBar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light fixed-top");
conatinerFluid.setAttribute("class","container-fluid");

navbarButton.setAttribute("class","navbar-toggler");
navbarButton.setAttribute("type","button");
navbarButton.setAttribute("data-bs-toggle","collapse");
navbarButton.setAttribute("data-bs-target","#navbarNav");
navbarButton.setAttribute("aria-expanded","false");
navbarButton.setAttribute("aria-controls","navbarNav");

navbarButton.setAttribute("aria-label","Toggle navigation");

spanIcon.setAttribute("class","navbar-toggler-icon");

collapseDiv.setAttribute("class","collapse navbar-collapse");
collapseDiv.setAttribute("id","navbarNav");




let nameArray = [
    ["Home","/Zseb style/zsebi.html"],
    ["Pályafutás","/Zseb style/palyafutas.html"],
    ["Szolgáltatások","/Zseb style/szolgaltatasok.html"],
    ["Munkáim","/Zseb style/munkáim.html"],
    ["Kapcsolat","/Zseb style/kapcsolat.html"],
    ["Karrier","/Zseb style/karrier.html"]
];




let ulTag = document.createElement('ul');
ulTag.setAttribute("class","navbar-nav");

for( item of nameArray){    
    let liTag = document.createElement('li');  
    let aTag = document.createElement('a');   
    liTag.setAttribute("class","nav-item");
    aTag.setAttribute("class","nav-link");
    aTag.setAttribute("href",item[1]);
    aTag.innerHTML=item[0];
    console.log(ulTag);
    liTag.appendChild(aTag);
    ulTag.appendChild(liTag);
}

body.appendChild(navBar);
navBar.appendChild(conatinerFluid);
navbarButton.appendChild(spanIcon);
conatinerFluid.appendChild(navbarButton);
navbarButton.appendChild(spanIcon);
conatinerFluid.appendChild(collapseDiv)
collapseDiv.appendChild(ulTag);
