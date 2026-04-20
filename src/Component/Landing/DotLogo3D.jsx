import { useEffect, useRef } from "react";
import * as THREE from "three";
import logoLight from "../../assets/KnytXStudio_logo_original.svg";

const getPreferredTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const THEMES = {
  dark: {
    logo: new THREE.Color(0xffffff),
    ambient: new THREE.Color(0x4ade80),
    accent: new THREE.Color(0x4ade80),
  },
  light: {
    logo: new THREE.Color(0x000000),
    ambient: new THREE.Color(0x16a34a),
    accent: new THREE.Color(0x4ade80),
  },
};

function sampleLogoUniform(img, scale, step = 2) {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, size, size);

  const { data } = ctx.getImageData(0, 0, size, size);
  const points = [];

  for (let y = 0; y < size; y += step) {
    for (let x = 0; x < size; x += step) {
      const index = (y * size + x) * 4;
      const alpha = data[index + 3];
      const brightness = data[index] + data[index + 1] + data[index + 2];
      const isVisiblePixel = alpha > 20 && brightness > 30 && brightness < 735;

      if (isVisiblePixel) {
        const jitterX = (Math.random() - 0.5) * step * 0.9;
        const jitterY = (Math.random() - 0.5) * step * 0.9;
        const baseX = (x / size - 0.5) * scale;
        const baseY = -(y / size - 0.5) * scale;
        const spread = (scale / size) * 1.6;

        points.push(
          new THREE.Vector3(
            ((x + jitterX) / size - 0.5) * scale,
            -((y + jitterY) / size - 0.5) * scale,
            0
          )
        );

        if ((x + y) % (step * 3) === 0) {
          points.push(
            new THREE.Vector3(
              baseX + spread,
              baseY,
              0
            )
          );
          points.push(
            new THREE.Vector3(
              baseX - spread,
              baseY,
              0
            )
          );
          points.push(
            new THREE.Vector3(
              baseX,
              baseY + spread,
              0
            )
          );
          points.push(
            new THREE.Vector3(
              baseX,
              baseY - spread,
              0
            )
          );
        }
      }
    }
  }

  return points;
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

function easeOutCubic(value) {
  return 1 - (1 - value) ** 3;
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - ((-2 * value + 2) ** 3) / 2;
}

function isAccentPoint(point, scale) {
  const nx = point.x / scale;
  const ny = point.y / scale;

  const inAccentBounds =
    nx > -0.02 &&
    nx < 0.49 &&
    ny > -0.44 &&
    ny < 0.03;
  const belowTopEdge = ny > (-1.88 * nx - 0.035);
  const aboveBottomEdge = ny < (-0.6 * nx + 0.02);
  const trimInnerJoin = ny < (-0.92 * nx + 0.04);
  const trimFarTip = !(nx > 0.46 && ny < -0.39);
  const trimStart = !(nx < 0.03 && ny > -0.08);

  return (
    inAccentBounds &&
    belowTopEdge &&
    aboveBottomEdge &&
    trimInnerJoin &&
    trimFarTip &&
    trimStart
  );
}

