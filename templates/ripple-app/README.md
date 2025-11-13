# Ripple App Template

A complete Ripple application template with TypeScript, Vite, Tailwind CSS, ESLint, Prettier, and Vitest.

---

## Getting Started

### 1. Clone or Download the Template

You can use `degit` to quickly scaffold a new project:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-app my-ripple-app
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

The application will be available at `http://localhost:5173`

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

### Run Tests in Watch Mode

```bash
npm run test:watch
# or
pnpm test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
# or
pnpm test:coverage
```

### Interactive UI

```bash
npm run test:ui
# or
pnpm test:ui
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
# or
pnpm format
```

### Check Formatting

```bash
npm run format:check
# or
pnpm format:check
```

Prettier is configured in `.prettierrc`:

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `@ripple-ts/prettier-plugin` for `.ripple` file formatting

---

## Linting

ESLint is configured with the `@ripple-ts/eslint-plugin` for linting Ripple code.

### Check Code Quality

```bash
npm run lint
# or
pnpm lint
```

---

## Styling with Tailwind CSS

This template includes Tailwind CSS v4 configured with the Vite plugin for optimized styling. You can use Tailwind utility classes in your components:

```ripple
<div class="flex items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold">Hello World</h1>
</div>
```

Refer to the [Tailwind CSS Documentation](https://tailwindcss.com/) for more information.

---

## VS Code Extensions

For the best development experience, install these VS Code extensions:

- [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Ripple VS Code extension](https://marketplace.visualstudio.com/items?itemName=ripple-ts.vscode-plugin)
- [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

---

## Learn More

- [Ripple Documentation](https://github.com/Ripple-TS/ripple)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
