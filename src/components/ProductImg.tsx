import bottleImg from "../../src/assets/bottle.png";
import logoImg from "../../src/assets/logo.png"; // Your uploaded logo

const product = {
  name: "Automotive Chemical",
  grade: "Premium",
  sizes: ["5L", "10L", "25L", "200L", "1000L"],
  manufacturer: "Midchem Speciality",
  descriptionHighlights: [
    "Concentrated alkaline additive",
    "Effective degreasing action",
    "Removes traffic film and grease",
  ],
};

export default function ProductImg() {
  return (
    <div className="relative w-[430px] mx-auto">
      {/* Bottle Image */}
      <img src={bottleImg} alt="Product bottle" className="w-full h-auto" />
      {/* Label Overlay */}
      <div className="w-58 h-[240px] absolute top-[37.5%] left-[25%] bg-white rounded-xl  overflow-hidden">
        {/* Handle */}
        <div className="absolute   right-2 top-8 w-8 h-10 border-4 border-white bg-transparent rounded-r-full"></div>

        {/* Main Label */}
        <div className="absolute top-2 left-3 h-[70%] right-3 bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-1   bottom-20">
          {/* Header Section with Branding */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md p-1 mb-1 shadow-md">
            {/* Company Logo Area */}
            <div className="flex items-center justify-center mb-0.5">
              <img
                src={logoImg}
                alt="Midchem Specialty Logo"
                className="w-8 h-8 shadow-sm object-contain"
              />
              <div className="ml-0.5 flex gap-x-2">
                <span className="text-xs font-bold tracking-wide">Midchem</span>
                <span className="text-xs opacity-90">SPECIALTY</span>
              </div>
            </div>

            {/* Product Name */}
            <h2 className="text-center text-xs font-bold tracking-wider mb-0.5">
              {product.name}
            </h2>
            <p className="text-center text-xs opacity-95 font-medium">
              {product.grade} Grade Formula
            </p>
          </div>

          {/* Product Description Highlights */}
          <div className="mb-1 bg-blue-50 rounded-md pt-2 p-1 pb-0 border border-blue-100">
            <h3 className="text-xs font-bold text-blue-800 mb-0.5">
              Highlights
            </h3>
            <div className="text-xs space-y-0.5 text-gray-700">
              {product.descriptionHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mt-1 mr-0.5 flex-shrink-0"></span>
                  <span className="text-[10px]">{highlight}</span>
                </div>
              ))}
              {/* Product Specifications */}
              <div className="mb-1">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-gray-800">Grade:</span>
                    <span className="text-gray-600 text-xs ml-0.5">
                      {product.grade}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Type:</span>
                    <span className="text-gray-600 ml-0.5">Liquid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Sizes */}
          <div className="mb-1 pb-2 pt-3">
            <div className="flex flex-wrap gap-0.5">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="bg-blue-600 text-white px-1 py-0.5 rounded-full text-[6px] font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-blue-200 py-4"></div>
        </div>
      </div>
    </div>
  );
}
