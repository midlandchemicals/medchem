import { useState } from "react";
import { chemicals, icons } from "../utils/chemicals";

const ProductOptions = () => {
  const [selectedChemical, setSelectedChemicals] = useState(
    "Automotive Chemicals"
  );
  console.log(selectedChemical);

  return (
    <div className="p-6 px-16 bg-white">
      <div className="grid gap-y-1 p-4  grid-cols-4  rounded-2xl bg-[#F3F4FB]">
        {Object.keys(chemicals).map((val, i) => (
          <div
            onClick={() => setSelectedChemicals(val)}
            key={i}
            className={`flex gap-2 cursor-pointer items-center px-10 justify-start ${
              val === selectedChemical ? "bg-white shadow rounded" : ""
            }`}
          >
            <img
              className="h-5 w-5"
              src={icons[val as keyof typeof icons]}
              alt={val}
            />
            <span className="text-h4 text-[#6b7280] py-2 rounded">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
