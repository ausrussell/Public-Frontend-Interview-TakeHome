# Manta Cares – Public Frontend Interview TakeHome

A small Next.js + React/TypeScript project using Material-UI (MUI) for UI components and theming.

## UX Approach
- Consideration was given to the fact that this interface is for users accessing information that is very personal, and so I made use of colors and gentle animations intended to be more warm and welcoming than interfaces for work related or mundane tasks
- tone of voice
- a contemporary Glassmorphism design approach suggests cleanliness and transparency and is an increasingly popular approach for patient facing health and wellness applications
- see https://dribbble.com/shots/25443650-MindBridge-Mental-Health-App-UI-Design for another example

## Technical Approach
- **Next.js App Router**: Enables file-based routing and server/client component separation.
- **Material-UI (MUI)**: Provides accessible, themeable, and composable UI components.
- **Custom Theme**: All colors and typography are defined in `src/styles/theme.ts` and injected as CSS variables for use in both TSX and CSS.
- **Component Styling**: Dynamic styles are handled with MUI's `styled` and `sx` props; static/layout styles use CSS Modules for separation of concerns.

## Features
- **Modern UI**: custom theme easy to extend to future components and responsive design.
- **Symptoms List**: Interactive, animated symptom cards with expand/collapse and detail view. See https://m2.material.io/components/cards#behavior for the card behavior in line with Material UI principles.
- **Routing**: Uses Next.js App Router for fast navigation.
- **Custom Theming**: Primary and secondary colors, Roboto font, and CSS variable support for theme colors derived from Manta Cares website
- **Component Styling**: Uses MUI's `styled` utility and CSS Modules for clean, maintainable styles.

## How to Run

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ausrussell/Public-Frontend-Interview-TakeHome.git>
   cd Public-Frontend-Interview-TakeHome/client
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the API server**
   ```bash
   cd ../server
   npm install
   npm run dev
   ```
   The API server will be available at http://localhost:3030
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.
   There will be a splash page to welcome you and a single button to take you to the symptoms page


## Folder Structure
- `src/app/` – Next.js app directory for routing, pages, components
- `src/app/symptoms` – handles the symptoms page - listing of symptoms and dynamic loading of details. Components are contained in a directory and types in their own file for maintainability
- `src/styles/` – Theme, styled components, and CSS modules
- `public/` – Static assets




## UI Requirements fulfilled

***Symptom List***
* A page that lists all of the symptoms
* Clicking one of items on the list should bring the user to the symptom detail view for that symptom.

***Symptom Detail***
* On the symptom detail page, the user can specify the severity they are experiencing: `mild`, `moderate` or `severe`
* Once the user has chosen a severity, the page should display all the interventions associated with that symptom that are 
applicable to the selected severity level.
* Some of the interventions are marked with "S.O.S." indicating that if the user is experiencing a symptom/severity like
this, they should seek immediate attention. Please call this out visually to the user in those cases.

