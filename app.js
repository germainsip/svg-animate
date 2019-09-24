const logo = document.querySelectorAll("#logo path");
// calcul des longueurs de chemins
for(let i = 0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

