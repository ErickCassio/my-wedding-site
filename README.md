# Emily & Erick Wedding Site

This is a modern wedding website built with React and Vite. The site features a beautiful, responsive design with multiple sections for sharing the couple’s story, event details, a live stream, and more.

## Features

- **Home:** A full-screen landing page with a background image, overlay, and introductory text.
- **Overview:** A countdown timer to the wedding day along with an inspirational message.
- **About:** A carousel showcasing fun and meaningful moments from the couple’s story.
- **Ceremony:** Details about the wedding ceremony (location, venue, map, etc.) with decorative elements.
- **Honeymoon:** A section to contribute to the honeymoon fund with copy-to-clipboard functionality and a custom popup notification.
- **Live:** A section to access the live stream on YouTube with deep linking for mobile devices.

## Technologies Used

- **React 19.0.0**
- **Vite 6.1.0**
- **Tailwind CSS 4.0.7**
- **QRCode.react (optional for future enhancements)**
- **ESLint and Prettier** for code quality

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/wedding-site.git
cd wedding-site
npm install
```

## Development

To start the development server with hot module replacement, run:

```sh
npm run dev
```

Then open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the port specified by Vite).

## Build

To build the project for production, run:

```sh
npm run build
```

Preview the production build with:

```sh
npm run preview
```

## Customization

- **Fonts:** The site uses Google Fonts – MonteCarlo, Quicksand, and Montserrat.
- **Images:** All images are stored under `src/assets/images/`. Replace these with your custom images if needed.
- **Components:** The project is structured into separate React components located in the `src/components/` folder. You can customize each section by editing these files.

## Deployment

After building the project, you can deploy the contents of the `dist/` folder to your favorite static hosting service (e.g., Vercel, Netlify, GitHub Pages).

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests with enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy customizing your wedding site and congratulations to Emily & Erick!
