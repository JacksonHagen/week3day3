import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";


function _drawHouses() {
  let houseCardsTemplate = 'TODO'
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      debugger
      const formElem = event.target
      const formData = {
        // TODO YOUR JOB NOT MINE
      }
      console.log({ formData })

    } catch (error) {
      // show this to the user
    }
  }

  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}