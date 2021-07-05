<script>
  import { onMount } from "svelte";

  let iframeDimensions = { width: 10, height: 0 };

  //makes sure the iframe is always 16:9 and occupys either the full width or full height of the window
  const calcIframeDimensions = (windowWidth, windowHeight) => {
    let windowRatio = windowWidth / windowHeight;
    return windowRatio <= 16 / 9
      ? { width: windowWidth, height: windowWidth / windowRatio }
      : { width: (windowHeight * 16) / 9, height: windowHeight };
  };

  const resizeIframe = () => {
    iframeDimensions = calcIframeDimensions(
      window.innerWidth,
      window.innerHeight
    );
  };

  onMount(resizeIframe);
  window.addEventListener("resize", resizeIframe);
</script>

<style>
  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  iframe {
    height: 100%;
    width: 100%;
  }
  :global(.ytp-chrome-top) {
    display: none !important;
  }
</style>

<div class="video-wrapper">
  <iframe
    id="player"
    style="width: {iframeDimensions.width + 'px'}; height: {iframeDimensions.height + 'px'}"
    src="https://www.youtube.com/embed/HVTVrNQwjdE"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />
</div>
