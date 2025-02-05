<template>
  <div class="notes">
    <div class="card has-background-primary-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Submit</button>
        </div>
      </div>
    </div>
    <div
      class="card">
      <div class="card-content">
        <div class="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, impedit officiis. Veritatis saepe numquam quibusdam itaque. Ab ratione eligendi laboriosam vero! Enim fugit, illum id
            similique earum debitis accusantium dicta!</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  .notes {
    padding: 0.5rem 0.75rem;
  }
}
</style>