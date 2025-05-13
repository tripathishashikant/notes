import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';

export default (model) => ({
  content: model.value,
  onUpdate: ({ editor }) => {
    model.value = editor.getHTML();
  },
  extensions: [
    StarterKit,
    Underline,
    Highlight,
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
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
