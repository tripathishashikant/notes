<template>
  <div class="container editor__wrapper">
    <EditorToolBar v-if="editor" :editor="editor" class="editor__toolbar"/>
    <EditorContent v-if="editor" :editor="editor" class="editor" />
  </div>
</template>

<script setup>
/**
 * imports
 */
  import { onBeforeUnmount } from 'vue';
  import { useEditor, EditorContent } from '@tiptap/vue-3';
  import createTiptapConfig from '@/config/tiptap.config';
  import EditorToolBar from '@/components/tiptap/EditorToolbar.vue';

/**
 * model
 */
  const model = defineModel();

/**
 * tiptap editor
 */
  const editor = useEditor(createTiptapConfig(model));
</script>

<style>
.tiptap {
  overflow-y: auto;
}

.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
