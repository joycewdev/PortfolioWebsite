const song = {
  title: "Miss The Darker Nights",
  artist: "Stray Fossa",
  href: "https://open.spotify.com/track/0SSXpjr8kYmCOziXhABIZl?si=90b1feb5d7314455",
};

export default function Music() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-10 pb-10">
      <div className="flex flex-col gap-3">
        <p className="font-bold mb-2">Listening to</p>
        <a
          key={song.title}
          href={song.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center p-3 bg-[#F5F7FF] rounded-lg transition-all hover:shadow-md">
            <div className="flex items-center gap-4 w-full">
              <img
                src={
                  new URL(
                    `../assets/music/${song.title.split(" ").join("")}.jpeg`,
                    import.meta.url,
                  ).href
                }
                alt={song.title}
                draggable="false"
                className="w-11 h-11 flex-shrink-0 overflow-hidden rounded-md select-none"
              />
              <div className="flex flex-row gap-4 items-center">
                <span className="text-sm">{song.title}</span>
                <span className="text-xs text-[#4A4E69]">{song.artist}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
