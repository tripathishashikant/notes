import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

export default (model) => ({
  content: model.value,
  onUpdate: ({ editor }) => {
    model.value = editor.getHTML();
  },
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: 'Add a new note',
    }),
  ],
  editorProps: {
    attributes: {
      class: 'textarea mb-5 prose',
    },
  },
});
