var images = [
  '0000',
  '0001',
  '0002',
  '0003',
  '0004',
  '0005',
  '0006',
  '0007',
  '0008',
  '0009',
  '0010',
  '0011',
  '0012',
  '0013',
  '0014',
  '0015',
  '0016',
  '0017',
  '0018',
  '0019',
  '0020',
  '0021',
  '0022',
  '0023',
  '0024',
  '0025',
  '0026',
  '0027',
  '0028',
  '0029',
  '0030',
  '0031',
  '0032',
  '0033',
  '0034',
  '0035',
  '0036',
  '0037',
  '0038',
  '0039',
  '0040',
  '0041',
  '0042',
  '0043',
  '0044',
  '0045',
  '0046',
  '0047',
  '0048',
  '0049'
];

// Function to preload the images and cache them in the browser
function preloadImages() {
for (var i = 0; i < images.length; i++) {
  var image = new Image();
  image.src = images[i];
}
}

// Preload the images and cache them in the browser
preloadImages();

// Initialize the ScrollMagic scene
var obj = { curImg: 0 };

var tween = TweenMax.to(obj, 0.5, {
  curImg: images.length - 1,
  roundProps: "curImg",
  immediateRender: true,
  ease: Linear.easeNone,
  onUpdate: function () {
    $(".right-div img").hide();
    $("." + images[obj.curImg]).show();
  }
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
triggerElement: "#imagesequence",
duration: 700,
offset: 500,
})
.setTween(tween)
.addTo(controller);



