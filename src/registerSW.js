import { registerSW } from 'virtual:pwa-register'

const intervalMS = 2 * 60 * 1000 // 2 minutes

const updateSW = registerSW({
    onRegistered(r) {
        r && setInterval(() => {
            r.update()
            console.log('[sw] updating ...')
        }, intervalMS)
    }
})
