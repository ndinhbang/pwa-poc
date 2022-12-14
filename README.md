# pwa-poc

cd frontend

```pnpm install``` 

(or ```npm install``` if you dont have pnpm)

then make sure to update ssl cert and key path in ```.env``` file, because service worker only work in https.
you can create a self-signed certificate for localhost

then run following commands:

```
pnpm build
pnpm preview
``` 

to see the bacground sync function to work, you should turn off the internet, then make some post requests.

Those request will failed, but when you turn on internet again, they will automatically be retried
