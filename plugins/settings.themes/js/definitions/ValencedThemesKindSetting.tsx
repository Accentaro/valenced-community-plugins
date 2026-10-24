import { RouteNames, Setting } from '../constants'
import * as ValencedThemesKindSettingScreen from '../screens/ValencedThemesKindSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Groups offering a specific theme kind. Opened from dashboard tile; omitted from main settings list. */
const ValencedThemesKindSetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Theme Items',
	unsearchable: true,
	screen: {
		route: RouteNames[Setting.ValencedThemesKind],
		getComponent: () => ValencedThemesKindSettingScreen.default,
	},
}

export default ValencedThemesKindSetting
