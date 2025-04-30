//import musicdata from "../../data/song.json";

function musicdata({
  albumImage,
  title,
  artist,
  producer,
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
      <p>📝 프로듀서: {producer}</p>
      <p>🎼 작곡가: {composer}</p>
      <p className="text-sm text-gray-300 mt-2">📅 발매일: {releaseDate}</p>
    </section>
  );
}

export default musicdata;
