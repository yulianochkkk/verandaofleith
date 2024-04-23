document.addEventListener('DOMContentLoaded', () => {
    const hero_video = document.getElementById('hero_video');
    const hero_audio = document.getElementById('hero_audio');
  
    hero_video.addEventListener('click', () => {
      if (hero_audio.paused) {
        hero_audio.play();
      } else {
        hero_audio.pause();
      }
    });
    hero_video.addEventListener('dblclick', () => {
        hero_audio.pause();
      });
  });