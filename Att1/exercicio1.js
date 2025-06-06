// Modificando os elementos p
document.getElementById("text1").style.color = "green";
document.getElementById("text1").style.fontSize = "50px";

document.getElementById("text2").style.color = "gray";
document.getElementById("text2").style.fontSize = "40px";

document.getElementById("text3").style.color = "blue";
document.getElementById("text3").style.fontSize = "30px";

const text4Elements = document.getElementsByClassName("text4");
for (let i = 0; i < text4Elements.length; i++) {
    text4Elements[i].style.color = "red";
    text4Elements[i].style.fontSize = "20px";
}

// Modificando todos os elementos h2
const h2Elements = document.getElementsByTagName("h2");
for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].textContent = "JS é a melhor linguagem de script e eu posso provar!";
}