# Ripple TailwindCSS Template

A minimal Ripple application template with TypeScript, Tailwind CSS, and Vite.

---

## Getting Started

### 1. Clone the template

Scaffold a new project with `degit`:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-tailwindcss my-ripple-app
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

## Code Formatting

Prettier is included with the Ripple plugin for consistent code formatting.

Format or check formatting:

```bash
pnpm format
pnpm format:check
```

Prettier is configured in `.prettierrc`:

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `@ripple-ts/prettier-plugin` for `.ripple` file formatting

---

## Styling with Tailwind CSS

This template includes Tailwind CSS configured with Vite for optimized styling. You can use Tailwind utility classes in your components:

```ripple
<div class="flex items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold">Hello World</h1>
</div>
```

Refer to the [Tailwind CSS Documentation](https://tailwindcss.com/) for more information.

---

## VS Code Extensions

For the best development experience, install:

- Prettier (`esbenp.prettier-vscode`)
- Ripple plugin for VS Code (`ripple-ts.vscode-plugin`)

---

## Learn More

- [Ripple Documentation](https://github.com/Ripple-TS/ripple)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
