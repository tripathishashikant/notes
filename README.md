# Notes Application

The Notes Application is a feature-rich web application built with Vue 3 and Vite. It allows users to create, edit, and manage notes with advanced text editing capabilities powered by the TipTap editor.

## Features

### General Features
- **User Authentication**: Secure login and registration system.
- **Note Management**: Create, edit, delete, and view notes.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Firebase Integration**: Real-time database and hosting using Firebase.

### TipTap Editor Integration
The project integrates the TipTap editor with the following features:

- **Bold, Italic, Underline**: Basic text formatting options.
- **Headings**: Support for heading levels (H1, H2, H3).
- **Lists**: Ordered and unordered lists.
- **Text Alignment**: Align text to left, center, right, or justify.
- **Highlight**: Highlight text with customizable colors.
- **Blockquote**: Add blockquote styling to text.
- **Code and Code Block**: Inline code and code block support.
- **Horizontal Rule**: Insert horizontal rules.
- **Undo/Redo**: Undo and redo actions.
- **Image Support**: Add images by providing a URL.
- **Link Support**: Add hyperlinks to text.

### How to Use the Editor
- The editor toolbar provides buttons for all the above features.
- For images and links, a prompt will appear to input the URL.

### Extensions Used
- `@tiptap/starter-kit`
- `@tiptap/extension-highlight`
- `@tiptap/extension-underline`
- `@tiptap/extension-text-align`
- `@tiptap/extension-color`
- `@tiptap/extension-image`
- `@tiptap/extension-link`

### Customization
The editor is configured in `src/config/tiptap.config.js`. You can modify the configuration to add or remove features as needed.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/tripathishashikant/notes.git
   ```
2. Navigate to the project directory:
   ```sh
   cd notes
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Development
Start the development server:
```sh
npm run dev
```

### Production
Build the project for production:
```sh
npm run build
```

### Deployment
Deploy the project to Firebase:
```sh
firebase deploy
```

## Folder Structure
- `src/components/notes`: Components for managing notes (e.g., Add/Edit Note, Delete Modal).
- `src/components/tiptap`: TipTap editor and toolbar components.
- `src/config`: Configuration files (e.g., TipTap editor configuration).
- `src/stores`: Vuex stores for managing application state (e.g., notes, authentication).
- `src/views`: Application views (e.g., Notes, Authentication, Statistics).

## Documentation

For more details on the TipTap editor and its usage with Vue, refer to the official documentation:
- [TipTap Vue Documentation](https://tiptap.dev/)

## Live Demo
Check out the live demo of the application: [Notes Application](https://notes-fa640.web.app)

## License
This project is licensed under the MIT License.
