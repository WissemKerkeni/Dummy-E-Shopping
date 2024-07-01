# Dummy-E-Shopping

This project is a frontend application developed using Angular 17. It provides a user interface for interacting with the backend API.

## Features

- **Cart Handling:** Offers functionalities to add, update, delete, and view products in the cart.
- **Product Consultation:** Allows users to view detailed information about each product.
- **Product Reviews:** Enables users to rate and review products.

## Technologies Used

- Angular 17
- Material Design
- TypeScript
- HTML
- CSS (SASS/SCSS)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:4200` to view the application.

## Folder Structure

The project follows a typical Angular folder structure:


```
├── app
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core
│   │   ├── application
│   │   │   ├── dtos
│   │   │   │   ├── cart.dto.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── product.dto.ts
│   │   │   │   └── review.dto.ts
│   │   │   └── services
│   │   │       ├── cart.service.ts
│   │   │       ├── index.ts
│   │   │       └── product.service.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   ├── cart.entity.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── product.entity.ts
│   │   │   │   └── review.entity.ts
│   │   │   └── use-cases
│   │   │       ├── add-to-cart-usecase.service.ts
│   │   │       ├── get-cart-use-case.service.ts
│   │   │       ├── get-product-details-usecase.service.ts
│   │   │       ├── get-products-use-case.service.ts
│   │   │       ├── index.ts
│   │   │       └── remove-from-cart-usecase.service.ts
│   │   ├── infrastructure
│   │   │   └── repositories
│   │   │       ├── cart.repository.ts
│   │   │       ├── index.ts
│   │   │       └── product.repository.ts
│   │   └── store
│   │       ├── actions
│   │       │   ├── cart.actions.ts
│   │       │   ├── index.ts
│   │       │   └── product.actions.ts
│   │       ├── effects
│   │       │   ├── cart.effects.ts
│   │       │   ├── index.ts
│   │       │   └── product.effects.ts
│   │       ├── reducers
│   │       │   ├── cart.reducer.ts
│   │       │   ├── index.ts
│   │       │   └── product.reducer.ts
│   │       └── selectors
│   │           ├── cart.selectors.ts
│   │           ├── index.ts
│   │           └── product.selectors.ts
│   ├── presentation
│   │   ├── cart
│   │   │   └── components
│   │   │       └── cart
│   │   │           ├── cart.component.html
│   │   │           ├── cart.component.scss
│   │   │           ├── cart.component.spec.ts
│   │   │           └── cart.component.ts
│   │   ├── product-details
│   │   │   └── components
│   │   │       └── product-details
│   │   │           ├── product-details.component.html
│   │   │           ├── product-details.component.scss
│   │   │           ├── product-details.component.spec.ts
│   │   │           └── product-details.component.ts
│   │   └── product-list
│   │       └── components
│   │           ├── product-card
│   │           │   ├── product-card.component.html
│   │           │   ├── product-card.component.scss
│   │           │   ├── product-card.component.spec.ts
│   │           │   └── product-card.component.ts
│   │           └── product-list
│   │               ├── product-list.component.html
│   │               ├── product-list.component.scss
│   │               ├── product-list.component.spec.ts
│   │               └── product-list.component.ts
│   └── shared
│       └── components
│           ├── custom-chip
│           │   ├── custom-chip.component.html
│           │   ├── custom-chip.component.scss
│           │   ├── custom-chip.component.spec.ts
│           │   └── custom-chip.component.ts
│           ├── image
│           │   ├── image.component.html
│           │   ├── image.component.scss
│           │   ├── image.component.spec.ts
│           │   └── image.component.ts
│           ├── index.ts
│           └── star-rating
│               ├── star-rating.component.html
│               ├── star-rating.component.scss
│               ├── star-rating.component.spec.ts
│               └── star-rating.component.ts
├── assets
│   ├── .gitkeep
│   ├── icons
│   │   └── rate-icon.svg
│   └── images
│       ├── logo.png
│       └── user.png
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── logo.ico
├── logo.png
├── main.ts
└── styles.scss
```

