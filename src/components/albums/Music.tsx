import { useAlbum } from "../../context/AlbumContext";

const Music = () => {
  const album = useAlbum();

  return (
    <audio className="absolute z-[10]" src={album.currentSong.source} controls>
      Music
    </audio>
  );
};

export default Music;
