
# Ripple Tailwindcss Vitest Template

This is a starter template for building Ripple applications with TypeScript, TailwindCSS, Vite, and Vitest. It includes everything you need for development, testing, formatting, and publishing.

---

## Getting Started

### 1. Clone or Download the Template

You can use `degit` to quickly scaffold a new project:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-tailwindcss-vitest my-ripple-app
cd my-ripple-app
```

### 2. Rename Your Project

Update the `name` field in `package.json` to your desired project name:

```json
{
  "name": "my-ripple-app"
}
```

You may also want to update the README and other metadata files.

### 3. Install Dependencies

```bash
npm install # or pnpm or yarn
```

### 4. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run serve
```

---

## Testing

This template uses [Vitest](https://vitest.dev/) for unit testing. Test files are located in the `tests/` directory and use the `.test.ripple` extension.

### Run All Tests

```bash
npm test
# or
pnpm test
```

### VS Code Extension

For a better testing experience, install the official Vitest extension for VS Code:

```vscode-extensions
vitest.explorer
```

---

## Code Formatting

Prettier is included with the Ripple plugin for consistent code formatting.

### Format All Files

```bash
npm run format
```

### Check Formatting

```bash
npm run format:check
```

Prettier is configured in `.prettierrc`:

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `prettier-plugin-ripple` for `.ripple` file formatting

---

## Patch and Publish

### Patch

To update dependencies or apply patches, use:

```bash
npx npm-check-updates -u
npm install
```

### Publish

To publish your package to npm:

1. Update the version in `package.json`.
2. Run:
    ```bash
    npm publish
    ```

---

## Directory Structure

- `src/` - Source code for your Ripple app
- `tests/` - Test files (`.test.ripple`)
- `__snapshots__/` - Test snapshots
- `index.html` - Main HTML file
- `vite.config.js` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier configuration

---

## VS Code Integration

For the best development experience, install:

- [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Ripple VS Code extension](https://marketplace.visualstudio.com/items?itemName=ripplejs.ripple-vscode-plugin)

---

## Learn More

- [Ripple Documentation](https://github.com/trueadm/ripple)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
