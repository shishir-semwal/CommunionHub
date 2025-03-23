# Communion

Communion is a web platform designed to connect people across different faiths and interests. The platform allows users to discover, browse, and create community events spanning religious, social, and charitable categories.

## 🌟 Features

- **Event Discovery**: Browse upcoming events filtered by category (Religious, Social, Charity)
- **Event Creation**: Add your own community events to share with others
- **Responsive Design**: Built with a mobile-first approach using Tailwind CSS and DaisyUI
- **Community Focus**: Created to bridge gaps between different communities and interests

## 🛠️ Tech Stack

- **React** (v18.3.1): Frontend library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **ESLint**: Code quality and style enforcement

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/communion.git
cd communion
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
communion/
├── public/             # Static files
│   └── EventsList.json # Event data
├── src/                # Source files
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable components
│   │   ├── Card.jsx       # Event card component
│   │   ├── CreateEvent.jsx # Event creation form
│   │   ├── EventHero.jsx  # Hero section for events page
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section for homepage
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Religious.jsx  # Religious events component
│   ├── App.jsx        # Main application component
│   ├── Event.jsx      # Events page
│   ├── Homepage.jsx   # Home page
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .eslintrc.json     # ESLint configuration
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## 🧩 Components

- **Navbar**: Navigation bar with dropdown menu for events
- **Hero**: Landing page hero section with images and call-to-action
- **EventHero**: Event page hero with category filtering options
- **Card**: Reusable component for displaying individual events
- **CreateEvent**: Form component for adding new events
- **Religious/Social/Charity**: Category-specific event listing components
- **Footer**: Site-wide footer with navigation and social links

## 📝 Event Data Structure

Events are stored in `EventsList.json` with the following structure:

```json
{
  "id": 1,
  "title": "Event Title",
  "desc": "Event description",
  "location": "Event location",
  "category": "Religious/Social/Charity",
  "date": "Event date",
  "image": "URL to event image"
}
```

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build locally

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
