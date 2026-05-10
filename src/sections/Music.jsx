import { songs } from "/src/data/songs.js";

const randomSongs = [...songs].sort(() => 0.5 - Math.random()).slice(0, 3);

export default function Music() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16 pb-10">
      <p className="font-bold mb-4">Listening To</p>
      <div className="flex flex-col gap-3">
        {randomSongs.map((song) => (
          <a
            key={song.title}
            href={song.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center p-3 bg-[#F5F7FF] rounded-lg transition-all hover:shadow-md">
              <div className="flex items-center gap-4 w-full">
                <div className="w-11 h-11 flex-shrink-0 overflow-hidden rounded-md shadow-sm">
                  <img
                    src={`/src/assets/music/${song.title.split(" ").join("")}.jpeg`}
                    alt={song.title}
                    draggable="false"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <span className="text-sm">{song.title}</span>
                  <span className="text-xs text-[#4A4E69]">{song.artist}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
