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
import { ref, onMounted } from 'vue';
import Editor from '@/components/tiptap/Editor.vue';

const model = defineModel();
const addNoteRef = ref(null);

function setFocusOnEditor() {
  if (addNoteRef.value && addNoteRef.value.editor) {
    addNoteRef.value.editor.commands.focus();
  } else {
    console.warn('Editor instance is not available.');
  }
}

function clearEditorContent() {
  if (addNoteRef.value && addNoteRef.value.editor) {
    addNoteRef.value.editor.commands.clearContent();
  } else {
    console.warn('Editor instance is not available.');
  }
}

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

onMounted(() => {
  setFocusOnEditor();
});

defineExpose({
  setFocusOnEditor,
  clearEditorContent,
});
</script>
