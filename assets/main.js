$(document).ready(function(){

  $('.testimonials .owl-carousel').owlCarousel({
               loop: true,
               items: 1,
               margin: 50,
                autoplay: true,
               autoplayTimeout: 4000,
               autoplayHoverPause: true
      });
           let playButtons = document.querySelectorAll(".testimonials .playBtn");

           playButtons.forEach(element => {
               let videoElem = element.parentNode.querySelector(".video-testimonial");
               let name = videoElem.parentNode.querySelector(".name");

               element.addEventListener("click", () => {
                   handlePlayButton(element, videoElem, name);
               }, false);
               videoElem.onended = () => {
                   element.style.display = "block";
                   name.style.display = "flex";
                   videoElem.controls = false;
                   $(".testimonials .owl-carousel").trigger('next.owl.carousel');
                   $(".testimonials .owl-carousel").trigger('play.owl.autoplay');
               }
               // si el video se esta reproduciendo desactivar el autoplay
                videoElem.onplaying = () => {
                    $(".testimonials .owl-carousel").trigger('stop.owl.autoplay');
                }
                // si el video no se esta reproduciendo activar el autoplay
                videoElem.onpause = () => {
                    $(".testimonials .owl-carousel").trigger('play.owl.autoplay');
                }
               playVideo(element, videoElem, name);
           });


           async function playVideo(playButton, videoElem, name) {
               try {
                   await videoElem.play();
                   playButton.style.display = "none";
                   name.style.display = "none";
               } catch (err) {

                   playButton.style.display = "block";
                   name.style.display = "flex";
               }

           }

           function handlePlayButton(playButton, videoElem, name) {

               videoElem.controls = true;
               if (videoElem.paused) {
                   playVideo(playButton, videoElem, name);

               } else {
                   videoElem.pause();
                   playButton.style.display = "block";
                   name.style.display = "flex";
               }
           }

})