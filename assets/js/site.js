
document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const yearNodes = document.querySelectorAll("[data-current-year]");
yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});


// Set playback defaults once, then leave the viewer's controls available.
(() => {
  const frame = document.getElementById("seva-video");
  if (!frame) return;

  const source = new URL(frame.src);
  if (source.searchParams.get("origin") !== window.location.origin) {
    source.searchParams.set("origin", window.location.origin);
    frame.src = source.toString();
  }

  let soundStarted = false;
  let captionsInitialised = false;

  function setInitialSound(player) {
    player.setVolume(100);
    player.unMute();
  }

  function setInitialCaptions(event) {
    if (captionsInitialised) return;
    const player = event.target;
    const options = player.getOptions("captions") || [];
    if (options.includes("track")) {
      captionsInitialised = true;
      player.setOption("captions", "track", {});
    }
  }

  function initialiseVideo() {
    new window.YT.Player(frame, {
      events: {
        onReady(event) {
          setInitialSound(event.target);
          setInitialCaptions(event);
        },
        onApiChange: setInitialCaptions,
        onStateChange(event) {
          if (event.data === window.YT.PlayerState.PLAYING && !soundStarted) {
            soundStarted = true;
            setInitialSound(event.target);
            setInitialCaptions(event);
          }
        }
      }
    });
  }

  if (window.YT && typeof window.YT.Player === "function") {
    initialiseVideo();
  } else {
    window.onYouTubeIframeAPIReady = initialiseVideo;
    const api = document.createElement("script");
    api.src = "https://www.youtube.com/iframe_api";
    api.async = true;
    document.head.appendChild(api);
  }
})();
