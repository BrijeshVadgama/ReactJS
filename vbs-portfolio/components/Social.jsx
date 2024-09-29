import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
  const socialIcons = [
    { name: "https://github.com/BrijeshVadgama", icon: FaGithub },
    { name: "https://www.linkedin.com/in/brijeshvadgama", icon: FaLinkedin },
    { name: "https://www.instagram.com/brijeshvadgama_", icon: FaInstagram },
  ];

  return (
    <div className="flex space-x-4">
      {socialIcons.map((icon, index) => {
        const Icon = icon.icon;
        return (
          <a
            key={index}
            href={`${icon.name.toLowerCase()}`}
            title={icon.name}
            className="text-white transition-colors duration-300 hover:text-accent"
            target="_blank"
          >
            <Icon className="text-2xl" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
