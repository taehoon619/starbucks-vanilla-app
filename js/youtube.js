var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 'EJF919p_hb0&t=2s',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'EJF919p_hb0&t=2s',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
