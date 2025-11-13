
# Ripple TailwindCSS + Vitest Template

Starter template for building Ripple applications with TypeScript, Tailwind CSS, Vite, and Vitest. Includes:

- Ripple components with TypeScript
- Tailwind CSS v4 with Vite plugin
- Unit testing with Vitest
- Code formatting with Prettier and ESLint
- Hot module reloading (HMR) for fast development

---

## Getting Started

### 1. Clone the template

Scaffold a new project with `degit`:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-tailwindcss-vitest my-ripple-app
cd my-ripple-app
```

### 2. Rename your project

Update the `name` field in `package.json` to your desired project name:

```json
{
  "name": "my-ripple-app"
}
```

### 3. Install dependencies

```bash
pnpm install
# or npm install / yarn install
```

### 4. Start development server

```bash
pnpm dev
# or npm run dev
```

The application will be available at `http://localhost:5173`.

### 5. Build for production

```bash
pnpm build
```

### 6. Preview production build

```bash
pnpm serve
```

---

## Testing

This template uses [Vitest](https://vitest.dev/) for unit testing. Test files are located in the `tests/` directory and use the `.test.ripple` extension.

Run tests:

```bash
pnpm test
```

Watch mode (development):

```bash
pnpm test:watch
```

Generate coverage:

```bash
pnpm test:coverage
```

Interactive UI:

```bash
pnpm test:ui
```

For an enhanced VS Code experience, install the Vitest extension (`vitest.explorer`).

---

## Code Formatting & Linting

Prettier and ESLint are configured for consistent code quality.

Format or check formatting:

```bash
pnpm format
pnpm format:check
```

Run ESLint:

```bash
pnpm lint
```

Prettier configuration (in `.prettierrc`):

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `@ripple-ts/prettier-plugin` for `.ripple` file formatting

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

## Project Structure

```
src/
  ├── App.ripple      # Main application component
  ├── index.ts        # Application entry point
  ├── style.css       # Global styles
  └── assets/         # Static assets

tests/
  ├── app.test.ripple # App component tests
  ├── basic.test.ripple
  └── __snapshots__/  # Test snapshots
```

---

## VS Code Extensions

For the best development experience, install:

- Prettier (`esbenp.prettier-vscode`)
- Ripple plugin for VS Code (`ripple-ts.vscode-plugin`)
- Vitest (`vitest.explorer`)

---

## Learn More

- [Ripple Documentation](https://github.com/Ripple-TS/ripple)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
