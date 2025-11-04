import React, { useState, useRef, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  style,
  sizes = '100vw',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const getImageSources = () => {
    const baseName = src.replace(/\.[^/.]+$/, '');
    const extension = src.split('.').pop();
    
    // Generate responsive image sources
    const sources = {
      webp: {
        srcSet: `${baseName}-400w.webp 400w, ${baseName}-800w.webp 800w, ${baseName}-1200w.webp 1200w`,
        fallback: src.replace(`.${extension}`, '.webp')
      },
      original: {
        srcSet: `${baseName}-400w.${extension} 400w, ${baseName}-800w.${extension} 800w, ${baseName}-1200w.${extension} 1200w`,
        fallback: src
      }
    };

    return sources;
  };

  const sources = getImageSources();

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={className}
        style={{
          ...style,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px'
        }}
      >
        {/* Placeholder */}
      </div>
    );
  }

  return (
    <picture>
      <source
        srcSet={sources.webp.srcSet}
        sizes={sizes}
        type="image/webp"
      />
      <source
        srcSet={sources.original.srcSet}
        sizes={sizes}
        type={`image/${src.split('.').pop()}`}
      />
      <img
        ref={imgRef}
        src={sources.original.fallback}
        alt={alt}
        className={className}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease-in-out'
        }}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};

export default ResponsiveImage;
