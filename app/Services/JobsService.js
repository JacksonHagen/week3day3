import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"


class JobsService {
    removeJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    }
    addJob(data) {
        let newJob = new Job(data)
        ProxyState.jobs = [newJob, ...ProxyState.jobs]
    }
}

export const jobsService = new JobsService()