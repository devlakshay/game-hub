import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

export interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { sortOrder: "", searchText: "" },
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText, sortOrder: "" } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setGenreID: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformID: (platformID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),
}));

export default useGameQueryStore;
