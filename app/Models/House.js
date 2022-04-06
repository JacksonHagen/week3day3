import { generateId } from "../Utils/generateId.js"


export class House{
    constructor({houseNumber, streetName, price, sqFt, img, description}) {
        if (!houseNumber || !streetName || !sqFt) {
            throw new Error('An important detail is missing...')
        }
        if(sqFt < 500) {
            throw new Error(`Wow you call a ${sqFt} square foot building a house? That's more commonly known as a shed`)
        }
        this.description = description
        this.houseNumber = houseNumber
        this.streetName = streetName 
        this.price = price || sqFt * 180
        this.sqFt = sqFt
        this.img = img
        this.id = generateId()
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-md-4 p-4">
            <div class="bg-white shadow rounded">
                <img class="w-100 rounded-top" src="${this.img}" alt="${this.houseNumber}-${this.streetName}-image">
                <div class="p-3">
                    <p class="text-center uppercase"><b>${this.houseNumber} - ${this.streetName} - ${this.sqFt}ft.²</b></p>
                    <p class="m-0">${this.description}</p>
                </div>
                <div class="p-3 d-flex flex-column align-items-center">
                    <p class="m-0">$${this.price}</p>
                    <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
                </div>
            </div>
      </div>
        `
    }
}