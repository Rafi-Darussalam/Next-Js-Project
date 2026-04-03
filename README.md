# Lambo - Lamborghini Fan Web

A modern, visually appealing Next.js application built for Lamborghini enthusiasts. This project features engaging animations, responsive layouts, and a sleek dark-themed design to showcase the Lamborghini fleet and lifestyle.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Frontend Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Compiler**: Babel React Compiler plugin enabled

## ✨ Core Features

- Modern UI/UX with smooth transitions and animations.
- Dedicated **Fleet** section to explore Lamborghini models.
- Responsive design tailored for all device sizes (mobile, tablet, desktop).
- Modular architecture with reusable components.
- Seamless navigation using Next.js App Router and Route Groups (`(with navbar)`).

## 📂 Project Structure

```text
src/
├── app/
│   ├── (with navbar)/      # Route group ensuring shared navigation UI
│   │   ├── fleet/          # Fleet exploration page
│   │   ├── layout.tsx
│   │   └── page.tsx        # Homepage
│   ├── globals.css         # Global Tailwind v4 styles
│   ├── layout.tsx          # Root generic layout
│   └── not-found.tsx       # Custom 404 error page
└── Components/
    ├── Fleet/              # Fleet-related UI components
    ├── Footer/             # Footer component
    ├── Home/               # Homepage unique sections (Hero, Cards, etc.)
    └── Navbar/             # Top Navigation bar component
```

## 🛠️ Getting Started

First, ensure you have Node.js and npm (or pnpm/yarn) installed on your machine.

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code formatting and analysis.

## 🎨 Styling

This project uses the latest version of Tailwind CSS (v4) with CSS-based configuration loaded via Vite/PostCSS integrations. Global styles are managed within `src/app/globals.css`.

## 📄 License

This project is open-sourced under the MIT License.
