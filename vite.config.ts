import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80, progressive: true },
      pngquant: { 
        quality: [0.5, 0.7], 
        speed: 4,
        strip: true 
      },
      optipng: { optimizationLevel: 7 },
      webp: { 
        quality: 80,
        method: 6,
        autoFilter: true
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
          { name: 'removeUselessStrokeAndFill', active: true }
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico}'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB limit
        globIgnores: [
          '**/images/**',
          '**/assets/expertise-*.svg',
          '**/assets/service-map-*.svg'
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days for images
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@mui/material', 'antd'],
          maps: ['@react-google-maps/api'],
          forms: ['formik', 'yup'],
          icons: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true
      },
      mangle: {
        safari10: true
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    },
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    }
  }
})
