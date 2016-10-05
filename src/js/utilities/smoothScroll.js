export default function smoothScroll( end ){
  let scroll = window.pageYOffset;
  let diff = end - scroll;
  for(let i=1; i<11; i++) {
    setTimeout( function timer(){
      window.scrollTo(0, i*diff/10 + scroll);
    }, i*200 );
  }
}
