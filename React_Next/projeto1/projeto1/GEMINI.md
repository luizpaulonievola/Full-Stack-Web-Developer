This is a study project focused on current market standards, clean code, and best practices.

This project is intended to be used with the Gemini CLI.

MCP tools are available.

## Project Overview

This is a Next.js project, likely for web development. It's a study project, so the focus is on learning and applying best practices.

## Technologies

*   **Next.js:** A React framework for building full-stack web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework.
*   **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Scripts

The following scripts are available in `package.json`:

*   `dev`: Starts the development server with Turbopack on port 5000.
*   `build`: Builds the application for production.
*   `start`: Starts the production server.
*   `lint`: Lints the codebase using ESLint.

## Project Structure

*   `src/pages`: Contains the pages of the application.
*   `src/styles`: Contains global styles.
*   `public`: Contains static assets.
*   `next.config.ts`: Next.js configuration file.
*   `tsconfig.json`: TypeScript configuration file.

## Configuration

*   **`next.config.ts`**:
    *   `reactStrictMode`: Enabled.
*   **`tsconfig.json`**:
    *   `target`: `ES2017`
    *   `paths`: `{"@/*": ["./src/*"]}`