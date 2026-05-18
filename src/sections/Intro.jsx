export default function Intro() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16">
      <p className="font-bold mb-4">Beyond the Screen</p>
      <ul className="text-sm list-disc pl-5 gap-2 flex flex-col">
        <li>Running around town, on the road to 10K</li>
        <li>Learning how to play the piano</li>
        <li>Sword fighting for points on the fencing team</li>
        <li>Chasing snow and mountains on my snowboard</li>
        <li>
          Meeting new people and going on adventures{" "}
          <a
            href="mailto:wangjoyce@live.com"
            className="text-[#767BBC] hover:text-[#474C90] transition-colors"
          >
            ~ let's connect!
          </a>
        </li>
      </ul>
    </div>
  );
}
