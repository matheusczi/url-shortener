# URL Shortener

A URL shortening service built with NestJS (backend) and Next.js (frontend). This application allows users to create shortened URLs and track visit statistics.

## Technologies Used

### Backend

- Node.js with TypeScript
- NestJS framework
- PostgreSQL database
- TypeORM for database interactions
- Class-validator for input validation
- Throttling for rate limiting and abuse prevention

### Frontend

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS for styling

## Project Structure

```text
url-shortener/
├── backend/         # NestJS backend API
├── frontend/        # Next.js frontend application
├── docker-compose.yml
└── README.md        # This file
```

## Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher) - only needed for local development without Docker
- npm or yarn - only needed for local development without Docker

## Quick Start (Using Docker)

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Create a `.env` file in the backend directory:

```bash
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=url_shortener
CLIENT_URL=http://localhost:3000
```

3. Start the application using Docker Compose:

```bash
docker-compose up
```

4. Access the application:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api/v1

## Features

- Create shortened URLs from long URLs
- Copy shortened URLs to clipboard with one click
- Track visit statistics for each shortened URL
- Validate URLs before shortening
- Rate limiting to prevent abuse
- Responsive design for mobile and desktop
- 404 page for invalid slugs

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/v1/url/shorten` - Create a shortened URL
- `GET /api/v1/url/:slug` - Redirect to the original URL
- `GET /api/v1/url/:slug/info` - Get information about a shortened URL
- `GET /api/v1/url` - Get all shortened URLs

## Development Setup

For detailed instructions on setting up the development environment for each part of the application, please refer to:

- [Backend README]()
- [Frontend README]()

## License

This project is licensed under the MIT License
