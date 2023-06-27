var images = [
    '/images/0000.png',
    '/images/0001.png',
    '/images/0002.png',
    '/images/0003.png',
    '/images/0004.png',
    '/images/0005.png',
    '/images/0006.png',
    '/images/0007.png',
    '/images/0008.png',
    '/images/0009.png',
    '/images/0010.png',
    '/images/0011.png',
    '/images/0012.png',
    '/images/0013.png',
    '/images/0014.png',
    '/images/0015.png',
    '/images/0016.png',
    '/images/0017.png',
    '/images/0018.png',
    '/images/0019.png',
    '/images/0020.png',
    '/images/0021.png',
    '/images/0022.png',
    '/images/0023.png',
    '/images/0024.png',
    '/images/0025.png',
    '/images/0026.png',
    '/images/0027.png',
    '/images/0028.png',
    '/images/0029.png',
    '/images/0030.png',
    '/images/0031.png',
    '/images/0032.png',
    '/images/0033.png',
    '/images/0034.png',
    '/images/0035.png',
    '/images/0036.png',
    '/images/0037.png',
    '/images/0038.png',
    '/images/0039.png',
    '/images/0040.png',
    '/images/0041.png',
    '/images/0042.png',
    '/images/0043.png',
    '/images/0044.png',
    '/images/0045.png',
    '/images/0046.png',
    '/images/0047.png',
    '/images/0048.png',
    '/images/0049.png'
];

var obj = { curImg: 0 };

var tween = TweenMax.to(obj, 0.5, {
  curImg: images.length - 1,
  roundProps: "curImg",
  immediateRender: true,
  ease: Linear.easeNone,
  onUpdate: function () {
    $("#myimg").attr("src", images[obj.curImg]);
  }
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#imagesequence",
  duration: 800,
})
  .setTween(tween)
  .addTo(controller);