export default function DotLogo3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = width < 768;
    const scale = Math.min(width, height) * 0.82;
    const step = 2;
    const ambientCount = isMobile ? 96 : 220;
    const feederCount = isMobile ? 48 : 90;
    const introDuration = 2.1;
    const logoAnchorX = 0;
    const logoAnchorY = 0;
    const pointerTiltYMax = isMobile ? 0.11 : 0.18;
    const pointerTiltXMax = isMobile ? 0.05 : 0.08;
    const ambientPushRadius = Math.min(width, height) * (isMobile ? 0.16 : 0.22);
    const ambientPushStrength = Math.min(width, height) * (isMobile ? 0.006 : 0.012);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 440;

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      size: isMobile ? 1.9 : 2.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true,
    });
    const cloud = new THREE.Points(geometry, material);
    scene.add(cloud);

    const meteorHead = new THREE.Mesh(
      new THREE.SphereGeometry(isMobile ? 4 : 5.5, 16, 16),
      new THREE.MeshBasicMaterial({
        color: THEMES[getPreferredTheme()].accent,
        transparent: true,
        opacity: 0.9,
      })
    );
    scene.add(meteorHead);

    const meteorTrailGeometry = new THREE.BufferGeometry();
    meteorTrailGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(6), 3)
    );
    const meteorTrail = new THREE.Line(
      meteorTrailGeometry,
      new THREE.LineBasicMaterial({
        color: THEMES[getPreferredTheme()].accent,
        transparent: true,
        opacity: 0.5,
      })
    );
    scene.add(meteorTrail);

    let targets = [];
    let logoCount = 0;
    let introStart = performance.now();
    let introActive = true;
    let settleStart = 0;
    let activeTheme = getPreferredTheme();
    let heroWidth = width * 2.4;
    let heroHeight = Math.max(height * 1.8, window.innerHeight * 0.75);
    let feederActivated = [];
    let feederActivationTimes = [];
    let feederTargetOffsets = [];
    let feederIsAccent = [];
    let accentMask = [];
    let accentTargetIndices = [];
    let baseTargetIndices = [];
    let pointerTargetTiltX = 0;
    let pointerTargetTiltY = 0;
    let pointerTiltX = 0;
    let pointerTiltY = 0;
    let pointerSceneX = 10_000;
    let pointerSceneY = 10_000;
    let pointerSceneTargetX = 10_000;
    let pointerSceneTargetY = 10_000;
    let pointerActive = false;
    let meteorStartPoint = new THREE.Vector3(-heroWidth * 0.58, heroHeight * 0.38, 120);
    let meteorEndPoint = new THREE.Vector3(heroWidth * 0.18, -heroHeight * 0.08, 10);

    function updateHeroBounds() {
      const heroSection = container.closest("#hero");
      const rect = heroSection?.getBoundingClientRect();

      heroWidth = rect?.width || Math.max(window.innerWidth, width * 2.4);
      heroHeight = rect?.height || Math.max(window.innerHeight, height * 1.8);
      meteorStartPoint = new THREE.Vector3(-heroWidth * 0.58, heroHeight * 0.38, 120);
      meteorEndPoint = new THREE.Vector3(heroWidth * 0.18, -heroHeight * 0.08, 10);
    }

    updateHeroBounds();

    function createSpawnPosition(index, total) {
      const angle = (index / Math.max(total, 1)) * Math.PI * 10 + Math.random() * 1.4;
      const spreadX = heroWidth * (0.5 + Math.random() * 0.35);
      const spreadY = heroHeight * (0.5 + Math.random() * 0.35);

      return new THREE.Vector3(
        Math.cos(angle) * spreadX,
        Math.sin(angle) * spreadY,
        (Math.random() - 0.5) * 480
      );
    }

    function createMeteorSpawnPosition(index, total) {
      const progress = index / Math.max(total - 1, 1);
      const along = meteorStartPoint.clone().lerp(meteorEndPoint, progress * 0.9);
      const tangent = meteorEndPoint.clone().sub(meteorStartPoint).normalize();
      const normal = new THREE.Vector3(-tangent.y, tangent.x, 0);
      const spreadAlong = (Math.random() - 0.5) * heroWidth * 0.12;
      const spreadNormal = (Math.random() - 0.5) * heroHeight * 0.08;
      const depthNoise = (Math.random() - 0.5) * 120;

      return along
        .add(tangent.multiplyScalar(spreadAlong))
        .add(normal.multiplyScalar(spreadNormal))
        .add(new THREE.Vector3(0, 0, depthNoise));
    }

    function createAmbientTarget() {
      let target;
      let attempts = 0;

      do {
        target = new THREE.Vector3(
          (Math.random() - 0.5) * heroWidth * 1.08,
          (Math.random() - 0.5) * heroHeight * 1.08,
          (Math.random() - 0.5) * 180
        );
        attempts += 1;
      } while (
        attempts < 12 &&
        Math.hypot(target.x - logoAnchorX, target.y - logoAnchorY) < scale * 0.72
      );

      return target;
    }

    function setParticleColor(index, color) {
      const colorBuffer = geometry.attributes.color?.array;
      if (!colorBuffer) return;

      colorBuffer[index * 3] = color.r;
      colorBuffer[index * 3 + 1] = color.g;
      colorBuffer[index * 3 + 2] = color.b;
    }

    function applyThemeColors(theme) {
      if (!geometry.attributes.color) return;

      const colorBuffer = geometry.attributes.color.array;
      const { logo, ambient, accent } = THEMES[theme];
      const feederStart = logoCount;
      const feederEnd = logoCount + feederCount;

      for (let i = 0; i < colorBuffer.length / 3; i++) {
        const feederIndex = i - feederStart;
        const isActivatedFeeder =
          i >= feederStart &&
          i < feederEnd &&
          feederActivated[feederIndex];
        const isAccentLogo = i < logoCount && accentMask[i];
        const isAccentFeeder =
          i >= feederStart &&
          i < feederEnd &&
          feederIsAccent[feederIndex];
        const color = isAccentLogo
          ? accent
          : isAccentFeeder
            ? accent
            : i < logoCount || isActivatedFeeder
            ? logo
            : ambient;
        colorBuffer[i * 3] = color.r;
        colorBuffer[i * 3 + 1] = color.g;
        colorBuffer[i * 3 + 2] = color.b;
      }

      geometry.attributes.color.needsUpdate = true;
    }

    const heroSection = container.closest("#hero");

    function updatePointerTilt(clientX, clientY) {
      if (isMobile) return;
      const rect = heroSection?.getBoundingClientRect() || container.getBoundingClientRect();
      const normalizedX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const normalizedY = ((clientY - rect.top) / rect.height - 0.5) * 2;

      pointerTargetTiltY = normalizedX * pointerTiltYMax;
      pointerTargetTiltX = -normalizedY * pointerTiltXMax;
      pointerSceneTargetX = normalizedX * (heroWidth * 0.5);
      pointerSceneTargetY = -normalizedY * (heroHeight * 0.5);
      pointerActive = true;
    }

    async function loadTheme(theme) {
      const img = await loadImage(logoLight);

      const rawLogoTargets = sampleLogoUniform(img, scale, step);
      accentMask = rawLogoTargets.map((point) => isAccentPoint(point, scale));
      accentTargetIndices = accentMask
        .map((isAccent, index) => (isAccent ? index : -1))
        .filter((index) => index !== -1);
      baseTargetIndices = accentMask
        .map((isAccent, index) => (!isAccent ? index : -1))
        .filter((index) => index !== -1);
      const logoTargets = rawLogoTargets.map(
        (point) =>
          new THREE.Vector3(
            point.x + logoAnchorX,
            point.y + logoAnchorY,
            point.z
          )
      );
      const ambientTargets = Array.from({ length: ambientCount }, createAmbientTarget);

      targets = [...logoTargets, ...ambientTargets];
      logoCount = logoTargets.length;
      introStart = performance.now();
      introActive = true;
      settleStart = 0;
      feederActivated = Array.from({ length: feederCount }, () => false);
      feederIsAccent = Array.from(
        { length: feederCount },
        (_, index) => index < Math.round(feederCount * 0.28)
      );
      feederActivationTimes = Array.from(
        { length: feederCount },
        (_, index) => introDuration + 0.15 + index * 0.035 + Math.random() * 0.2
      );
      feederTargetOffsets = Array.from({ length: feederCount }, () => ({
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 8,
      }));

      const total = targets.length;
      const positions = new Float32Array(total * 3);
      const colors = new Float32Array(total * 3);
      const { logo, ambient, accent } = THEMES[theme];
      meteorHead.material.color.copy(accent);
      meteorTrail.material.color.copy(accent);
      meteorHead.material.opacity = 0.9;
      meteorTrail.material.opacity = 0.5;
      meteorHead.visible = true;
      meteorTrail.visible = true;

      for (let i = 0; i < total; i++) {
        const spawn = createMeteorSpawnPosition(i, total);
        positions[i * 3] = spawn.x;
        positions[i * 3 + 1] = spawn.y;
        positions[i * 3 + 2] = spawn.z;

        const feederIndex = i - logoCount;
        const isAccentFeeder =
          i >= logoCount &&
          i < logoCount + feederCount &&
          feederIsAccent[feederIndex];
        const color = i < logoCount
          ? accentMask[i] ? accent : logo
          : isAccentFeeder
            ? accent
          : ambient;
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
    }

    loadTheme(activeTheme);

    const syncTheme = () => {
      const nextTheme = getPreferredTheme();
      if (nextTheme === activeTheme) return;

      activeTheme = nextTheme;
      loadTheme(activeTheme);
    };

    const observer = new MutationObserver(() => {
      syncTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      syncTheme();
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const introElapsed = (performance.now() - introStart) / 1000;
      const introProgress = Math.min(introElapsed / introDuration, 1);
      const introStrength = introActive ? easeInOutCubic(introProgress) : 1;
      const settleElapsed = settleStart ? (performance.now() - settleStart) / 1000 : 0;
      const settleProgress = Math.min(settleElapsed / 1.8, 1);
      const settleStrength = settleStart ? 1 - easeOutCubic(settleProgress) : 0;
      const meteorProgress = easeInOutCubic(
        Math.min(introElapsed / Math.max(introDuration * 0.86, 0.1), 1)
      );
      const positions = geometry.attributes.position?.array;
      const feederStart = logoCount;
      const feederEnd = Math.min(logoCount + feederCount, targets.length);
      const { logo } = THEMES[activeTheme];

      if (!positions) {
        renderer.render(scene, camera);
        return;
      }

      const total = positions.length / 3;

      for (let i = 0; i < total; i++) {
        if (!targets[i]) continue;

        const offset = i * 3;
        const isLogoParticle = i < logoCount;
        const feederIndex = i - feederStart;
        const isFeederParticle = i >= feederStart && i < feederEnd;
        const isAmbientParticle = i >= logoCount && !isFeederParticle;

        if (
          isFeederParticle &&
          !feederActivated[feederIndex] &&
          introElapsed >= feederActivationTimes[feederIndex]
        ) {
          const candidateIndices = feederIsAccent[feederIndex]
            ? accentTargetIndices
            : baseTargetIndices;
          const fallbackIndices = feederIsAccent[feederIndex]
            ? baseTargetIndices
            : accentTargetIndices;
          const sourceIndices = candidateIndices.length
            ? candidateIndices
            : fallbackIndices;
          const targetIndex =
            sourceIndices[Math.floor(Math.random() * Math.max(sourceIndices.length, 1))];
          const baseTarget = targets[targetIndex];
          const feederOffset = feederTargetOffsets[feederIndex];

          targets[i] = new THREE.Vector3(
            baseTarget.x + feederOffset.x,
            baseTarget.y + feederOffset.y,
            baseTarget.z + feederOffset.z
          );
          feederActivated[feederIndex] = true;
          setParticleColor(
            i,
            feederIsAccent[feederIndex] ? THEMES[activeTheme].accent : logo
          );
          geometry.attributes.color.needsUpdate = true;
        }

        const driftX = isLogoParticle ? Math.sin(elapsed * 0.5 + i * 0.11) * 0.28 : 0;
        const driftY = isLogoParticle ? Math.cos(elapsed * 0.4 + i * 0.09) * 0.28 : 0;
        const targetX = targets[i].x + driftX;
        const targetY = targets[i].y + driftY;
        const targetZ = targets[i].z;
        const speed = introActive
          ? 0.014 + introStrength * 0.075 + (i / Math.max(total, 1)) * 0.012
          : 0.055;
        let ambientOffsetX = 0;
        let ambientOffsetY = 0;

        if (isAmbientParticle) {
          const dx = targetX - pointerSceneX;
          const dy = targetY - pointerSceneY;
          const distance = Math.hypot(dx, dy);

          if (pointerActive && distance < ambientPushRadius && distance > 0.001) {
            const influence = (1 - distance / ambientPushRadius) ** 2;
            const push = ambientPushStrength * influence;
            ambientOffsetX = (dx / distance) * push;
            ambientOffsetY = (dy / distance) * push;
          }
        }

        positions[offset] += (targetX + ambientOffsetX - positions[offset]) * speed;
        positions[offset + 1] += (targetY + ambientOffsetY - positions[offset + 1]) * speed;
        positions[offset + 2] += (targetZ - positions[offset + 2]) * speed;
      }

      if (introProgress >= 1) {
        introActive = false;
        if (!settleStart) {
          settleStart = performance.now();
        }
      }

      if (introActive) {
        const headPosition = meteorStartPoint.clone().lerp(meteorEndPoint, meteorProgress);
        const tailPosition = meteorStartPoint.clone().lerp(
          meteorEndPoint,
          Math.max(0, meteorProgress - 0.12)
        );
        meteorHead.position.copy(headPosition);
        const trailPositions = meteorTrailGeometry.attributes.position.array;
        trailPositions[0] = tailPosition.x;
        trailPositions[1] = tailPosition.y;
        trailPositions[2] = tailPosition.z;
        trailPositions[3] = headPosition.x;
        trailPositions[4] = headPosition.y;
        trailPositions[5] = headPosition.z;
        meteorTrailGeometry.attributes.position.needsUpdate = true;
      } else {
        meteorHead.material.opacity += (0 - meteorHead.material.opacity) * 0.08;
        meteorTrail.material.opacity += (0 - meteorTrail.material.opacity) * 0.08;
        if (meteorHead.material.opacity < 0.02) {
          meteorHead.visible = false;
          meteorTrail.visible = false;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      pointerTiltX += (pointerTargetTiltX - pointerTiltX) * 0.08;
      pointerTiltY += (pointerTargetTiltY - pointerTiltY) * 0.08;
      pointerSceneX += (pointerSceneTargetX - pointerSceneX) * 0.14;
      pointerSceneY += (pointerSceneTargetY - pointerSceneY) * 0.14;
      cloud.position.x = 0;
      cloud.position.y = 0;
      cloud.rotation.y =
        Math.sin(elapsed * 0.15) * (introActive ? 0.12 : 0.06) +
        settleStrength * 0.14 +
        pointerTiltY;
      cloud.rotation.x =
        Math.sin(elapsed * 0.1) * (introActive ? 0.05 : 0.025) -
        settleStrength * 0.05 +
        pointerTiltX;
      renderer.render(scene, camera);
    };

    animate();

    const onPointerMove = (event) => {
      if (isMobile) return;
      updatePointerTilt(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      pointerTargetTiltX = 0;
      pointerTargetTiltY = 0;
      pointerActive = false;
      pointerSceneTargetX = 10_000;
      pointerSceneTargetY = 10_000;
    };

    const onTouchMove = (event) => {
      if (isMobile) return;
      const touch = event.touches[0];
      if (!touch) return;
      updatePointerTilt(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => {
      pointerTargetTiltX = 0;
      pointerTargetTiltY = 0;
      pointerActive = false;
      pointerSceneTargetX = 10_000;
      pointerSceneTargetY = 10_000;
    };

    const onResize = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      updateHeroBounds();
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    const interactionTarget = heroSection || container;

    window.addEventListener("resize", onResize);
    interactionTarget.addEventListener("pointermove", onPointerMove);
    interactionTarget.addEventListener("pointerleave", onPointerLeave);
    interactionTarget.addEventListener("touchmove", onTouchMove, { passive: true });
    interactionTarget.addEventListener("touchend", onTouchEnd, { passive: true });
    interactionTarget.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
      window.removeEventListener("resize", onResize);
      interactionTarget.removeEventListener("pointermove", onPointerMove);
      interactionTarget.removeEventListener("pointerleave", onPointerLeave);
      interactionTarget.removeEventListener("touchmove", onTouchMove);
      interactionTarget.removeEventListener("touchend", onTouchEnd);
      interactionTarget.removeEventListener("touchcancel", onTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      meteorHead.geometry.dispose();
      meteorHead.material.dispose();
      meteorTrailGeometry.dispose();
      meteorTrail.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
