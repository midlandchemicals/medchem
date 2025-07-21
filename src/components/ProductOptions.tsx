import { chemicals, icons } from "../utils/chemicals";
import useProductStore from "../store";

const ProductOptions = () => {
  const { selectedChemical, setSelectedChemical } = useProductStore();

  return (
    <div className="p-6 px-4 lg:px-16 py-8 border-b bg-white">
      <div className="grid gap-y-1 p-4 grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4  rounded-2xl bg-[#F3F4FB]">
        {Object.keys(chemicals).map((val, i) => (
          <div
            onClick={() => setSelectedChemical(val)}
            key={i}
            className={`flex lg:gap-2 gap-x-2 cursor-pointer items-center px-1 lg:px-10 justify-start ${
              val === selectedChemical ? "bg-white shadow rounded" : ""
            }`}
          >
            <img
              className="h-5 w-5"
              src={icons[val as keyof typeof icons]}
              alt={val}
            />
            <span className="text-h4 max-w-44 text-ellipsis sm:overflow-visible overflow-hidden text-nowrap text-[#6b7280] py-2 rounded">
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
