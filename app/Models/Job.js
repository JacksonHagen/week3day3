import { generateId } from "../Utils/generateId.js"


export class Job{
    constructor({title, date, description, rate, img}) {
        this.title = title
        this.date = date
        this.description = description || ''
        this.rate = rate
        this.img = img
        this.id = generateId()
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="car col-md-4 p-4">
            <div class="bg-white shadow rounded">
                <img class="w-100 rounded-top" src="${this.img}" alt="${this.title}-image">
                <div class="p-3">
                    <p class="text-center uppercase"><b>${this.title}</b></p>
                    <p class="m-0">${this.description}</p>
                </div>
                <div class="p-3 d-flex justify-content-between align-items-center">
                    <p class="m-0">$${this.rate}</p>
                    <div class="d-flex align-items-center">
                        <p class="m-0">Date of Job: ${this.date}</p>
                    </div>
                    <i class="mdi mdi-trash-can-outline selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
                </div>
            </div>
        </div>
        `
    }
}