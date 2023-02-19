// @ts-nocheck
import create from "zustand";

const zcomplex = create(
  (set) => ({
    lastFormNr: undefined,
    setLastFormNumber: (val) => {
      set((state) => ({ lastFormNr: val }));
    },
  }),
  {
    name: "mekong-storage",
    getStorage: () => sessionStorage,
  }
);

export default zcomplex;
