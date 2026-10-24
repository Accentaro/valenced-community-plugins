import { ToastActionCreators } from '@valenced/discord/actions'

export function showErrorToast(e: unknown) {
	ToastActionCreators.open('VALENCED_THEMES_ERROR', {
		text: e instanceof Error ? e.message : String(e),
		variant: 'critical',
	})
}
