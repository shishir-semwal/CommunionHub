# CommunionHub

![CommunionHub Logo](/src/assets/LogoFooter.png)

## About The Project

CommunionHub is a vibrant web platform designed to connect diverse faiths and communities through events and shared experiences. The platform enables users to discover, create, and participate in various community events across different categories including religious, social, and charity initiatives.

## Features

- **Event Discovery**: Browse upcoming events from different faith communities and interest groups
- **Category Filtering**: Filter events by category (Religious, Social, Charity)
- **Interactive UI**: Responsive design with interactive elements and animations
- **Event Creation**: Create and share your own community events
- **Mobile Responsive**: Optimized for both desktop and mobile viewing

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - For navigation and routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/shishir-semwal/CommunionHub.git
   ```

2. Navigate to the project directory
   ```sh
   cd CommunionHub
   ```

3. Install dependencies
   ```sh
   npm install
   # or
   yarn
   ```

4. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Usage

### Exploring Events
- Navigate to the "Events" page to browse all community events
- Use the filter buttons to sort events by category

### Creating an Event
1. Go to the Events page
2. Click "Add Event" button
3. Fill in the event details including name, location, category, date, and description
4. Submit the form to add your event to the list

## Project Structure

```
CommunionHub/
├── public/
├── src/
│   ├── assets/        # Images and static assets
│   ├── components/    # Reusable UI components
│   │   ├── Card.jsx   # Event card component
│   │   ├── CreateEvent.jsx
│   │   ├── EventHero.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Modal.jsx
│   │   └── Navbar.jsx
│   ├── routes/        # Route components
│   │   └── App.jsx    # Main app component with routing
│   ├── About.jsx      # About page
│   ├── Event.jsx      # Events page
│   ├── EventsList.json # Sample event data
│   ├── Homepage.jsx   # Main landing page
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .gitignore
├── index.html         # HTML template
├── package.json
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Shishir Semwal - [GitHub](https://github.com/shishir-semwal)

Project Link: [https://github.com/shishir-semwal/CommunionHub](https://github.com/shishir-semwal/CommunionHub)

## Acknowledgements

- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) - Images
- [Google Fonts](https://fonts.google.com/) - Poppins font
