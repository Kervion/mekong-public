// @ts-nocheck
import create from "zustand";

const zsize = create(
  (set) => ({
    isSmall: false,
    setSmall: (val) => {
      set((state) => ({ isSmall: val }));
    },
  }),
  {
    name: "mekong-storage",
    getStorage: () => sessionStorage,
  }
);

export default zsize;
