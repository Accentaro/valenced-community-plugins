import { getModules } from '@valenced/modules/finders'
import { withProps } from '@valenced/modules/finders/filters'
import { instead } from '@valenced/patcher'
import { noop } from '@valenced/utils/callback'

interface IdleTimer {
	start(...args: unknown[]): unknown
	stop(): unknown
}

interface CallIdleManager {
	idleTimeout: IdleTimer
	handleVoiceStateUpdates: unknown
	default?: { idleTimeout: IdleTimer }
}

export default plugin({
	start({ cleanup, plugin }) {
		cleanup(
			getModules(
				withProps<CallIdleManager>('idleTimeout', 'handleVoiceStateUpdates'),
				manager => {
					try {
						const timer = manager.idleTimeout
						timer.stop()
						cleanup(instead(timer, 'start', noop))
					} catch (e) {
						plugin.reportError(e)
					}
				},
				{ max: 1 },
			),
		)
	},
})
