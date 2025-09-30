# Information Security with HelmetJS - FreeCodeCamp Boilerplate

## Overview

This is a learning boilerplate project for the FreeCodeCamp Information Security curriculum, specifically focused on implementing security best practices using HelmetJS middleware with Express.js. The project serves as a hands-on practice environment for students to learn about web application security headers and protective middleware configurations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture

**Framework Choice: Express.js**
- **Problem**: Need a lightweight, flexible web framework for teaching security concepts
- **Solution**: Express.js v4.14.0 provides minimal boilerplate while allowing middleware-based security demonstrations
- **Rationale**: Express's middleware pattern makes it ideal for teaching how security layers (like Helmet) integrate into applications

**Application Structure**
- `server.js`: Main server bootstrap file (DO NOT EDIT - used for FreeCodeCamp verification)
- `myApp.js`: Student workspace for implementing security middleware
- Separation ensures verification process remains intact while students work

**Security Implementation: HelmetJS**
- **Problem**: Web applications need multiple HTTP security headers to protect against common vulnerabilities
- **Solution**: Helmet v3.21.3 provides a suite of middleware functions that set security-related HTTP headers
- **Design Pattern**: Students add Helmet middleware to the Express app in `myApp.js` to learn about:
  - XSS protection
  - Content Security Policy
  - HSTS (HTTP Strict Transport Security)
  - Frame options (clickjacking prevention)
  - Other security headers

### Frontend Architecture

**Simple Static Serving**
- Minimal HTML/CSS interface (`views/index.html`, `public/style.css`)
- Purpose is educational display, not complex UI
- Static files served to demonstrate secure header application

### Verification System

**Custom Verification Middleware** (in `server.js`)
- `/app-info` endpoint inspects middleware stack and response headers
- `/file/*` endpoint for FreeCodeCamp to verify implementation
- CORS headers configured for cross-origin verification requests
- Filters out Express defaults to verify only student-added middleware

**Design Constraints**
- `server.js` must remain unmodified for automated testing
- `x-powered-by` header explicitly disabled for security demonstration
- Middleware introspection via Express's `_router.stack` property

## External Dependencies

### Core Dependencies

**Express (^4.14.0)**
- Web application framework
- Provides routing, middleware, and HTTP utilities
- Serves as the foundation for security middleware integration

**Helmet (3.21.3)**
- Security middleware collection
- Sets various HTTP headers to protect against common web vulnerabilities
- Specific version locked for curriculum consistency

### FreeCodeCamp Integration

**Verification System**
- External verification service reads `/app-info` and `/file/*` endpoints
- Validates proper Helmet middleware configuration
- Checks for correct security headers in responses

**Access Control**
- CORS configured to allow FreeCodeCamp's domain to verify solutions
- `.env` file access explicitly blocked for security

### Development Environment

**Node.js Runtime**
- Requires Node.js environment
- Package management via npm
- Entry point: `npm start` runs `myApp.js`