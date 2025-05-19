import MusicData from "../components/layouts/Music";
import albumData from "../data/song.json";

import { useContext } from "react";
import ModalContext from "../components/layouts/ModalContext";

export const Playlist = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albumData.map((song) => (
          <MusicData
            key={song.albumImage}
            albumImage={song.albumImage}
            title={song.title}
            artist={song.artist}
            writer={song.writer}
            composer={song.composer}
            releaseDate={song.releaseDate}
            onClick={() => openModal(song.id)}
          />
        ))}
      </div>
    </main>
  );
};
