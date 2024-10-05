import { useEffect, useRef } from "react";

type AudioControls = {
  play: () => Promise<void>;
  pause: () => void;
  stop: () => void;
};

const useAudio = (src: string): [HTMLAudioElement | null, AudioControls] => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = async () => {
    if (audioRef.current) {
      await audioRef.current.play();
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return [audioRef.current, { play, pause, stop }];
};

export default useAudio;
