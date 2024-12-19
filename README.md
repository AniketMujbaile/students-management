# Student Management System

A responsive web application built with React, TypeScript, and Tailwind CSS for managing student data with features like pagination and responsive design.

## Features

- 📱 Responsive design (mobile and desktop views)
- 📊 Data table with pagination (desktop)
- 📱 Infinite scrolling cards (mobile)
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🔄 Simulated API integration
- ⌨️ TypeScript for type safety

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vite (Build tool)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/AniketMujbaile/student-management.git
cd student-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Features in Detail

### Desktop View
- Full data table with all student information
- Pagination with 10 items per page
- Sortable columns
- Responsive layout

### Mobile View
- Card-based layout
- Infinite scrolling
- Simplified information display
- Touch-friendly interface

 

 

 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
