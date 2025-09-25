
# Ripple Lib Workspace Template

This is a starter template for building libraries and applications with Ripple, TypeScript, and Vite. It includes everything you need for development, testing, formatting, and publishing.

---

## Getting Started

### 1. Clone or Download the Template

You can use `degit` to quickly scaffold a new project:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-lib my-ripple-lib
cd my-ripple-lib
```


### 2. Rename Your Project (Important for Libraries)

To fully rename your library project, update the following:

1. **Root `package.json`**: Change the `name` field to your new project name.
2. **Library Package**: Go to `packages/ripple-lib/package.json` and update the `name` field (e.g., `"name": "my-ripple-lib"`).
3. **Apps Folder**: If you want to rename the test app, update `apps/ripple-app/package.json` and any references to the app name.
4. **Workspace Config**: If you rename folders, update `pnpm-workspace.yaml` to match your new folder names.
5. **Other Metadata**: Update the README, documentation, and any other files referencing the old name.

**Tip:** Use global search in your editor to find all instances of the old name and replace them.

---

### 3. Install Dependencies

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

- `packages/` - Contains your Ripple library code (e.g., `ripple-lib`)
- `apps/` - Contains example/test apps that use your library (e.g., `ripple-app`)
- `pnpm-workspace.yaml` - Workspace configuration for monorepo management
- `README.md` - Project documentation

### Library Package
- `packages/ripple-lib/src/` - Source code for your library
- `packages/ripple-lib/tests/` - Unit tests for your library

### Example/Test App
- `apps/ripple-app/` - Example app to test and demo your library

---

## How to Use the Apps Folder to Test Your Library

The `apps/` folder contains one or more example applications that use your library directly from the workspace. This is useful for:

- Manual testing and development of your library in a real app
- Creating demo apps for documentation or sharing

### Typical Workflow
1. Make changes to your library in `packages/ripple-lib/src/`.
2. Run or develop the app in `apps/ripple-app/` using:
  ```bash
  cd apps/ripple-app
  npm run dev
  # or pnpm dev
  ```
3. The app will use the local version of your library (no need to publish to npm).
4. You can import your library in the app code as:
  ```js
  import { ... } from 'ripple-lib';
  ```
5. When ready, build and publish your library from the `packages/ripple-lib` folder.

---

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
