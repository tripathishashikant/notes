<template>
    <div
      class="card"
    >
      <div class="card-content">
        <div class="content">
          <p>{{ props.note.content }}</p>
        </div>
        <div class="mt-2">
            <p class="has-text-right has-text-grey-light">
              <small> {{ characterLength }} </small>
            </p>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink
          :to="`/edit-note/${note.id}`"
          class="card-footer-item has-text-black-light"
        >
          Edit
        </RouterLink>
        <button
          class="card-footer-item has-text-black-light"
          @click="modal.deleteNote = true"
        >
          Delete
        </button>
      </footer>
      <ModalDeleteNote
        v-if="modal.deleteNote"
        v-model="modal.deleteNote"
        :noteId="note.id"
      >
      </ModalDeleteNote>
    </div>
</template>

<script setup>
import { computed, reactive } from "vue"
import { RouterLink } from "vue-router";
import ModalDeleteNote from "./ModalDeleteNote.vue";


const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
});

const characterLength = computed(() => {
    const length = props.note.content.length;
    const charStr = length > 1 ? 'characters' : 'character'; 
    return `${length} ${charStr}`;
});

const modal = reactive({
  deleteNote: false,
}) 
</script>