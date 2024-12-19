const fotoContainer = document.getElementById("foto-container");

let content = "<div class='column'>";

for(let i=0; i<20; i++){
    if(i!=0 && (i % 5 == 0)){
        content += `</div><div class="column">${getFotoElement(i+1)}`
    }else{
        content += getFotoElement(i+1);
    }
}

content += "</div>";

fotoContainer.innerHTML = content;

function getFotoElement(foto_id){
    return `<a href="#" class="foto"><img alt="foto${foto_id}" src="img/foto_${foto_id}.jpg"/></a>`
}