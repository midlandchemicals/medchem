import useProductStore from "../store";
import { chemicals } from "../utils/chemicals";
import ProductCard from "./ProductCard";

const Products = () => {
  const { selectedChemical } = useProductStore();
  return (
    <div className="bg-white px-10 md:px-20 1xl:px-10 2xl:px-16 pb-16 pt-5">
      <h2 className="text-2xl py-10">{selectedChemical}</h2>
      <div className="grid gap-26 place-items-center xl:gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {chemicals[selectedChemical as keyof typeof chemicals].map((val, i) => (
          <ProductCard key={i} product={val}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
