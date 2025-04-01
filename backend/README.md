# URL Shortener Backend

The backend service for the URL Shortener application, built with NestJS, TypeScript, and PostgreSQL.

## Technologies

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications
- **TypeScript**: For type-safe code and better developer experience
- **PostgreSQL**: Relational database for storing URL data
- **TypeORM**: ORM for database interactions
- **Class Validator**: For input validation
- **Docker**: For containerization and easy deployment

## Local Development Setup

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- PostgreSQL (if running without Docker)

### Instalation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root of the backend directory:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=url_shortener
CLIENT_URL=http://localhost:3000
```

3. Start the development server:

```bash
npm run start:dev
```

The API will be available at http://localhost:3001/api/v1

### Database Migrations

To run migrations:

```bash
npm run migration:run
```

To generate a new migration:

```bash
npm run migration:generate -- -n MigrationName
```

## API Endpoints

### URL Shortening

- `POST /api/v1/url/shorten`
  - Request body: `{ "originalUrl": "https://example.com/very/long/url" }`
  - Response: `{ "id": "uuid", "slug": "abc123", "originalUrl": "https://example.com/very/long/url", "visits": 0, "createdAt": "timestamp" }`

### URL Redirection

- `GET /api/v1/url/:slug`
  - Redirects to the original URL
  - Increments the visit counter

### URL Information

- `GET /api/v1/url/:slug/info`
  - Returns information about the URL without incrementing the visit counter
  - Response: `{ "id": "uuid", "slug": "abc123", "originalUrl": "https://example.com/very/long/url", "visits": 5, "createdAt": "timestamp" }`

### List All URLs

- `GET /api/v1/url`
  - Returns a list of all shortened URLs
  - Response: `[{ "id": "uuid", "slug": "abc123", "originalUrl": "https://example.com/very/long/url", "visits": 5, "createdAt": "timestamp" }, ...]`

## Features Implemented

- URL shortening with unique slugs
- URL validation
- Visit tracking
- Rate limiting to prevent abuse
- RESTful API design
- Error handling and validation

## Docker

The backend can be run in a Docker container. See the main README for instructions on running the entire application with Docker Compose.

To build and run only the backend container:

```bash
docker build -t url-shortener-backend .
docker run -p 3001:3001 --env-file .env url-shortener-backend
```
