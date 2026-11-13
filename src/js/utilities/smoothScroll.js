export const smoothScroll = (end) => {
  const scroll = window.pageYOffset;
  const diff = end - scroll;
  for (let i = 1; i < 11; i++) {
    setTimeout(function timer() {
      window.scrollTo(0, (i * diff) / 10 + scroll);
    }, i * 200);
  }
};
