import { create } from "zustand";

const useLevelStore = create((set) => ({
  difficulty: "Hard",
  changeDifficulty: (newDifficulty) =>
    set((state) => ({ difficulty: newDifficulty })),
}));

export default useLevelStore;
