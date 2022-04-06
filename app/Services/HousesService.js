import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService {

    addHouse(formData) {
        //TODO take data from the house form
        const newHouse = new House(formData)
        ProxyState.houses = [newHouse, ...ProxyState.houses]
    }
    removeHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
    }
}

export const housesService = new HousesService()