# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based video player application built with Vite. The project uses React 19.1.1 and is configured with modern development tooling including ESLint for code quality.

## Build System

- **Build Tool**: Vite 7.1.7
- **Plugin**: @vitejs/plugin-react for Fast Refresh with Babel

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run ESLint on the codebase
npm run lint

# Preview production build locally
npm run preview
```

## Project Structure

- **Entry Point**: `src/main.jsx` - Initializes React root with StrictMode
- **Main Component**: `src/App.jsx` - Root application component
- **HTML Template**: `index.html` - Main HTML file with root div
- **Vite Config**: `vite.config.js` - Vite configuration with React plugin
- **ESLint Config**: `eslint.config.js` - ESLint flat config format

## ESLint Configuration

The project uses ESLint 9.x with flat config format:
- Recommended JavaScript rules
- React Hooks recommended-latest rules
- React Refresh Vite rules
- Custom rule: `no-unused-vars` with exception for uppercase variables (constants)
- Ignores `dist` directory

## Technology Stack

- **Framework**: React 19.1.1 with React DOM
- **Language**: JavaScript (ES2020+) with JSX
- **Dev Server**: Vite with HMR (Hot Module Replacement)
- **Linting**: ESLint with React-specific plugins
