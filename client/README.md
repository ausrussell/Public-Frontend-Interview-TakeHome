# Manta Cares – Public Frontend Interview TakeHome

A small Next.js + React/TypeScript project using Material-UI (MUI) for UI components and theming.

## Approach
- Consideration was given to the fact that this interface is for users accessing information that is very personal, and so I made use of colors and gentle animations intended to be more warm and welcoming than interfaces for work related or mundane tasks
- a contemporary Glassmorphism design approach suggests cleanliness and transparency and is an increasingly popular approach for patient facing health and wellness applications
- see https://dribbble.com/shots/25443650-MindBridge-Mental-Health-App-UI-Design for another example

## Features
- **Modern UI**: Built with MUI, custom theme, and responsive design.
- **Symptoms List**: Interactive, animated symptom cards with expand/collapse and detail view. See https://m2.material.io/components/cards#behavior for the card behavior in line with Material UI principles.
- **Routing**: Uses Next.js App Router for fast navigation.
- **Custom Theming**: Primary and secondary colors, Roboto font, and CSS variable support for theme colors derived from Manta Cares website
- **Component Styling**: Uses MUI's `styled` utility and CSS Modules for clean, maintainable styles.

## Key Design & Technical Decisions
- **Next.js App Router**: Enables file-based routing and server/client component separation.
- **Material-UI (MUI)**: Provides accessible, themeable, and composable UI components.
- **Custom Theme**: All colors and typography are defined in `src/styles/theme.ts` and injected as CSS variables for use in both TSX and CSS.
- **Component Styling**: Dynamic styles are handled with MUI's `styled` and `sx` props; static/layout styles use CSS Modules for separation of concerns.

## How to Run

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Public-Frontend-Interview-TakeHome/client
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.





## Folder Structure
- `src/app/` – Next.js app directory (routing, pages, components)
- `src/app/symptoms` – handles the listing of symptoms and dynamic loading of details with components and types contained for easy extension
- `src/styles/` – Theme, styled components, and CSS modules
- `public/` – Static assets


