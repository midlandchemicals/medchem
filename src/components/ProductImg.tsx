import { bottleImages } from "../../src/utils/chemicals";

import useProductStore from "../store";
import type { productDetails } from "./ProductCard";

const topLen = {
  "Speciality Chemicals": "top-68",
  "Toilet and Washroom": "top-69",
  "Kitchen & Catering Chemicals": "top-64",
  "Paint Strippers": "top-66",
  "Drain Chemicals": "top-66",
  "Food Processing": "top-64",
  "Hand Cleaners": "top-68",
  "Automotive Chemicals": "top-64",
  "Building Chemicals": "top-64",
};

const ProductImg: React.FC<{ product: productDetails }> = ({ product }) => {
  const { selectedChemical } = useProductStore();
  return (
    <div className="relative w-[280px] flex   mx-auto">
      {/* Bottle Image */}
      <img
        src={bottleImages[selectedChemical]}
        alt="Product bottle"
        className="w-fit h-auto"
      />
      {/* Label Overlay */}
      <div
        className={`w-[85%] shadow-2xl py-2 rounded-xl flex flex-col gap-y-2 absolute ${
          topLen[selectedChemical] || "top-62"
        } left-1/2 -translate-x-1/2 z-10 px-4 border bg-[#f3f3f3] h-auto`}
      >
        <div className="flex justify-between">
          <span className="text-nowrap   text-sm font-medium p-1 bg-[#d5e5ff] rounded">
            {product.code}
          </span>
          <span className="text-nowrap max-w-40 overflow-hidden text-ellipsis text-sm">
            {selectedChemical}
          </span>
        </div>
        <div className="flex flex-col">
          {product.highlights.map((val: string) => {
            return <li className="text-xs text-nowrap">{val}</li>;
          })}
        </div>

        <div className="border bg-blue-500 flex gap-1 rounded-full px-2 py-1 w-fit">
          <span className="text-[8px] font-medium text-white">5L</span>
          <span className="text-[8px] font-medium text-white">10L</span>
          <span className="text-[8px] font-medium text-white">25L</span>
          <span className="text-[8px] font-medium text-white">200L</span>
          <span className="text-[8px] font-medium text-white">1000L</span>
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
