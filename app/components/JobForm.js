
export function getJobForm() {
    return `
    <form onsubmit="app.jobsController.addJob()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="title" class="form-label">Job Title</label>
        <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
          placeholder="Job Title..." required>
      </div>
      <div>
        <label for="jobDate" class="form-label">Job Date</label>
        <input type="text" class="form-control" name="jobDate" id="jobDate" aria-describedby="jobDate"
          placeholder="Date (ex. 'Jan 1st')..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="rate" class="form-label">Rate per Hour</label>
        <input type="number" class="form-control" name="rate" id="rate" aria-describedby="rate"
          placeholder="Rate..." min="7" max="500" required>
      </div>
      <div>
        <label for="areaCode" class="form-label">Area</label>
        <input type="number" class="form-control" name="areaCode" id="areaCode" aria-describedby="areaCode"
          placeholder="5 digit zip code..." min='10000' max="99999">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
    `
}