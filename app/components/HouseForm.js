
//REVIEW line 22 placeholder function && listeners
export function getHouseForm() {
  return /*html*/ `
  <form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="squareFeet" class="form-label">Square Footage</label>
      <input type="number" class="form-control" name="squareFeet" id="squareFeet" aria-describedby="squareFeet"
        placeholder="Square Footage..." required>
    </div>
    <div>
      <label for="houseNumber" class="form-label">House Number</label>
      <input type="text" class="form-control" name="houseNumber" id="houseNumber" aria-describedby="houseNumber"
        placeholder="House Number..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price" min="50000" max="9999999" required>
    </div>
    <div>
      <label for="streetName" class="form-label">Street Name</label>
      <input type="text" class="form-control" name="streetName" id="streetName" aria-describedby="streetName"
        placeholder="Street Name..." min='1' required>
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
</form>`
}