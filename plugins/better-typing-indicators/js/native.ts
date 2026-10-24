import { callNativeMethodSync } from '@valenced/modules/native'

/** Adds space after the last message, below the typing indicator view `tag`. */
export function setChatListExtraSpacing(tag: number, extraDp: number) {
	try {
		callNativeMethodSync('palmdevs.typing.setExtraSpacing', [tag, extraDp])
	} catch {
		// Ignore errors, since this is a best-effort feature.
	}
}

declare module '@valenced/modules/native' {
	interface NativeMethods {
		'palmdevs.typing.setExtraSpacing': [[tag: number, extraDp: number], null]
	}
}
