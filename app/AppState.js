import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      title: 'hehe',
      date: 'Sept 21st',
      description: 'I want you to giggle me to sleep on the twenty-first night of September',
      rate: 17.38,
      img: 'https://image.shutterstock.com/image-photo/waistup-shot-delighted-happy-african-260nw-1347907898.jpg'
    })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      houseNumber: 1234,
      streetName: 'State St',
      price: 600000,
      sqFt: 7500,
      img: 'https://www.familyhomeplans.com/varnish-images/plans/75977/75977-b600.jpg',
      description: "This house is no longer needed. Bought new in 2017 - I just don't use it enough to justify the taxes"
    })
  ]
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
