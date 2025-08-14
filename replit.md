# Overview

This is a full-stack web application built with React (TypeScript) frontend and Express.js backend. The application appears to be a job search tool that generates search URLs for different job platforms (LinkedIn, Indeed, Naukri) based on user input for job title and location. It uses modern web development practices with a component-based architecture and includes a comprehensive UI component library built on top of Radix UI primitives.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Hook Form for form state, TanStack Query for server state management
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API with Express routes organized in a modular pattern
- **Development Setup**: Hot reload with tsx for TypeScript execution

## Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Session Storage**: PostgreSQL-based session storage for user sessions

## Authentication and Authorization
- **Session-based Authentication**: Uses Express sessions with PostgreSQL storage
- **User Schema**: Basic user model with username/password authentication
- **Password Storage**: Configured for secure password handling (implementation pending)
- **API Security**: Session-based request authentication with credential inclusion

## Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared code
- **Path Aliases**: Configured import aliases for clean code organization
- **Development Mode**: Integrated development server with hot module replacement
- **Code Organization**: Monorepo structure with shared types and schemas

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: Uses @neondatabase/serverless for database connectivity

## UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Design system built on top of Radix UI components

## Development Tools
- **Vite**: Modern build tool and development server
- **Drizzle Kit**: Database migration and schema management tool
- **TanStack Query**: Data fetching and caching library for React
- **React Hook Form**: Form state management and validation
- **Zod**: TypeScript-first schema validation library

## Third-party Integrations
- **Job Search Platforms**: Generates search URLs for LinkedIn, Indeed, and Naukri job boards
- **Font Services**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Replit Integration**: Development environment integration with runtime error handling and cartographer plugin