//condições do mapa que irão remover as propriedades responsáveis por garantir a interação usuário-mapa
const option={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat 
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map("mapid", option).setView([lat, lng], 25); //faz-se necessário acrescentar as opções acima, a fim de alterar o comportamento do script no site, pois o que foi feito acima é criar uma variável que possui tais características mas NÃO alterou o site

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker

L.marker([lat, lng], { icon })
.addTo(map);

function selectImage(event){
  const button = event.currentTarget
  
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass) 

  function removeActiveClass(button){
    button.classList.remove("active")
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  imageContainer.src = image.src
  
  button.classList.add('active')

}