import { create } from 'zustand';

interface AudioState {
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}

const useAudioStore = create<AudioState>((set) => ({
  playingId: null,
  setPlayingId: (id) => set({ playingId: id })
}));

export function useAudioController(id: string) {
  const { playingId, setPlayingId } = useAudioStore();
  
  const play = async (audio: HTMLAudioElement) => {
    try {
      // Detener cualquier otro audio que esté reproduciéndose
      if (playingId && playingId !== id) {
        document.querySelectorAll('audio').forEach(el => el.pause());
      }
      
      await audio.play();
      setPlayingId(id);
    } catch (error) {
      console.error('Error playing audio:', error);
      setPlayingId(null);
    }
  };

  const pause = (audio: HTMLAudioElement) => {
    audio.pause();
    setPlayingId(null);
  };

  return {
    isPlaying: playingId === id,
    play,
    pause
  };
}