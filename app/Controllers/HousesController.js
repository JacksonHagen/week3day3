
import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses() {
  let houseCardsTemplate = ''
  ProxyState.houses.forEach(h => houseCardsTemplate += h.CardTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `
//REVIEW house form suggested price
  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Houses 🏠'
  document.getElementById('logo').innerText = 'Add House 🏠'
  document.getElementById('logo-header').innerText = '🏠 - GregsList'
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }


  get SuggestedPrice() {
    const formElem = event.target
    // @ts-ignore
    return formElem.sqFt.value * 185
  }
  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
  
      // @ts-ignore
      const formElem = event.target
      const formData = {
        houseNumber: formElem.houseNumber.value,
        streetName: formElem.streetName.value,
        price: formElem.price.value,
        sqFt: formElem.squareFeet.value,
        img: formElem.img.value,
        description: formElem.description.value || ''
      }
      housesService.addHouse(formData)
      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
    } catch (error) {
      console.error('House didnt load')
    }
  }

  removeHouse(id) {
      housesService.removeHouse(id)
  }

  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}