# Bizk Dev - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. This project showcases professional experience, education, entrepreneurship, and projects.

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **UI Library**: PrimeReact 10.9.7
- **Styling**: Tailwind CSS 4.1.17
- **Deployment**: Cloudflare Pages (via Wrangler)

## 📁 Project Structure

```
bizk-dev/
├── src/
│   ├── components/
│   │   ├── Entrepeneurship/      # Entrepreneurship section components
│   │   └── Work/
│   │       ├── Panel.tsx         # Main work experience panel
│   │       └── WorkExperience.tsx # Reusable work experience component
│   ├── styles/
│   │   └── globals.css           # Global Tailwind CSS imports
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Application-specific styles
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Base styles
├── public/
│   ├── pageIcon.svg              # Site favicon
│   └── vite.svg                  # Vite logo
├── dist/                         # Build output directory
├── index.html                    # HTML entry point
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── wrangler.jsonc                # Cloudflare Pages configuration
└── package.json                  # Project dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Build and deploy to Cloudflare Pages (production)
- `npm run deploy:preview` - Build and deploy to Cloudflare Pages (preview environment)

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Architecture

### Component Structure

The application follows a component-based architecture:

- **App.tsx**: Main application component that manages routing and view state
- **WorkPanel**: Displays professional experience, education, and skills
- **WorkExperience**: Reusable component for displaying individual work experiences

### View System

The application uses a simple state-based view system with the following sections:

- **About**: Professional overview and work experience
- **Entrepreneurship**: Side projects and business ventures
- **Projects**: Technical projects and open source contributions
- **Blog**: Blog posts and articles (coming soon)

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PrimeReact Themes**: Pre-built component themes (currently using `lara-dark-blue`)
- **Custom CSS**: Component-specific styles in `App.css`

## 📦 Dependencies

### Production Dependencies

- `react` & `react-dom`: React library for building user interfaces
- `primereact`: Comprehensive UI component library
- `@cloudflare/vite-plugin`: Cloudflare integration for Vite

### Development Dependencies

- `vite`: Next-generation frontend build tool
- `typescript`: Type-safe JavaScript
- `@vitejs/plugin-react`: React plugin for Vite
- `tailwindcss`: Utility-first CSS framework
- `eslint`: Code linting and quality checks
- `wrangler`: Cloudflare Workers and Pages CLI

## 🚢 Deployment

The project is configured for deployment to Cloudflare Pages using Wrangler.

### Production Deployment

```bash
npm run deploy
```

### Preview Deployment

```bash
npm run deploy:preview
```

### Configuration

Deployment settings are configured in `wrangler.jsonc`. Ensure you have:

1. Cloudflare account set up
2. Wrangler CLI authenticated (`wrangler login`)
3. Project name configured in `wrangler.jsonc`

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: PrimeReact components with dark theme
- **Type Safety**: Full TypeScript support
- **Fast Development**: Vite for instant HMR
- **SEO Ready**: Semantic HTML structure
- **Accessible**: ARIA-compliant components from PrimeReact

## 📝 Content Sections

### Work Experience

Displays professional work history including:
- Company name and role
- Employment dates
- Technologies used
- Key achievements and responsibilities

### Education

Shows academic background:
- Degree information
- Institution details
- Graduation dates
- Specializations

### Entrepreneurship

Highlights side projects and business ventures:
- Company information
- Technologies and stack
- Key achievements

### Skills

Technical skills and competencies (to be implemented)

## 🔧 Configuration

### TypeScript

The project uses TypeScript with strict type checking. Configuration files:

- `tsconfig.json`: Main TypeScript configuration
- `tsconfig.app.json`: Application-specific TypeScript settings
- `tsconfig.node.json`: Node.js-specific TypeScript settings

### ESLint

Code quality is enforced through ESLint with React-specific rules. Configuration in `eslint.config.js`.

### Vite

Build configuration in `vite.config.ts` includes:
- React plugin for JSX/TSX support
- Cloudflare plugin for deployment integration

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Carlos Santiago Yanzon**

- LinkedIn: [Carlos Santiago Yanzon](https://www.linkedin.com/in/carlos-santiago-yanzon/)
- Location: Argentina / United States

## 🔄 Version History

- **0.0.0** - Initial project setup with React, TypeScript, and Vite

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vite.dev/)
- [PrimeReact Documentation](https://primereact.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
