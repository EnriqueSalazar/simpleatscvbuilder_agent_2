# simpleatscvbuilder_agent_2

## Project Setup

This project is a monorepo containing both the client and server code. The client is built with React, Vite, and TypeScript, while the server is built with Node and ExpressJS. The project also includes nodemon for hot reloading during development.

## Prerequisites

- Node.js (>= 14.x)
- pnpm (>= 6.x)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/EnriqueSalazar/simpleatscvbuilder_agent_2.git
cd simpleatscvbuilder_agent_2
```

2. Install dependencies:

```sh
pnpm install
```

## Client Setup

The client-side code is located in the `client` directory.

### Development

To start the client in development mode with hot reloading:

```sh
cd client
pnpm run dev
```

### Build

To build the client for production:

```sh
cd client
pnpm run build
```

## Server Setup

The server-side code is located in the `server` directory.

### Development

To start the server in development mode with hot reloading:

```sh
cd server
pnpm run dev
```

### Production

To start the server in production mode:

```sh
cd server
pnpm run start
```

## Running the Project

To run both the client and server in development mode:

```sh
pnpm run dev
```

To run both the client and server in production mode:

```sh
pnpm run start
```
