import { create } from "zustand";

const useLevelStore = create((set) => ({
  difficulty: "Easy",
  changeDifficulty: (newDifficulty) =>
    set((state) => ({ difficulty: newDifficulty })),
}));

export default useLevelStore;
