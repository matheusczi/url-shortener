URL Shortener Frontend

The frontend application for the URL Shortener service, built with Next.js, TypeScript, and Tailwind CSS.

## Technologies

- **Next.js**: React framework with App Router for server and client components
- **React**: JavaScript library for building user interfaces
- **TypeScript**: For type-safe code and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Docker**: For containerization and easy deployment

## Local Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Instalation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root of the frontend directory:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Features

- Create shortened URLs from long URLs
- Copy shortened URLs to clipboard with one click
- View statistics for each shortened URL
- Responsive design for mobile and desktop
- Error handling and validation
- Loading states for better user experience
- 404 page for invalid slugs

## Project Structure

```text
frontend/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── [slug]/        # Dynamic route for URL redirection
│   │   ├── [404]/page.tsx # Custom 404 page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable UI components
│   ├── lib/               # Utility functions and API client
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── next.config.js         # Next.js configuration
```

## Building for Production

```bash
npm run build
npm start
```

## Docker

The frontend can be run in a Docker container. See the main README for instructions on running the entire application with Docker Compose.

To build and run only the frontend container:

```bash
docker build -t url-shortener-frontend .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1 url-shortener-frontend
```
