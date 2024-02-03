interface Returns {
  stopMusic: () => void;
  playMusic: (src: string, onLoaded: () => void) => void;
}

const audio = new Audio();
let myTimeout: number | null = null;

export function useMusic(): Returns {
  function stopMusic() {
    audio.pause();

    if (myTimeout) {
      clearTimeout(myTimeout);
    }
  }

  function playMusic(src: string, onLoaded: () => void) {
    onLoaded();
    myTimeout = setTimeout(() => {
      audio.src = src;
      audio.play();
    }, 2000);
  }

  return {
    stopMusic: stopMusic,
    playMusic: playMusic,
  };
}
