import { ExternalLink } from "lucide-react";
import Image from "next/image";
import PixelatedCard from "./pixelated-card";

import Ecommerce from "@/public/assets/Ecommerce.jpg";
import libraryManagement from "@/public/assets/libraryManagement.jpg";
import weatherForecasting from "@/public/assets/weatherForecasting.jpg";
import web3 from "@/public/assets/web3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A scalable platform for online shopping with secure payment gateway integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: Ecommerce,
    },
    {
      title: "Library Management System",
      description: "An efficient library system for managing books, members, and transactions.",
      tags: ["Java", "MySQL", "Spring Boot"],
      link: "#",
      image: libraryManagement,
    },
    {
      title: "Weather Forecasting App",
      description: "An application that provides real-time weather updates and forecasts.",
      tags: ["JavaScript", "API", "React"],
      link: "#",
      image: weatherForecasting,
    },
    {
      title: "Web3 Blockchain Platform",
      description: "A decentralized application built on blockchain technology.",
      tags: ["Solidity", "Ethereum", "Web3.js"],
      link: "#",
      image: web3,
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-pixel text-pixel-green mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PixelatedCard key={index} className="h-full flex flex-col">
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-pixel text-pixel-blue mb-2 mt-1">{project.title}</h3>
              <p className="font-pixel-text mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-green-950 text-pixel-green rounded-sm font-pixel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pixel-blue hover:text-pixel-green font-pixel text-sm mt-auto"
              >
                View Project <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </PixelatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
