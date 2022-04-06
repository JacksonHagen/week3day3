import { ProxyState } from "../AppState.js"
import { getJobForm } from "../components/JobForm.js"
import { jobsService } from "../Services/JobsService.js"

function _drawJobs() {
    let jobsCardsTemplate = ''
    ProxyState.jobs.forEach(j => jobsCardsTemplate += j.CardTemplate)
    
    document.getElementById('listings').innerHTML = `
    <div class="row jobs">
        ${jobsCardsTemplate}
    </div>
    `
    document.getElementById('listing-modal-form-slot').innerHTML = getJobForm()
    document.getElementById('add-listing-modal-label').innerText = 'Add a Job'
    document.getElementById('logo').innerText = 'Add Jobs 👨‍💻'
    document.getElementById('logo-header').innerText = '👨‍💻 - GregsList'
}
export class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
    }
    drawJobs(){
        _drawJobs()
    }
    addJob() {
        try {
            event.preventDefault()      
            /**@type {HTMLFormElement} */
            //@ts-ignore
            const form = event.target
            const formData = {
                // @ts-ignore
                title: form.title.value,
                date: form.jobDate.value,
                description: form.description.value,
                rate: form.rate.value,
                img: form.img.value            
            }
            jobsService.addJob(formData)
            form.reset()
            //@ts-ignore
            bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
        } catch (error) {
            console.error('sums wrong wit da job')
        }    
    }
    removeJob(id) {
        jobsService.removeJob(id)
    }
}