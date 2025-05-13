<template>
  <section v-if="editor" class="toolbar mb-1">
    <button
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
      class="toolbar__button">
      <BoldIcon title="Bold icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }"
      class="toolbar__button">
      <ItalicIcon title="Italic icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor.isActive('underline') }"
      class="toolbar__button"
    >
      <UnderlineIcon  title="Underline icon"/>
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      class="toolbar__button">
      <H1Icon title="Heading level 1 icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      class="toolbar__button">
      <H2Icon title="Heading level 2 icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      class="toolbar__button">
      <H3Icon title="Heading level 3 icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
      class="toolbar__button">
      <BulletListIcon title="Bullet list icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
      class="toolbar__button">
      <NumberedListIcon title="Numbered list icon" />
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('left').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      class="toolbar__button">
      <AlignLeftIcon title="Align Left icon" />
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('center').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      class="toolbar__button">
      <AlignCenterIcon title="Align Center icon" />
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('right').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      class="toolbar__button">
      <AlignRightIcon title="Align Right icon" />
    </button>
    <button
      @click="editor.chain().focus().setTextAlign('justify').run()"
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      class="toolbar__button">
      <AlignJustifyIcon title="Align Justify icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleHighlight().run()"
      :class="{ 'is-active': editor.isActive('highlight') }"
      class="toolbar__button"
    >
      <HighlightIcon title="Highlight icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }"
      class="toolbar__button">
      <BlockquoteIcon title="Block quote icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleCode().run()"
      :disabled="!editor.can().chain().focus().toggleCode().run()"
      :class="{ 'is-active': editor.isActive('code') }"
      class="toolbar__button">
      <CodeIcon title="Code Tag icon" />
    </button>
    <button
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }"
      class="toolbar__button">
      <CodeBlockIcon title="Code block icon" />
    </button>
    <button
      @click="addImage"
      class="toolbar__button"
    >
      <ImageIcon title="Image icon" />
    </button>
    <button
      @click="addLink"
      class="toolbar__button"
    >
      <LinkIcon title="Link icon" />
    </button>
    <button
      @click="editor.chain().focus().setHorizontalRule().run()"
      class="toolbar__button"
    >
      <HRIcon title="Horizontal Ruler icon" />
    </button>
    <button
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
      class="toolbar__button"
    >
      <UndoIcon title="Undo icon" />
    </button>
    <button
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
      class="toolbar__button"
    >
      <RedoIcon title="Redo icon" />
    </button>
  </section>
</template>

<script setup>
/**
 * imports
 */
 import BoldIcon from 'vue-material-design-icons/FormatBold.vue';
 import ItalicIcon from 'vue-material-design-icons/FormatItalic.vue';
 import UnderlineIcon from 'vue-material-design-icons/FormatUnderline.vue';
 import H1Icon from 'vue-material-design-icons/FormatHeader1.vue';
 import H2Icon from 'vue-material-design-icons/FormatHeader2.vue';
 import H3Icon from 'vue-material-design-icons/FormatHeader3.vue';
 import AlignLeftIcon from 'vue-material-design-icons/FormatAlignLeft.vue';
 import AlignCenterIcon from 'vue-material-design-icons/FormatAlignCenter.vue';
 import AlignRightIcon from 'vue-material-design-icons/FormatAlignRight.vue';
 import AlignJustifyIcon from 'vue-material-design-icons/FormatAlignJustify.vue';
 import BulletListIcon from 'vue-material-design-icons/FormatListBulleted.vue';
 import NumberedListIcon from 'vue-material-design-icons/FormatListNumbered.vue';
 import HighlightIcon from 'vue-material-design-icons/FormatColorHighlight.vue';
 import BlockquoteIcon from 'vue-material-design-icons/FormatQuoteClose.vue';
 import CodeIcon from 'vue-material-design-icons/CodeTags.vue';
 import CodeBlockIcon from 'vue-material-design-icons/CodeBlockTags.vue';
 import ImageIcon from 'vue-material-design-icons/Image.vue';
 import LinkIcon from 'vue-material-design-icons/Link.vue';
 import HRIcon from 'vue-material-design-icons/Minus.vue';
 import UndoIcon from 'vue-material-design-icons/Undo.vue';
 import RedoIcon from 'vue-material-design-icons/Redo.vue';

/**
 * props
 */
  const props = defineProps({
    editor: {
      type: Object,
      required: true,
    },
  });

/**
 * Add Image method for adding image
 */
  function addImage() {
    const url = window.prompt('URL')

    if (url) {
      props.editor.chain().focus().setImage({ src: url }).run()
    }
  }

/**
 * Add Image method for adding image
 */
  function addLink() {
    const url = window.prompt('Enter the URL')

    if (url) {
      props.editor.chain().focus().setLink({ href: url }).run()
    }
  }

</script>

<style>
.toolbar {
  display: flex;
  flex-flow: row wrap;
  gap: 0.3rem;

  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  border-color: var(--bulma-input-border-color);
  border-radius: var(--bulma-input-radius);
  background-color: hsl(221, 14%, calc(100% + 0%));
}

.toolbar__button {
  padding: 0.3rem 0.3rem 0 0.3rem;
  color: hsl(var(--bulma-input-h), var(--bulma-input-s), var(--bulma-input-color-l));
  cursor: pointer;
}

.toolbar__button.is-active {
  color: #fff;
  background-color: #007bff;
}

.toolbar__button:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
}

/* Rich Text Editor Elements Styles */
.tiptap {
  h1 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 2.4em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0.5em 0;
    line-height: 1.6;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 1em;
    color: #666;
    font-style: italic;
    margin: 1em 0;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
  }

  pre {
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
  }

  code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  hr {
    border: none;
    border-top: 1px solid #dcdcdc;
    margin: 1em 0;
  }

  a {
    color: rgb(38, 38, 236);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    display: block;
    height: auto;
    margin: 1.5rem 0;
    max-width: 100%;

    &.ProseMirror-selectednode {
      outline: 3px solid var(--purple);
    }
  }
}
</style>
