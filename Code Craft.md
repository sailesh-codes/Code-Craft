# Code Craft - Professional Web Development Portfolio

## Overview

Code Craft is a modern, professional portfolio website for a freelancing web development company. The application is built as a single-page application (SPA) showcasing the company's services, portfolio, team, and contact information. It features a dark theme with purple and blue accents, smooth animations, and responsive design optimized for all device types.

The project follows a full-stack architecture with a React frontend using modern UI components, an Express backend with TypeScript, and is designed to handle future database integration for dynamic content management and client interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:

- **UI Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Navigation**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Component Structure**: Modular components organized by feature (Hero, Services, Portfolio, About, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: CSS animations and transitions for smooth user interactions

### Backend Architecture
The backend uses Express.js with TypeScript in a minimal API structure:

- **Server Framework**: Express.js with TypeScript for type-safe server development
- **Development Setup**: Vite for development server with hot module replacement
- **API Structure**: RESTful API endpoints prefixed with `/api`
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer ready for database integration

### Build System and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Development**: Hot reload for both frontend and backend during development

### Database Schema Design
The application includes a prepared database schema using Drizzle ORM:

- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **User Management**: Basic user table structure with authentication fields
- **Migration Support**: Drizzle migrations configured for schema versioning

### Styling and Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Color Scheme**: Dark theme with purple (#8b5cf6), blue (#3b82f6), and neutral colors
- **Typography**: Inter font family for modern, readable text
- **Component Library**: shadcn/ui components for consistent UI patterns
- **Responsive Breakpoints**: Mobile-first responsive design

### Content Management
The application is structured to support both static and dynamic content:

- **Static Sections**: Hero, Services, Portfolio showcase, Team information
- **Interactive Elements**: Contact forms, smooth scrolling navigation, loading screens
- **Asset Management**: Support for attached assets and external images
- **Form Handling**: Contact form with validation and toast notifications

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database adapter for serverless environments
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **express**: Node.js web application framework
- **react**: Frontend UI library
- **@tanstack/react-query**: Server state management library

### UI and Styling Libraries
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Additional Utilities
- **wouter**: Minimalist routing library for React
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component for React
