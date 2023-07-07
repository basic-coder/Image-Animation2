gsap.registerPlugin(ScrollTrigger);
console.clear();
const canvas = document.getElementById("air-pods");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});
const frameCount = 62;
const currentFrame = index => (
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
    `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/small/${(index + 1).toString().padStart(4, '0')}.jpg`
);


const images = []
const airpods = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(airpods, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.15,
        anticipatePin: 1,
    },
    onUpdate: render
})

images[0].onload = render;

function render() {
    innerWidth > 800 ? scaleImage(images[airpods.frame], context, 1000) : scaleImage(images[airpods.frame], context, 500);
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

