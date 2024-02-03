import { createContext, useContext, useReducer } from "react";
import albumStateReducer from "./AlbumReducer";

export interface Song {
  name: string;
  source: string;
}

export interface Album {
  name: string;
  year: number;
  image: string;
  songs: Song[];
}

export interface AlbumState {
  currentAlbum: Album;
  currentSong: Song;
  currentIndex: number;
  nextSong: () => void;
  prevSong: () => void;
}

export const AlbumContext = createContext<AlbumState | undefined>(undefined);

const AlbumProvider = ({
  children,
  album,
}: {
  children: React.ReactNode;
  album: Album;
}) => {
  const [state, dispatch] = useReducer(albumStateReducer, album);

  function nextSong() {
    dispatch({
      type: "NEXT_SONG",
    });
  }

  function prevSong() {
    dispatch({
      type: "PREV_SONG",
    });
  }

  const value: AlbumState = {
    currentAlbum: state,
    currentIndex: 0,
    currentSong: state.songs[0],
    nextSong: nextSong,
    prevSong: prevSong,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};

export default AlbumProvider;

export function useAlbum() {
  const album = useContext(AlbumContext);

  if (!album) {
    throw new Error("useAlbum must be inside Album Provider");
  }

  return album;
}
