import React, { useState, MouseEvent } from "react";

// Optional: Define a type for info item if you want
type InfoItem = {
  title: string;
  value: string;
};

const infoItems: InfoItem[] = [
  { title: "Location", value: "Palghar, Mumbai" },
  { title: "Price Starting At", value: "₹ 26* L" },
  { title: "Apartment Type", value: "1 & 2 BHK" },
  { title: "Carpet Area", value: "410 sq.ft & 656 sq.ft" },
];

// A small helper component for 3D tilt

export const TiltCard: React.FC<{ item: InfoItem }> = ({ item }) => {
  // state to track rotation angles
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // mouse move handler with proper typing
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to center of the card
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees (tweak the divisor for effect intensity)
    const rotateX = ((y - centerY) / centerY) * 10; // around X-axis
    const rotateY = ((centerX - x) / centerX) * 10; // around Y-axis

    setRotation({ x: rotateX, y: rotateY });
  };

  // reset rotation on mouse leave
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
        transition: rotation.x === 0 && rotation.y === 0 ? "transform 0.3s ease" : "none",
        perspective: 1000,
      }}
      className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer"
    >
      <h4 className="text-lg font-semibold text-lime-700 mb-1">{item.title}</h4>
      <p className="text-gray-700">{item.value}</p>
    </div>
  );
};
