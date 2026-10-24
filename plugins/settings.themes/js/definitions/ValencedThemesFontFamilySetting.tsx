import { RouteNames, Setting } from '../constants'
import * as ValencedThemesFontFamilySettingScreen from '../screens/ValencedThemesFontFamilySettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Font packs providing a specific font family. Opened from font families page; omitted from main settings list. */
const ValencedThemesFontFamilySetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Font Family',
	unsearchable: true,
	screen: {
		route: RouteNames[Setting.ValencedThemesFontFamily],
		getComponent: () => ValencedThemesFontFamilySettingScreen.default,
	},
}

export default ValencedThemesFontFamilySetting
