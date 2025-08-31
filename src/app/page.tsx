"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const grafanaUrl = "http://localhost:3000";

  const dashboards = [
    { name: "Prometheus", link: `${grafanaUrl}/d/prometheus-metrics` },
    { name: "Loki", link: `${grafanaUrl}/d/loki-metrics` },
    { name: "Tempo", link: `${grafanaUrl}/d/tempo-metrics` },
    { name: "Prometheus UI", link: "http://localhost:9090" },
  ];

  return (
    <div className="relative h-screen w-full text-white overflow-hidden ">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full z-[-1] brightness-50"
      >
        <source src="bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Logo top-left */}
      <div className="absolute top-0 left-0 p-4 sm:p-6 z-10">
        <img src="/logo.png" alt="Logo" className="h-12 sm:h-16" />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 max-w-6xl mx-auto h-full z-10">
        {/* Left content */}
        <motion.div
          className="flex-1 text-left space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 animate-gradient">
            MatchbestGroup Saathi
          </h1>
          <p className="text-md sm:text-2xl font-semibold text-gray-200">
            Centralized dashboard for <span className="text-blue-400">monitoring your services</span>
          </p>
        </motion.div>

        {/* Right buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mt-6 md:mt-0 md:flex-col w-full max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {dashboards.map((dash, index) => (
            <motion.a
              key={index}
              href={dash.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg py-3 px-5 text-center font-medium text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dash.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-6 text-gray-400 text-xs sm:text-sm z-10">
        &copy; {new Date().getFullYear()} MatchbestGroup. All rights reserved.
      </footer>

      {/* Gradient animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
