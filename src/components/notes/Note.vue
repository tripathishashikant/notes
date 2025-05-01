<template>
    <div
      class="card"
    >
      <div class="card-content">
        <div class="content" v-html="props.note.content"></div>
        <div class="mt-2">
            <p class="columns is-mobile has-text-grey-light mr-2">
              <small class="column"> {{ formattedDate }} </small>
              <small class="column has-text-right"> {{ characterLength }} </small>
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
import { useDateFormat } from "@vueuse/core";
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

const formattedDate = computed(() => {
  const date = new Date(Number(props.note.date));
  return useDateFormat(date, "DD MMM YYYY @ HH:mm");
});

const modal = reactive({
  deleteNote: false,
}) 
</script>