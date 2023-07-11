function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = [
        '/assets/images/images/0000.png',
        '/assets/images/images/0001.png',
        '/assets/images/images/0002.png',
        '/assets/images/images/0003.png',
        '/assets/images/images/0004.png',
        '/assets/images/images/0005.png',
        '/assets/images/images/0006.png',
        '/assets/images/images/0007.png',
        '/assets/images/images/0008.png',
        '/assets/images/images/0009.png',
        '/assets/images/images/0010.png',
        '/assets/images/images/0011.png',
        '/assets/images/images/0012.png',
        '/assets/images/images/0013.png',
        '/assets/images/images/0014.png',
        '/assets/images/images/0015.png',
        '/assets/images/images/0016.png',
        '/assets/images/images/0017.png',
        '/assets/images/images/0018.png',
        '/assets/images/images/0019.png',
        '/assets/images/images/0020.png',
        '/assets/images/images/0021.png',
        '/assets/images/images/0022.png',
        '/assets/images/images/0023.png',
        '/assets/images/images/0024.png',
        '/assets/images/images/0025.png',
        '/assets/images/images/0026.png',
        '/assets/images/images/0027.png',
        '/assets/images/images/0028.png',
        '/assets/images/images/0029.png',
        '/assets/images/images/0030.png',
        '/assets/images/images/0031.png',
        '/assets/images/images/0032.png',
        '/assets/images/images/0033.png',
        '/assets/images/images/0034.png',
        '/assets/images/images/0035.png',
        '/assets/images/images/0036.png',
        '/assets/images/images/0037.png',
        '/assets/images/images/0038.png',
        '/assets/images/images/0039.png',
        '/assets/images/images/0040.png',
        '/assets/images/images/0041.png',
        '/assets/images/images/0042.png',
        '/assets/images/images/0043.png',
        '/assets/images/images/0044.png',
        '/assets/images/images/0045.png',
        '/assets/images/images/0046.png',
        '/assets/images/images/0047.png',
        '/assets/images/images/0048.png',
        '/assets/images/images/0049.png'
    ];
    var splitData = data.map(function(url) {
        return url.split(",");
    });
    return splitData[index];
  }
  
  const frameCount = 50;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page`,
      start: `top top`,
      end: `100% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  // // Define the initial width and the decrement amount
  // var initialWidth = 2000; // Initial width when innerWidth > 800
  // var smallWidth = 700; // Width when innerWidth <= 800
  // var decrementAmount = 20; // Amount to decrement the width on each scroll event
  
  // // Counter to keep track of scroll events
  // var scrollCounter = 0;
  
  // // Listen for the scroll event
  // window.addEventListener('scroll', function() {
  // render()
  // });
  
  function render() {
  //    // Increment the scroll counter
  // scrollCounter++;
  
  // // Calculate the new width based on the number of scroll events
  // var newWidth = innerWidth > 800 ? initialWidth - (scrollCounter * decrementAmount) : smallWidth;
  
  // // Limit the reduction in width to imageSeq.frame = 10
  // newWidth = Math.max(newWidth, smallWidth + (10 * decrementAmount));
  
  // // Render the scaled image with the new width
  // scaleImage(images[imageSeq.frame], context, newWidth);
  
  innerWidth > 800 ? scaleImage(images[imageSeq.frame], context, 1650) : scaleImage(images[imageSeq.frame], context, 700);
  }
  
  function scaleImage(img, ctx, newWidth) {
    var canvas = ctx.canvas;
    var ratio = newWidth / img.width;
    var newHeight = img.height * ratio;
    var centerShift_x = (canvas.width - newWidth) / 2;
    var centerShift_y = (canvas.height - newHeight) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      newWidth,
      newHeight
    );
  }
  
  
  // function render() {
  //   innerWidth > 800 ? scaleImage(images[imageSeq.frame], context, 1400, 20) : scaleImage(images[imageSeq.frame], context, 700, 00);
  // }
  
  // function scaleImage(img, ctx, newWidth, newTop) {
  //   var canvas = ctx.canvas;
  //   var ratio = newWidth / img.width;
  //   var newHeight = img.height * ratio;
  //   var centerShift_x = (canvas.width - newWidth) / 2;
  //   var centerShift_y = newTop - (newHeight - canvas.height) / 2;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.drawImage(
  //     img,
  //     0,
  //     0,
  //     img.width,
  //     img.height,
  //     centerShift_x,
  //     centerShift_y,
  //     newWidth,
  //     newHeight
  //   );
  // }
  
  ScrollTrigger.create({
    trigger: "#page",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `0% center`
  }); 
  
  // gsap.to("#page1", {
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     start: "top top",
  //     end: "bottom top",
  //     pin: true,
  //     markers: true,
  //     scroller: "#main"
  //   }
  // })
  
  
//   gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page",
//         start: "top top",
//         end: "bottom top",
//         scrub: 2,
//         pin: true,
//         scroller: "#main",
//         markers: true
//     }
//   })
//   .fromTo("#tire-img", { scale: 1 }, { scale: .5, fadeIn: true, duration: 1 })
//   .fromTo(".text2", { x: 0, opacity: 1 }, { x: innerWidth * -1, opacity: 0, fadeIn: true, duration: 1 },0)
//   .fromTo(".text1", { x: 0, opacity: 1 }, { x:  innerWidth * 1, opacity: 0, fadeIn: true, duration: 1 },0)
//   .fromTo(".text3", { x: innerWidth * -1, opacity: 0 }, { x:  0, opacity: 1, fadeIn: true, duration: 1 })
//   .fromTo("#tire-img", { x: 0, opacity: 1 }, { x:  "20%", opacity: 1, fadeIn: true, duration: 1 })
  
  
  //   gsap.timeline({
  //     scrollTrigger: {
  //         trigger: "#page2",
  //         // start: "+=500 center",  
  //         start:`top top`,
  //         end:`bottom top`,
  //         scrub: 2,
  //         pin: true,
  //         scroller:`#main`
  //     }
  // })
  //     .fromTo("#text1", { x: innerWidth * -1, opacity: 0 }, { x: 0, opacity: 1, fadeIn: true, duration: 2 })
  //     .fromTo("#text2", { x: innerWidth * -1, opacity: 0 }, { x: 0, opacity: 1, fadeIn: true, duration: 2 })
  
  
  //     gsap.timeline({
  //       scrollTrigger: {
  //           trigger: "#page3",
  //           start:`top top`,
  //           end:`bottom top`,
  //           scrub: 2,
  //           pin: true,
  //           scroller:`#main`
  //       }
  //   })
  //   .fromTo("#text3", { x: innerWidth * -1, opacity: 0 }, { x: 0, opacity: 1, fadeIn: true, duration: 5 })