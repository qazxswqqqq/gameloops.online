# GameLoops - Online Gaming Platform

A modern, responsive web application for playing free online games. Built with React, Tailwind CSS, and Vite.

## 🎮 Features

### Core Features
- **Game Library**: Browse through a curated collection of free online games
- **Game Categories**: Filter games by category (Action, Strategy, Puzzle, Racing, etc.)
- **Search Functionality**: Find games by title or description
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Game Details**: Detailed information about each game including description and tags
- **Direct Game Play**: Play games directly in the browser with embedded iframes

### User Experience
- **Modern UI**: Clean, dark theme with cyan accents
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Mobile Menu**: Collapsible navigation menu for mobile devices
- **Breadcrumb Navigation**: Easy navigation between pages

### Technical Features
- **React 19**: Latest React features and hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Responsive Grid**: Adaptive game grid layout
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gameloops-online
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
gameloops-online/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   ├── GameCard.jsx   # Individual game card
│   │   └── GameGrid.jsx   # Game grid layout
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx   # Main landing page
│   │   ├── GameDetailPage.jsx # Game details page
│   │   └── GamePlayPage.jsx   # Game play page
│   ├── data/              # Static data
│   │   └── games.js       # Game data array
│   ├── assets/            # Images and other assets
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## 🎯 Game Categories

The platform includes games from various categories:

- **Action**: Fast-paced games requiring quick reflexes
- **Strategy**: Games requiring planning and tactical thinking
- **Puzzle**: Brain-teasing games and logic challenges
- **Racing**: Speed and driving games
- **Arcade**: Classic arcade-style games
- **Classic**: Timeless games that everyone knows
- **Mobile**: Games optimized for mobile play
- **Free**: All games are completely free to play

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) - Used for accents and highlights
- **Background**: Dark gray (#0f172a) - Main background
- **Surface**: Gray (#1e293b) - Cards and components
- **Text**: White and gray variations for readability

### Typography
- **Font Family**: System fonts with fallbacks
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gradient backgrounds with hover states
- **Navigation**: Clean, minimal design with smooth transitions

## 🔧 Customization
