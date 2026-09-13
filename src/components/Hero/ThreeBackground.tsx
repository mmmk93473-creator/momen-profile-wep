import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Particle Cloud (Cyan & Electric Blue)
    const particleCount = window.innerWidth < 768 ? 120 : 320;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x1d63ff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const mixed = cyanColor.clone().lerp(blueColor, Math.random() * 0.7);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;

      scales[i] = Math.random() * 1.8 + 0.4;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(0,240,255,0.8)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    sceneGroup.add(particles);

    // 2. Wireframe Geodesic Sphere (as seen in IMAGE 2)
    const sphereGeo = new THREE.IcosahedronGeometry(3.2, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireframeSphere = new THREE.Mesh(sphereGeo, sphereMat);
    wireframeSphere.position.set(7, -2.5, -4);
    sceneGroup.add(wireframeSphere);

    // Inner glowing core of sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0077ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const sphereCore = new THREE.Mesh(coreGeo, coreMat);
    wireframeSphere.add(sphereCore);

    // 3. Floating 3D Wireframe Cube (bottom left)
    const cubeGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireCube = new THREE.Mesh(cubeGeo, cubeMat);
    wireCube.position.set(-8, -4.5, -2);
    wireCube.rotation.set(0.6, 0.4, 0.2);
    sceneGroup.add(wireCube);

    // 4. Cyan dynamic cursor point light
    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 30);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x0a1428, 1.2);
    scene.add(ambientLight);

    // Mouse tracking with smooth lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse lerp
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;

        sceneGroup.rotation.y = mouseX * 0.15;
        sceneGroup.rotation.x = -mouseY * 0.1;

        pointLight.position.x = mouseX * 12;
        pointLight.position.y = mouseY * 8;

        // Slow object rotations
        wireframeSphere.rotation.y = elapsedTime * 0.12;
        wireframeSphere.rotation.x = elapsedTime * 0.08;
        sphereCore.rotation.y = -elapsedTime * 0.25;

        wireCube.rotation.x = 0.6 + Math.sin(elapsedTime * 0.4) * 0.2;
        wireCube.rotation.y = elapsedTime * 0.18;
        wireCube.position.y = -4.5 + Math.sin(elapsedTime * 0.8) * 0.3;

        // Subtle particle drift
        particles.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Cleanup WebGL
      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

