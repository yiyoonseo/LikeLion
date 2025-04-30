import MusicData from "../components/layouts/Music";
import albumData from "../data/song.json";

export const Playlist = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albumData.map((song) => (
          <MusicData
            albumImage={song.albumImage}
            title={song.title}
            artist={song.artist}
            writer={song.writer}
            composer={song.composer}
            releaseDate={song.releaseDate}
          />
        ))}
      </div>
    </main>
  );
};
