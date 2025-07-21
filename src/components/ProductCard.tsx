import { useState } from "react";
import ProductImg from "./ProductImg";
import useProductStore from "../store";
import { useNavigate } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";
type Application = {
  icon: ComponentType<SVGProps<SVGSVGElement>>; // any Heroicon or Lucide icon
  text: string;
};

export type productDetails = {
  id: string;
  code: string;
  name: string;
  description: string;
  highlights: string[];
  features: string[];
  applications: Application[];
  surfaces: string[];
};

const backgroundColors: { [key: string]: string } = {
  KC: "bg-amber-600",
  AC: "bg-red-400",
  BR: "bg-yellow-600",
  DC: "bg-green-600",
  FC: "bg-orange-500",
  FP: "bg-cyan-500",
  HC: "bg-indigo-500",
  PS: "bg-purple-500",
  SC: "bg-blue-600",
  TW: "bg-blue-400",
};

const getBgClass = (code: string) => {
  const prefix = code?.substring(0, 2);
  return backgroundColors[prefix];
};

const ProductCard: React.FC<{ product: productDetails }> = ({ product }) => {
  const [card, setCard] = useState<null | string>(null);
  const { selectedChemical } = useProductStore();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(product.id)}
      onMouseEnter={() => setCard(product.name)}
      onMouseLeave={() => setCard(null)}
      className="rounded-xl relative border p-6 cursor-pointer"
    >
      <span
        className={`absolute  top-8 bg right-8 font-bold px-4 rounded-full p-2 z-10 text-sm text-white ${getBgClass(
          product.code
        )}`}
      >
        {product.code}
      </span>
      <div className=" flex items-center h-100 w-80 rounded-xl overflow-hidden">
        <ProductImg product={product}></ProductImg>
      </div>
      <div className="py-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-medium text-nowrap overflow-hidden text-ellipsis text-xl">
            {product.name}
          </h1>
          <span className="border rounded-full text-[#4c4c4c] px-2 py-1 text-sm font-semibold w-fit">
            {selectedChemical}
          </span>
        </div>
        <div className="py-2">
          <p
            className="overflow-hidden  text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </p>
        </div>
      </div>
      <div
        className={`items-center flex bg-white. ${
          card === product.name ? "bg-blue-500" : ""
        } rounded py-2`}
      >
        <span
          className={`w-fit gap-x-2 items-center flex ${
            card === product.name ? "text-white" : ""
          }   font-medium m-auto`}
        >
          View Details
          {card === product.name ? (
            <img
              className="w-4 h-4"
              src={new URL("../assets/whiteArrow.png", import.meta.url).href}
            ></img>
          ) : (
            <img
              className="w-4 h-4"
              src={new URL("../assets/blackArrow.png", import.meta.url).href}
            ></img>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
