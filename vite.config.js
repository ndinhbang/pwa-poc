import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig(
  ({command, mode, ssrBuild}) => ({
    plugins: [
      react(),
      VitePWA({
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.js',
        registerType: 'autoUpdate',
        scope: '/',
        injectManifest: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
        },
        includeAssets: ['favicon.ico'],
        manifest: {
          name: "PWA Web Application",
          short_name: "PWA_App",
          theme_color: "#50e3c2",
          background_color: "#fff",
          display: "standalone",
          orientation: "any",
          lang: "vi-VN",
          start_url: "/",
          icons: [
            {
              src: "/images/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/images/icons/maskable/icon_x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "/images/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src: "/images/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        },
        // injectRegister: null,
        workbox: {
          cleanupOutdatedCaches: true,
          // globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
        },
        // enable the service worker on development, PWA will not be registered, only the service worker logic
        devOptions: {
          enabled: false
        }
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      }
    },
    server: {
      https: {
        key: readFileSync('C:\\laragon\\etc\\ssl\\laragon.key'),
        cert: readFileSync('C:\\laragon\\etc\\ssl\\laragon.crt'),
      },
    }
  })
)
