var slideshowing = 0, imgMax = 1,imgs = ["images/slide-show/image-one.jpg", "images/slide-show/image-two.jpg"];

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