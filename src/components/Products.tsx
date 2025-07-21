import useProductStore from "../store";
import { chemicals } from "../utils/chemicals";
import ProductCard from "./ProductCard";

const Products = () => {
  const { selectedChemical } = useProductStore();
  return (
    <div className="bg-white px-16 pb-16 pt-5">
      <h2 className="text-2xl py-10">{selectedChemical}</h2>
      <div className="grid gap-4 gap-y-8 grid-cols-3 xl:grid-cols-4">
        {chemicals[selectedChemical].map((val, i) => (
          <ProductCard key={i} product={val}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
