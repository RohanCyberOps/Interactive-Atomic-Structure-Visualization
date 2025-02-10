import React, { useEffect, useRef } from 'react';
import { Element } from '../types/element';

interface AtomicStructureProps {
  element: Element;
  size?: number;
}

export function AtomicStructure({ element, size = 400 }: AtomicStructureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const drawNucleus = () => {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 10, 0, Math.PI * 2);
      ctx.fillStyle = '#ff4444';
      ctx.fill();
    };

    const drawElectronShell = (shellIndex: number, electronCount: number) => {
      const radius = (size / 4) * ((shellIndex + 1) / 2);
      
      // Draw shell orbit
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();

      // Draw electrons
      const electronSpacing = (Math.PI * 2) / electronCount;
      for (let i = 0; i < electronCount; i++) {
        const electronAngle = angle + (i * electronSpacing);
        const x = size / 2 + radius * Math.cos(electronAngle);
        const y = size / 2 + radius * Math.sin(electronAngle);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffff';
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      
      drawNucleus();
      element.shells.forEach((electronCount, index) => {
        drawElectronShell(index, electronCount);
      });

      angle += 0.02;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [element, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="bg-gray-900 rounded-full"
    />
  );
}