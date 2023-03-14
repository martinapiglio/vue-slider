const { createApp } = Vue

  createApp({
    data() {
      return {
        slides: {
            images: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp'
            ],
            title: [
                "Marvel's Spiderman Miles Morales",
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                "Marvel's Avengers",
            ],
            text: [
                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
            ]
        },
        activeImgIndex: 0,
        autoplay: '',
      }
    },

    methods: {

        next() {

            if (this.activeImgIndex < this.slides.images.length - 1) {
                this.activeImgIndex++;
            } else {
                this.activeImgIndex = 0;
            };

        },

        prev() {

            if (this.activeImgIndex == 0) {
                this.activeImgIndex = this.slides.images.length - 1;
            } else {
                this.activeImgIndex--;
            };

        },

        //BONUS 1
        showSlide(setIndex) {
            this.activeImgIndex = setIndex;
        },

        //BONUS2 + BONUS3
        slidesAutoplay() {
            autoplay = setInterval(this.next , 1000);
        },

        stopSlidesAutoplay() {
            clearInterval(autoplay);
        }

    }
  }).mount('#app')