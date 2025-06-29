## E-commerce Product Listing & Detail Page

### Getting Started

#### Prerequisites

- node.js (>=18)
- npm or yarn

#### Installation & Run the Project Locally

```bash
# Clone the repo
git clone https://github.com/enbeqi/simplecommerce-fe.git
cd simplecommerce-fe

# Install dependencies
npm install
# or
yarn install

# Setup environment variables
cp .env.example .env

# Start dev server
npm run dev
# or
yarn dev
```

Then the app will be available at [http://localhost:3000](http://localhost:3000)

### Overall Project Structures

```bash
/
├── app/
│   ├── api/products
│       ├── route.ts           # API routes for product listing
│       ├── [id]/route.ts      # API routes for product detail
│   ├── product/[id]/page.tsx  # Product detail page
│   ├── page.tsx               # Product listing page
│
├── components/
│   ├── ...                    # Some reusable components (dropdown, navbar, etc.)
│
├── lib/
│   ├── mocks/data/product.ts  # Mock product data
│   ├── services/product.ts    # Product services (get product detail and list)
│   ├── store/cart.ts          # Zustand store for cart
│   ├── types
│       ├── product.ts         # Type definition for product
│       ├── apiResponse.ts     # Type definition for API responses
│
└── public/
```

### Data Fetching Strategy & Assumptions

1. Since product stock and prices can change frequently, I decided to use `getServerSideProps` and fetch the latest information every time the user loads the page. This ensures they always see the most accurate details for the available products.

2. Since `getServerSideProps` is not supported in the App Router (which is the preferred approach based on the assignment PDF), I followed the [official Next.js migration guide](https://nextjs.org/docs/pages/guides/migrating/app-router-migration#server-side-rendering-getserversideprops) and used the recommended alternative to achieve the same server-side behavior:

- Colocate data fetching inside React components using Server Components
- Setting the cache option to no-store, which indicate that the fetched data should never be cached

3. For the filter and sort functionality, I use URL query parameters as the single source of truth. When users change a filter or sort option, the URL updates and triggers a new request to the server component (RSC), which fetches the updated data on the server. This keeps the UI in sync with the URL and ensures data is always fresh without needing extra client-side state or effects. While this achieves server-based filtering, I'm not entirely sure if it satisfies the assignment's requirement for client-side data fetching, but I chose not to implement a separate client fetch to avoid duplicating logic.

### Future Improvements

- Search bar and pagination on Order Listing page
- Stock validation on the add to cart flow & manage cart items
