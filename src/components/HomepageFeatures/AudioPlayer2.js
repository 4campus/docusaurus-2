import React, { useState, useRef, useEffect } from "react";

const AudioMsrPlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioMsrRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Playlist transcribed from directory, sorted newest → oldest
  const playlist = [
    { title: "Sha (NCSU - 2/19/23)", src: "/audio/msr/sha_ncsu_(2-19-23).mp3" },
    { title: "Hunter (NCSU - 2/19/23)", src: "/audio/msr/hunter_ncsu_(2-19-23).mp3" },
    { title: "Lizzie (NCSU - 10/17/21)", src: "/audio/msr/lizzie-ncsu_(10-17-21).mp3" },
    { title: "Savannah (NCSU - 9/12/21)", src: "/audio/msr/savannah_ncsu_(9-12-21).mp3" },
    { title: "Robert Sky (NCSU - 8/28/21)", src: "/audio/msr/robert_sky_ncsu_(8-28-21).mp3" },
    { title: "Dylan (NCSU - 7/5/21)", src: "/audio/msr/dylan_ncsu_(7-5-21).mp3" },
    { title: "Elaina (NCSU - 6/18/21)", src: "/audio/msr/elaina_ncsu_(6-18-21).mp3" },
    { title: "Caitlynne & Ethan (NCSU - 6/5/21)", src: "/audio/msr/caitlynne_ethan_ncsu_(6-5-21).mp3" },
    { title: "Christian (UNCFSU - 5/1/21)", src: "/audio/msr/christian_uncfsu_(5-1-21).mp3" },
    { title: "Jaleen (UNCFSU - 5/11/21)", src: "/audio/msr/jaleen_uncfsu_(5-11-21).mp3" },
    { title: "Jordan (NCSU - 5/9/21)", src: "/audio/msr/jordan_ncsu_(5-9-21).mp3" },
    { title: "Jared (NCSU - 5/9/21)", src: "/audio/msr/jared_ncsu_(5-9-21).mp3" },
    { title: "Shelby (UNC - 5/8/21)", src: "/audio/msr/shelby_unc_(5-8-21).mp3" },
    { title: "Risa (NCSU - 4/25/21)", src: "/audio/msr/risa_ncsu_(4-25-21).mp3" },
    { title: "Collin (UNCW - 4/18/21)", src: "/audio/msr/collin_uncw_(4-18-21).mp3" },
    { title: "David (MU - 4/16/21)", src: "/audio/msr/david_mu_(4-16-21).mp3" },
    { title: "Dorris (NCSU - 4/13/21)", src: "/audio/msr/dorris_ncsu_(4-13-21).mp3" },
    { title: "Tylera’drell (UNCFSU - 4/10/21)", src: "/audio/msr/tylera'drell_uncfsu_(4-10-21).mp3" },
    { title: "Lizzy (UNC - 4/6/21)", src: "/audio/msr/lizzy_unc_(4-6-21).mp3" },
    { title: "Khalil (NCCU - 4/5/21)", src: "/audio/msr/khalil_nccu_(4-5-21).mp3" },
    { title: "Robbie (NCSU - 4/3/21)", src: "/audio/msr/robbie_ncsu_(4-3-21).mp3" },
    { title: "Josiah (UNCFSU - 4/2/21)", src: "/audio/msr/josiah_uncfsu_(4-2-21).mp3" },
  ];

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    if (audioMsrRef.current) {
      audioMsrRef.current.play(); // auto-play current track
    }
  }, [currentTrack]);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ textAlign: "left", padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <audio
        ref={audioMsrRef}
        controls
        src={playlist[currentTrack].src}
        onEnded={playNext}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <div
        style={{
          maxHeight: "350px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          background: "#fff",
        }}
      >
        {playlist.map((track, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrack(index)}
            style={{
              padding: "10px",
              margin: "5px 0",
              cursor: "pointer",
              background: index === currentTrack ? "#000" : "#fff",
              color: index === currentTrack ? "#fff" : "#000",
              borderRadius: "5px",
            }}
          >
            {track.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioMsrPlayer;
