import './App.css'
import MainLayout from "./Layouts/MainLayout.tsx";
import HomePage from './Pages/HomePage.tsx';
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import ProductPage from './Pages/productPage';
import ProductDetailPage from './Pages/ProductDetailPage'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='homepage' element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductPage />} />
        
        <Route path="about-us" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />  
        <Route path="/products/:id" element={<ProductDetailPage />} />     
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;