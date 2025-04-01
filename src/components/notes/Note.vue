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
          @click="notesStore.deleteNote(note.id)"
        >
          Delete
        </button>
      </footer>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useNotesStore } from '@/stores/notes.store.js'
import { RouterLink } from "vue-router";

const notesStore = useNotesStore();

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
</script>