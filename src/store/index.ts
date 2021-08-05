import create from 'zustand';
import { fishes } from './mockData';
import { FishData } from './types';

interface TNAState {
  fishes: FishData[];
  gbr: boolean;
  fishInView: FishData;

  setFish: (name: string) => void;
  goToGBR: () => void;
}

const useStore = create<TNAState>(set => ({
  // Initial conditions
  fishes,
  gbr: true,
  fishInView: fishes[0],

  /* Functions */
  setFish: (name: string) => {
    set((state) => ({
      // Get the first item since fish names are not duped.
      fishInView: state.fishes.filter(fish => fish.name === name)[0],
      gbr: false,
    }));
  },

  goToGBR: () => {
    set((_state) => ({
      gbr: true,
    }));
  },
}));

export default useStore;