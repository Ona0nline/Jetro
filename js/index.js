document.addEventListener('DOMContentLoaded', () => {
  const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 20,
  });

  typewriter
    .pauseFor(1500)
    .typeString('For Jetro')
    .pauseFor(200)
    .deleteChars(10)
    .start();
});
