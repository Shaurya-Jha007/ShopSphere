# ShopSphere

ShopSphere is a modern e-commerce platform designed to provide users with a seamless shopping experience. From product browsing to secure payments, ShopSphere offers a wide range of features powered by modern technologies and a robust backend.

## Features ✨

- **User Signup**: Powered by Clerk for secure and reliable user authentication.
- **Product Search**: Find products easily with a powerful search functionality.
- **Categorized Products**: Browse products separated into intuitive categories.
- **Payment Integration**: Secure and smooth payment process using Stripe.
- **Responsive**: Designed to be fully responsive on all screen sizes.
- **Individual Product Pages**: Detailed product pages with essential information.
- **User Basket**: Add products to your basket and manage them easily.
- **Persistent State**: Basket items are saved using localStorage.
- **Sanity Backend**: All product data is dynamically fetched from a Sanity.io backend.


**Working Link** : [(https://shop-sphere-9ofevh93v-shaurya-jhas-projects-81728d7b.vercel.app/)]

## Technologies Used 🛠️

- **Frontend**:
  - NextJS
  - ReactJS
  - TailwindCSS
- **Libraries**:
  - Framer motion
  - Stripe
  - Sanity
  - Clerk
  - Zustand
 
## How It Works ⚙️

1. **Dynamic Data Fetching**:
   - Sanity.io Backend:
      Product data, including images, descriptions, categories, and prices, is fetched dynamically from a Sanity.io backend.
   - Updates in the backend are reflected in real-time on the website.

2. **Shopping Basket**:
   - Users can:
   - Add products to their basket from product listings or individual product pages.
   - View the basket and manage quantities directly from the Basket page.
   - Items in the basket are persisted across sessions using localStorage.
     
3. **Payments with Stripe**:
   - Checkout Process:
   - When the user proceeds to checkout, a session is created via Stripe's API.
   - Stripe handles payment securely, redirecting users to a payment page.
   - Upon successful payment, the user is redirected back to the platform with a confirmation.
   
4. **Categorization and Navigation**:
   - The platform organizes products into intuitive categories fetched from Sanity.io.
   - A responsive navigation bar and a search bar allow users to filter products quickly.
   
5. **User-Friendly Product Pages**:
   - Each product page displays:
   - High-quality product images.
   - Product details like price, description, and availability.
   - Add-to-basket functionality.
   
6. **Deployment**:
   - The app is deployed on Vercel for production.
   - With Next.js, server-side rendering ensures optimal performance for dynamic content, while static assets are served efficiently.
   

## Installation & Setup 🚀

Follow these steps to run the CarsCare application locally:

1. **Clone the Repository**:
  - Open bash
  - git clone https://github.com/Shaurya-Jha007/ShopSphere.git
  - cd ShopSphere
  
2. **Install dependencies**:
  - npm install

3. **Set up environment variables**:
  - NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
  - STRIPE_SECRET_KEY=your_stripe_secret_key
  - NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
  - NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
  - NEXT_PUBLIC_SANITY_API_VERSION=v1

4. **Run the development server**:
  - npm run dev
   
