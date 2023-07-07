function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
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

console.clear();

gsap.defaults({
    ease: "none"
});

var frames = [
    {
        frame: { x: 483, y: 692, w: 169, h: 226 },
        spriteSourceSize: { x: 3, y: 4, w: 169, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 468, y: 2, w: 169, h: 226 },
        spriteSourceSize: { x: 3, y: 4, w: 169, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 639, y: 2, w: 167, h: 226 },
        spriteSourceSize: { x: 3, y: 5, w: 167, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 808, y: 2, w: 165, h: 226 },
        spriteSourceSize: { x: 3, y: 5, w: 165, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 654, y: 688, w: 161, h: 226 },
        spriteSourceSize: { x: 3, y: 5, w: 161, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 817, y: 458, w: 151, h: 226 },
        spriteSourceSize: { x: 6, y: 5, w: 151, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 817, y: 686, w: 137, h: 226 },
        spriteSourceSize: { x: 11, y: 5, w: 137, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 290, y: 2, w: 113, h: 228 },
        spriteSourceSize: { x: 22, y: 3, w: 113, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 284, y: 692, w: 79, h: 228 },
        spriteSourceSize: { x: 40, y: 3, w: 79, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 405, y: 2, w: 61, h: 228 },
        spriteSourceSize: { x: 53, y: 3, w: 61, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 444, y: 462, w: 49, h: 228 },
        spriteSourceSize: { x: 64, y: 3, w: 49, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 377, y: 462, w: 65, h: 228 },
        spriteSourceSize: { x: 52, y: 3, w: 65, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 272, y: 462, w: 103, h: 228 },
        spriteSourceSize: { x: 37, y: 3, w: 103, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 143, y: 692, w: 139, h: 228 },
        spriteSourceSize: { x: 20, y: 3, w: 139, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 2, y: 462, w: 163, h: 228 },
        spriteSourceSize: { x: 7, y: 3, w: 163, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 2, y: 2, w: 171, h: 228 },
        spriteSourceSize: { x: 2, y: 3, w: 171, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 2, y: 232, w: 163, h: 228 },
        spriteSourceSize: { x: 4, y: 3, w: 163, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 2, y: 692, w: 139, h: 228 },
        spriteSourceSize: { x: 16, y: 3, w: 139, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 167, y: 462, w: 103, h: 228 },
        spriteSourceSize: { x: 35, y: 3, w: 103, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 365, y: 692, w: 65, h: 228 },
        spriteSourceSize: { x: 58, y: 3, w: 65, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 432, y: 692, w: 49, h: 228 },
        spriteSourceSize: { x: 62, y: 3, w: 49, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 389, y: 232, w: 61, h: 228 },
        spriteSourceSize: { x: 61, y: 3, w: 61, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 306, y: 232, w: 81, h: 228 },
        spriteSourceSize: { x: 55, y: 3, w: 81, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 175, y: 2, w: 113, h: 228 },
        spriteSourceSize: { x: 39, y: 3, w: 113, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 167, y: 232, w: 137, h: 228 },
        spriteSourceSize: { x: 26, y: 3, w: 137, h: 228 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 664, y: 458, w: 151, h: 226 },
        spriteSourceSize: { x: 18, y: 5, w: 151, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 792, y: 230, w: 161, h: 226 },
        spriteSourceSize: { x: 11, y: 5, w: 161, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 623, y: 230, w: 167, h: 226 },
        spriteSourceSize: { x: 6, y: 5, w: 167, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 495, y: 460, w: 167, h: 226 },
        spriteSourceSize: { x: 5, y: 5, w: 167, h: 226 },
        sourceSize: { w: 175, h: 240 }
    },
    {
        frame: { x: 452, y: 232, w: 169, h: 226 },
        spriteSourceSize: { x: 3, y: 4, w: 169, h: 226 },
        sourceSize: { w: 175, h: 240 }
    }
];

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const resolution = window.devicePixelRatio || 1;


let vw, vh, cx, cy;

const fighter = {
    progress: 0,
    scale: 0.5,
    rotation: 0,
    frame: 0,
    x: -175 / 2,
    y: -240 / 2,
    alpha: 1
};


const sprite = new Image();
sprite.onload = init;
sprite.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/fighter3.png";

function init() {

    // do 5 rolls
    const rollProgress = gsap.utils.pipe(
        gsap.utils.wrap(0, 0.2),
        gsap.utils.normalize(0, 0.2)
    );

    const roll = gsap.to(fighter, {
        paused: true,
        frame: frames.length - 1,
        snap: "frame"
    });

    gsap.timeline({
        scrollTrigger: {
            scrub: 0.5
        },
        onUpdate() {
            roll.progress(rollProgress(fighter.progress));
            update();
        }
    })

        .to(fighter, {
            progress: 1,
            duration: 1
        }, 0)
        .to(fighter, {
            scale: 1,
            duration: 0.25
        }, 0.25)
        .to(fighter, {
            scale: 0.25,
            alpha: 0,
            duration: 0.25
        }, 0.75)
        .to(fighter, {
            rotation: Math.PI * 2,
            duration: 1
        }, 0);

    resize();
    update();
    window.addEventListener("resize", resize);
}


function update() {

    const frame = frames[fighter.frame];

    const f = frame.frame;
    const s = frame.spriteSourceSize;

    const x = fighter.x + s.x;
    const y = fighter.y + s.y;

    context.save();
    context.clearRect(0, 0, vw, vh);
    context.globalAlpha = fighter.alpha;
    context.translate(cx, cy);
    context.scale(fighter.scale, fighter.scale);
    context.rotate(fighter.rotation);
    context.drawImage(sprite, f.x, f.y, f.w, f.h, x, y, f.w, f.h);
    context.restore();
}

function resize() {

    vw = window.innerWidth;
    vh = window.innerHeight;

    cx = vw / 2;
    cy = vh / 2;

    canvas.width = vw * resolution;
    canvas.height = vh * resolution;

    canvas.style.width = vw + "px";
    canvas.style.height = vh + "px";

    context.scale(resolution, resolution);

    update();
}