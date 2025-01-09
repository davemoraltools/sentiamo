import { create } from 'zustand';

interface AudioStore {
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
  stopAll: () => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  currentlyPlaying: null,
  setCurrentlyPlaying: (id) => set({ currentlyPlaying: id }),
  stopAll: () => set({ currentlyPlaying: null })
}));