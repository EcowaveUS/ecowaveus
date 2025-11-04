import { useEffect } from 'react';

// Global gtag function declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface PerformanceMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const reportMetrics = (metrics: PerformanceMetrics) => {
      // Send to analytics service (Google Analytics, etc.)
      if (typeof window.gtag !== 'undefined') {
        Object.entries(metrics).forEach(([metric, value]) => {
          window.gtag!('event', 'web_vital', {
            name: metric,
            value: Math.round(value),
            event_category: 'Web Vitals'
          });
        });
      }
      
      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

      const metrics: PerformanceMetrics = {};
      
      if (fcpEntry) {
        metrics.FCP = fcpEntry.startTime;
      }
      
      if (ttfb) {
        metrics.TTFB = ttfb;
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.LCP = lastEntry.startTime;
            reportMetrics(metrics);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              metrics.FID = entry.processingStart - entry.startTime;
              reportMetrics(metrics);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            metrics.CLS = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Report initial metrics after a delay
          setTimeout(() => {
            reportMetrics(metrics);
          }, 5000);

        } catch (error) {
          console.warn('Performance Observer not supported:', error);
        }
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
