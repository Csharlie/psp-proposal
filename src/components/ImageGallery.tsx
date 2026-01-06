import { useState, useEffect, useRef } from 'react';
import * as React from 'react';

interface GalleryImage {
  url: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title = "Látványtervek" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [useActualSize, setUseActualSize] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Megakadályozza a háttér görgetését, amikor a lightbox nyitva van
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [selectedImage]);

  const handleDownload = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
      setZoom(1);
      setUseActualSize(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
      setZoom(1);
      setUseActualSize(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setUseActualSize(false);
    setZoom(prev => Math.min(prev + 0.25, 3));
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  const handleZoomOut = () => {
    setUseActualSize(false);
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.25, 0.5);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  const handleResetZoom = () => {
    setZoom(1);
    setUseActualSize(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleActualSize = () => {
    if (useActualSize) {
      // Ha már eredeti méretben van, visszaváltunk fit-to-screen nézetbe
      setUseActualSize(false);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // Eredeti méretre váltás
      setUseActualSize(true);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      // Scroll a tetejére
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = 0;
        }
      }, 0);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1 || useActualSize) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && (zoom > 1 || useActualSize)) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Megakadályozza a háttér görgetését
    if (zoom > 1 || useActualSize) {
      e.stopPropagation();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
      setZoom(1);
      setUseActualSize(false);
      setPosition({ x: 0, y: 0 });
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  if (images.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:break-inside-avoid">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img
              src={image.url}
              alt={image.title || `Látványterv ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200 flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget && zoom === 1) {
              setSelectedImage(null);
              setZoom(1);
              setPosition({ x: 0, y: 0 });
            }
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Top Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-gray-900 bg-opacity-90 rounded-lg p-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                disabled={zoom <= 0.5}
                className="p-2 text-white hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Kicsinyítés"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
                className="px-3 py-2 text-white hover:bg-gray-700 rounded text-sm font-medium min-w-[60px] transition-colors"
                title="Képernyőhöz igazít"
              >
                {useActualSize ? '---' : `${Math.round(zoom * 100)}%`}
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                disabled={zoom >= 3 && !useActualSize}
                className="p-2 text-white hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Nagyítás"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              
              <div className="w-px h-6 bg-gray-700 mx-1"></div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleActualSize();
                }}
                className={`p-2 text-white hover:bg-gray-700 rounded transition-colors ${useActualSize ? 'bg-blue-600' : ''}`}
                title={useActualSize ? "Képernyőhöz igazít" : "Eredeti méret (100%)"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(
                  images[selectedImage].url,
                  images[selectedImage].title 
                    ? `${images[selectedImage].title}.jpg` 
                    : `latványterv-${selectedImage + 1}.jpg`
                );
              }}
              className="p-2 bg-gray-900 bg-opacity-90 text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Letöltés"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                setZoom(1);
                setPosition({ x: 0, y: 0 });
              }}
              className="p-2 bg-gray-900 bg-opacity-90 text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Bezárás (Esc)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10 bg-gray-900 bg-opacity-50 rounded-lg"
              aria-label="Előző"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10 bg-gray-900 bg-opacity-50 rounded-lg"
              aria-label="Következő"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-auto flex items-start justify-center"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              cursor: (zoom > 1 || useActualSize) ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          >
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title || `Látványterv ${selectedImage + 1}`}
              className={`transition-transform duration-200 select-none ${useActualSize ? 'block' : 'object-contain'}`}
              draggable={false}
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px) ${useActualSize ? 'scale(1)' : `scale(${zoom})`}`,
                transformOrigin: 'top center',
                maxWidth: useActualSize ? 'none' : '100%',
                maxHeight: useActualSize ? 'none' : '100%',
                width: useActualSize ? 'auto' : 'auto',
                height: useActualSize ? 'auto' : '100%',
                marginTop: (zoom === 1 && !useActualSize) ? 'auto' : '0',
                marginBottom: (zoom === 1 && !useActualSize) ? 'auto' : '0'
              }}
            />
          </div>
            
          {/* Bottom Info Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 bg-opacity-90 px-6 py-3 rounded-lg z-20">
            <div className="text-white text-center">
              {images[selectedImage].title && (
                <h3 className="font-semibold text-sm">{images[selectedImage].title}</h3>
              )}
              {images[selectedImage].description && (
                <p className="text-xs text-gray-300 mt-1">{images[selectedImage].description}</p>
              )}
              <p className="text-xs text-gray-400 mt-1">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
