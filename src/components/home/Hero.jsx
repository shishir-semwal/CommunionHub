import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Hero component for the homepage
 * Displays a dynamic interactive visualization with connected images
 */
const Hero = () => {
  // Image sources array for the visualization
  const images = [
    "https://media.istockphoto.com/id/1362365251/photo/abstract-technology-wave-of-particles-big-data-visualization-background-with-motion-dots-and.jpg?s=612x612&w=0&k=20&c=3ShNhBUzNGdBD-QiYKJ7OMmv9zxaYPpW4Qr1MA_2w54=",
    "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHJlbGlnaW9ufGVufDB8fDB8fHww",
    "https://cdn.pixabay.com/photo/2022/06/18/13/12/humanoid-7269778_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/21/28/ai-5202865_1280.jpg",
    "https://plus.unsplash.com/premium_photo-1679604270193-0bee3d5c81dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRhcmslMjBiYWNrZ3JvdW5kJTIwcmVsaWdpb258ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/2165741143/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=hHrNLvs_QUpGjkrYmDGs9V-smxl82MjJydFvlo_1SDY=",
    "https://cdn.pixabay.com/photo/2022/06/16/14/16/humanoid-7266068_640.jpg",
    "https://cdn.pixabay.com/photo/2017/01/14/13/05/cross-1979473_640.jpg",
  ];

  // Refs and state for the visualization
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [imagePositions, setImagePositions] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Calculate image positions and container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Check screen size
        const smallScreen = window.innerWidth < 768;
        setIsSmallScreen(smallScreen);
        
        // Get the container dimensions
        const container = containerRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        setDimensions({ width, height });
        
        // Calculate the center point and radius
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.35; // Keep your original radius
        
        // Calculate positions for each image around the circle
        const positions = images.map((_, index) => {
          const angle = (index * 2 * Math.PI / images.length);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          
          return { x, y, angle };
        });
        
        setImagePositions(positions);
      }
    };
    
    // Initial calculation
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, [images.length]);
  
  // Draw connection lines between images
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || imagePositions.length === 0 || dimensions.width === 0) return;
    
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions to match container
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Function to draw the connecting lines
    const drawConnections = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      
      // Draw connecting lines
      context.beginPath();
      context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      context.lineWidth = 2;
      
      // Connect each point to the center
      imagePositions.forEach(pos => {
        context.moveTo(centerX, centerY);
        context.lineTo(pos.x, pos.y);
      });
      
      // Connect points to adjacent points (circle shape)
      imagePositions.forEach((pos, i) => {
        const nextPos = imagePositions[(i + 1) % imagePositions.length];
        context.moveTo(pos.x, pos.y);
        context.lineTo(nextPos.x, nextPos.y);
      });
      
      context.stroke();
    };
    
    drawConnections();
  }, [dimensions, imagePositions]);
  
  // Conditional rendering for small screens (mobile view)
  if (isSmallScreen) {
    return (
      <div className="hero bg-base-200 min-h-screen mt-2">
        <div className="hero-content flex-col text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile headline */}
            <h1 className="text-2xl font-bold mb-4">
              Connecting People Across Faiths & Interests
            </h1>
            
            {/* Animated headings */}
            <div className="flex flex-col gap-4 mb-6">
              <motion.h2 
                className="text-xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Unifying Communities
              </motion.h2>
              <motion.h2 
                className="text-xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Innovative and Fun
              </motion.h2>
              <motion.h2 
                className="text-xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Promoting Unity
              </motion.h2>
            </div>
          </motion.div>
          
          {/* Image grid for small screens */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {images.slice(0, 6).map((img, index) => (
              <div key={index} className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={`Community image ${index+1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Mobile CTA section */}
          <p className="py-4 text-[#9ea2a8] text-sm">
            Bridging gaps between faiths with tech and a dash of fun!
          </p>
          <Link to="/event">
            <button className="btn btn-sm bg-[#048cf4] text-white hover:bg-[#0378d6]">
              Explore Events
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Desktop layout
  return (
    <div className="flex w-full min-h-screen bg-base-200 mt-4">
      {/* Left side with large text headings */}
      <div className="w-2/5 flex flex-col justify-center ml-10">
        <div className="relative">
          {/* Background gradient for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-base-300 to-transparent opacity-20 rounded-lg"></div>
          
          {/* Headings */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-10"
            >
              <h2 className="text-6xl font-bold text-white leading-tight">
              Bridging gaps between faiths with tech and a dash of fun!
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Right side with the visualization */}
      <div className="hero w-5/6 ">
        <div className="hero-content w-full flex justify-center items-center">
          {/* Main container with relative positioning */}
          <div 
            ref={containerRef}
            className="relative w-full max-w-5xl aspect-[4/3] flex justify-center items-center"
          >
            {/* Canvas for drawing connection lines */}
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full z-0 ml-28"
            />
            
            {/* Images in circle */}
            {imagePositions.map((position, index) => (
              <motion.div 
                key={index}
                className="absolute w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl z-20"
                style={{
                  left: `${position.x+24}px`,
                  top: `${position.y-65}px`,
                  transform: 'translate(-50%, -50%)' // This centers the image on its position
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <img
                  src={images[index]}
                  className="w-full h-full object-cover"
                  alt={`Community image ${index+1}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
            
            {/* Semi-transparent background circle for text */}
            <div className="absolute w-80 h-80 rounded-full bg-base-300 bg-opacity-75 z-10 flex items-center justify-center ml-44">
              {/* This is just a background element */}
            </div>
            
            {/* Central text content */}
            <div className="text-center z-30 max-w-md mt-12 ml-52">
              <h1 className="text-xl md:text-4xl font-bold">
                Connecting People Across Faiths & Interests
              </h1>
              <p className="py-4 text-[#9ea2a8]">
                
              </p>
              <Link to="/event">
                <button className="btn btn-sm md:btn-md bg-[#048cf4] text-white hover:bg-[#0378d6]">
                  Explore Events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;