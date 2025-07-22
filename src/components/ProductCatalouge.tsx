import { useEffect } from "react";
import ProductOptions from "./ProductOptions";
import Products from "./Products";

const ProductCatalouge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full  bg-blue-500">
      <header className="flex gap-y-4  justify-center flex-col py-20 items-center">
        <h2 className="text-white text-nowrap text-5xl md:text-6xl font-bold">
          Product Catalog
        </h2>
        <p className="text-white text-xl md:text-2xl text-center max-w-4xl">
          Discover our comprehensive range of professional chemical solutions
          designed for every industry need.
        </p>
      </header>
      <ProductOptions></ProductOptions>
      <Products></Products>
    </div>
  );
};

export default ProductCatalouge;
