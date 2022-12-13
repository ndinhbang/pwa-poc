import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

const VERSION = '20221025-1';

console.log(VERSION)

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
clientsClaim()
