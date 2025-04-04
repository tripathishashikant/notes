<template>
  <div
    class="modal is-active"
  >
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete the note?
      </section>
      <footer class="modal-card-foot is-flex is-justify-content-flex-end">
        <div class="buttons">
          <button
            class="button"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="button is-danger"
            @click="store.deleteNote(noteId)"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core';
import { useNotesStore } from '@/stores/notes.store';

const model = defineModel();
const modalCardRef = ref(null);
const store = useNotesStore();

defineProps({
  noteId: {
    type: String,
    required: true,
  }
});

function closeModal() {
  model.value = false
}

onClickOutside(modalCardRef, closeModal)

function escapeToClose(e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', escapeToClose)
})

onUnmounted(() => {
  document.removeEventListener('keyup', escapeToClose)
})
</script>
