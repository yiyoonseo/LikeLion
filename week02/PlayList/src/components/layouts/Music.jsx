//import MusicData from "../../data/song.json";
function MusicData({
  albumImage,
  title,
  artist,
  writer,
  composer,
  releaseDate,
}) {
  return (
    <section className="bg-gray-800 text-white p-6 rounded-lg shadow">
      <img
        src={albumImage}
        alt={`${title} 앨범 커버`}
        className="w-full rounded mb-4"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <hr className="my-3 border-gray-600" />
      <p>🎤 가수: {artist}</p>
      <p>📝 작사가: {writer}</p>
      <p>🎼 작곡가: {composer}</p>
      <p className="text-sm text-gray-300 mt-2">📅 발매일: {releaseDate}</p>
    </section>
  );
}

export default MusicData;
