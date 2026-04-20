import { useEffect, useRef } from "react";

const getAmbientColor = () =>
  document.documentElement.classList.contains("dark") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "74, 222, 128"
    : "22, 163, 74";

export default function HeroAmbientDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest("#hero");
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let dots = [];
    let width = 0;
    let height = 0;
    let ambientColor = getAmbientColor();
    let mouseX = 10_000;
    let mouseY = 10_000;
    let mouseActive = false;
    let isMobile = false;
    let pushRadius = 72;
    let pushStrength = 0.22;

    function buildDots() {
      const leftContent = hero.querySelector(".order-2");
      const contentRect = leftContent?.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      isMobile = width < 768;
      const count = isMobile ? 34 : 58;

      dots = Array.from({ length: count }, () => {
        let x = 0;
        let y = 0;
        let attempts = 0;

        do {
          x = Math.random() * width;
          y = Math.random() * height;
          attempts += 1;
        } while (
          !isMobile &&
          contentRect &&
          attempts < 16 &&
          x > contentRect.left - heroRect.left - 24 &&
          x < contentRect.right - heroRect.left + 24 &&
          y > contentRect.top - heroRect.top - 24 &&
          y < contentRect.bottom - heroRect.top + 24
        );

        return {
          x,
          y,
          radius: isMobile ? Math.random() * 0.9 + 0.55 : Math.random() * 1.25 + 0.7,
          alpha: isMobile ? Math.random() * 0.16 + 0.14 : Math.random() * 0.35 + 0.25,
          drift: Math.random() * 0.3 + 0.08,
          phase: Math.random() * Math.PI * 2,
          velocityX: (Math.random() - 0.5) * (isMobile ? 0.11 : 0.22),
          velocityY: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.18),
        };
      });
    }

    function resize() {
      width = hero.clientWidth;
      height = hero.clientHeight;
      isMobile = width < 768;
      pushRadius = isMobile ? 48 : 72;
      pushStrength = isMobile ? 0.1 : 0.22;
      canvas.width = width * Math.min(window.devicePixelRatio, 2);
      canvas.height = height * Math.min(window.devicePixelRatio, 2);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(Math.min(window.devicePixelRatio, 2), 0, 0, Math.min(window.devicePixelRatio, 2), 0, 0);
      ambientColor = getAmbientColor();
      buildDots();
    }

    function render(time) {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot, index) => {
        const shimmer = 0.18 * Math.sin(time * 0.0012 * dot.drift + dot.phase + index);
        const alpha = Math.max(0.12, dot.alpha + shimmer);
        const floatX = Math.sin(time * 0.00035 + dot.phase) * 0.12;
        const floatY = Math.cos(time * 0.0004 + dot.phase) * 0.12;

        if (mouseActive) {
          const dx = dot.x - mouseX;
          const dy = dot.y - mouseY;
          const distance = Math.hypot(dx, dy);

          if (distance < pushRadius && distance > 0.001) {
            const influence = (1 - distance / pushRadius) ** 2;
            const impulse = pushStrength * influence;
            dot.velocityX += (dx / distance) * impulse;
            dot.velocityY += (dy / distance) * impulse;
          }
        }

        dot.x += dot.velocityX + floatX;
        dot.y += dot.velocityY + floatY;
        dot.velocityX *= isMobile ? 0.988 : 0.992;
        dot.velocityY *= isMobile ? 0.988 : 0.992;

        if (dot.x < dot.radius || dot.x > width - dot.radius) {
          dot.velocityX *= -1;
          dot.x = Math.min(Math.max(dot.x, dot.radius), width - dot.radius);
        }

        if (dot.y < dot.radius || dot.y > height - dot.radius) {
          dot.velocityY *= -1;
          dot.y = Math.min(Math.max(dot.y, dot.radius), height - dot.radius);
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(${ambientColor}, ${alpha})`;
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    }

    function updateMousePosition(clientX, clientY) {
      const rect = hero.getBoundingClientRect();
      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;
      mouseActive = true;
    }

    const onPointerMove = (event) => {
      if (isMobile) return;
      updateMousePosition(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      mouseActive = false;
      mouseX = 10_000;
      mouseY = 10_000;
    };

    const onTouchMove = (event) => {
      if (isMobile) return;
      const touch = event.touches[0];
      if (!touch) return;
      updateMousePosition(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => {
      onPointerLeave();
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      ambientColor = getAmbientColor();
    };

    resize();
    animationFrame = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", handleThemeChange);
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);
    hero.addEventListener("touchmove", onTouchMove, { passive: true });
    hero.addEventListener("touchend", onTouchEnd, { passive: true });
    hero.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", handleThemeChange);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      hero.removeEventListener("touchmove", onTouchMove);
      hero.removeEventListener("touchend", onTouchEnd);
      hero.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
