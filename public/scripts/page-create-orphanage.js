//create map
const map = L.map('mapid').setView([-27.2230942,-49.6600197], 16)

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
})


let marker;

//create and marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;

;     // remove icon
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat,lng],{icon})
    .addTo(map)
})


// add field to photo
function  addPhotoField(){
    //pegar o conteiner de fotos #images
    const container = document.querySelector('#images')
    
    // pegar o container para duplicar .new-image
    const fielsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFielContainer = fielsContainer[fielsContainer.length -1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFielContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o compo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFielContainer)

}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2 ){
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//select yes or 

function toggleSelect(event){

    //retirar a class .active (dps botoes)
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active');
    })

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name="opening_on_weekends"]')

    input.value = button.dataset.value


    
}

