function locoMotiveScrolling() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
}
locoMotiveScrolling();

function videoconAnimation() {
  let videocon = document.querySelector(".video-container");
  let playbtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadingAnimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.5,
  });
  gsap.from(".page1 .video-container", {
    scale: 0.9,
    opacity: 1,
    delay: 1.5,
    duration: 0.5,
  });
}
loadingAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", (dets) => {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
      });
    });

    /*************/
    document.querySelectorAll(".child").forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
          transform: `translate(-50%, -50%) scale(1)`,
        });
      });
    });

    document.querySelectorAll(".child").forEach((elem) => {
      elem.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
          transform: `translate(-50%, -50%) scale(0)`,
        });
      });
    });
}
cursorAnimation();

