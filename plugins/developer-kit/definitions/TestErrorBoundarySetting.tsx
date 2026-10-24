import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { RouteNames, Setting } from '../constants'
import TestErrorBoundarySettingScreen from '../screens/TestErrorBoundarySettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const TestErrorBoundarySetting: SettingsItem = {
	parent: Setting.ValencedDeveloper,
	type: 'route',
	variant: 'danger',
	IconComponent: () => (
		<TableRowAssetIcon name="ScreenXIcon" variant="danger" />
	),
	useTitle: () => 'Test ErrorBoundary',
	screen: {
		route: RouteNames[Setting.TestErrorBoundary],
		getComponent: () => TestErrorBoundarySettingScreen,
	},
}

export default TestErrorBoundarySetting
