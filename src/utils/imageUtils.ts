// Utility functions for image optimization and WebP support

export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

export const getOptimizedImageSrc = (src: string, format: 'webp' | 'original' = 'webp'): string => {
  if (format === 'webp' && supportsWebP()) {
    // Convert jpg/png to webp path
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const createImageSrcSet = (baseSrc: string, sizes: number[] = [400, 800, 1200]): string => {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${baseName}-${size}w.${extension} ${size}w`)
    .join(', ');
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};
