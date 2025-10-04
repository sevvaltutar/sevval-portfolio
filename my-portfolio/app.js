const cards =document.querySelectorAll('observe') ;
const io= new IntersectionObserver((entries)=> {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
        }) ;
},{
    threshold:0.35,
    rootMargin:'0px 0px -10% 0px'
} ) ;



const progObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.progress span').forEach(span => {
        const t = Number(span.dataset.target || 0);
        requestAnimationFrame(() => { span.style.width = t + '%'; });
      });
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('#goals .goal-card').forEach(card => progObs.observe(card));



const videos = document.querySelectorAll(".timeline-video");

const videoObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.play(); // Görününce oynat
} else {
entry.target.pause(); // Kaybolunca durdur
}
});
}, { threshold: 0.5 });

videos.forEach(video => videoObserver.observe(video));
