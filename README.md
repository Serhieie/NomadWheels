# Camper Rental Application

## Overview

This application is designed for a company offering camper rental services in Ukraine. It
includes three main pages: a home page, a catalog page, and a favorites page.

## Features

### Home Page

- General description of the services provided by the company.

### Catalog Page

- Displays a catalog of campers.
- Users can filter campers by location, equipment, and type.
- Supports "Load more" functionality to display more ads.

### Favorites Page

- Displays ads added to favorites.
- Favorite ads persist on page reload.

### Advertisement Cards

- Clicking the "heart" button adds/removes ads from favorites and changes the button
  color.

### Modal Window

- Displays detailed information about the camper.
- Contains a booking form with validation.
- Modal can be closed via the "X" button, backdrop click, or Esc key.

### Backend

- Uses [mockapi.io](https://mockapi.io/) for the adverts resource.
- Supports pagination and filtering.

## Technical Requirements

- **State Management**: Redux
- **HTTP Requests**: Axios
- **Routing**: React Router
- **Build Tool**: Vite/Parcel or similar
- **Deployment**: GitHub Pages or Netlify

## Installation

1. Clone the repository: git clone https://github.com/yourusername/NomadWheels.git
2. Navigate to the project directory: cd camper-rental-app
3. Install dependencies: npm install
4. Start the development server: npm start

## Deployment

1. Build the project: npm run build
2. Deploy the `build` folder to GitHub Pages or Netlify.

## License

This project is licensed under the MIT License.
