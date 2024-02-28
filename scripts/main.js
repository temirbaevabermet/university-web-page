let buttonElement = document.querySelector("button");
buttonElement.onclick = () =>{
    alert("Can you enter your name?");
    
}
let btn = "OK";
const myHeading = document.querySelector("h1");
function changeHeader(){
    let name = document.getElementById("name").value;
    myHeading.textContent = "Welecome"+" "+ name+"!";
}

const imgElement = document.querySelector("img");
const img1URL = "images/Ala-Too_International_University_Seal.png";
const img2URL = "images/nature-photo.webp";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
imgElement.onclick = changePhoto;
/*<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:domain" content="temirbaevabermet.github.io" />
    <meta name="twitter:url" content="https://temirbaevabermet.github.io/university-web-page/" />
    <meta name="twitter:title" content="Alatoo International University" />
    <meta name="twitter:description" content="Ala-Too International University (AIU) was established in 1996 and it is located in Bishkek, the Kyrgyz
    Republic. Our university consists of five blocks, where there are classrooms and laboratories
    equipped with the Internet and modern interactive whiteboards." />
    <meta name="twitter:image" content="images\ALATOO-LOGO-2.webp" />*/
   