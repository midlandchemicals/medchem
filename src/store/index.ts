// src/store/index.ts
import { create } from "zustand";

type productDetails = {
  code: string;
  name: string;
  description: string;
  highlights: string[];
};

interface ProductState {
  selectedChemical: string;
  product: productDetails | null;
  setSelectedChemical: (category: string) => void;
  setSelectedProduct: (product: productDetails) => void;
}

const useProductStore = create<ProductState>((set) => ({
  selectedChemical: "Automotive Chemicals",
  product: null,
  setSelectedChemical: (category) => set({ selectedChemical: category }),
  setSelectedProduct: (product) => set({ product }),
}));

export default useProductStore;
