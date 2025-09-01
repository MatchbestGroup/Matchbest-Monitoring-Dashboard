"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      name: "Grafana",
      description: "Visualization & Dashboards",
      link: "http://localhost:3001",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Prometheus",
      description: "Metrics Collection",
      link: "http://localhost:9090",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Loki",
      description: "Log Aggregation",
      link: "http://localhost:3100",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Tempo",
      description: "Distributed Tracing",
      link: "http://localhost:3200",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Alertmanager",
      description: "Alert Management",
      link: "http://localhost:9093",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Promtail",
      description: "Log Shipping",
      link: "http://localhost:9080",
      color: "from-teal-500 to-teal-600"
    },
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
      <div className="flex flex-col items-center justify-center px-6 sm:px-10 max-w-7xl mx-auto h-full z-10 py-20">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 sm:space-y-6 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 animate-gradient">
            MatchbestGroup Saathi
          </h1>
          <p className="text-md sm:text-2xl font-semibold text-gray-200">
            Centralized dashboard for <span className="text-blue-400">monitoring your services</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${service.color} hover:opacity-90 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 text-center font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
                <div className="text-xs opacity-75 mt-2">
                  {service.link.replace('http://localhost:', 'Port: ')}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-lg border border-green-400/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">All Services Running</span>
          </div>
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
