import albumData from '../data/song.json';

export const Playlist = () => {
    const { albumImage, releaseDate, artist, title, producer, composer } =
        albumData;

    return (
        <main className="p-10">
            <section className="w-100 bg-gray-800 p-6 rounded-lg shadow">
                <img
                    src={albumImage}
                    alt={`${title} 앨범 커버`}
                    className="w-full rounded mb-4"
                />
                <h2 className="text-2xl font-semibold">{title}</h2>
                <hr className="my-4" />
                <p className="text-gray-200">🎤 가수: {artist}</p>
                <p className="text-gray-200">📝 프로듀서: {producer}</p>
                <p className="text-gray-200">🎼 작곡가: {composer}</p>
                <p className="text-gray-400 text-sm mt-2">📅 발매일: {releaseDate}</p>
            </section>
        </main>
    );
};
