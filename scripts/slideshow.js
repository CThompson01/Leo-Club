var slideshowing = 0, imgMax = 5,imgs = ["images/slide-show/image1.jpg", "images/slide-show/image2.jpg", "images/slide-show/image3.jpg", "images/slide-show/image4.jpg", "images/slide-show/image5.jpg", "images/slide-show/image6.jpg"];

function next() {
  if (slideshowing >= imgMax) {
    slideshowing = 0;
    document.getElementById("slide-show-img").src = imgs[slideshowing];
  } else {
    slideshowing++;
    document.getElementById("slide-show-img").src = imgs[slideshowing];
  }
}

function prev() {
  if (slideshowing <= 0) {
    slideshowing = imgMax;
    document.getElementById("slide-show-img").src = imgs[slideshowing];
  } else {
    slideshowing--;
    document.getElementById("slide-show-img").src = imgs[slideshowing];
  }
}