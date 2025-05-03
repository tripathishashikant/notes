<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
    <div class="field">
      <p v-if="label" class="has-text-light mb-2">
        <label>
          {{ label }}:
        </label>
      </p>
      <div class="control">
        <Editor
          ref="addNoteRef"
          v-model="model"
          v-autofocus
          :placeholder="placeholder"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Editor from '@/components/tiptap/Editor.vue';

const model = defineModel();
// const addNoteRef = ref(null);

// function focusTextarea() {
//   addNoteRef.value.focus();
// }

const props = defineProps({
  bgColor: {
    type: String,
    default: 'primary',
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String,
  }
});

// defineExpose({
//   focusTextarea,
// });
</script>
