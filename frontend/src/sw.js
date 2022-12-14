import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { NetworkOnly } from 'workbox-strategies';
import { registerRoute } from "workbox-routing";

const VERSION = '20221025-1';

console.log(VERSION)

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
clientsClaim()

const bgSyncPlugin = new BackgroundSyncPlugin('offline-todo-queue');

registerRoute(
  /.*\/todos\/.*/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
);

registerRoute(
  /.*\/todos\/.*/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
);

registerRoute(
  /.*\/todos\/.*/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'DELETE'
);
