import { RouteNames, Setting } from '../constants'
import * as ValencedThemesFontFamiliesSettingScreen from '../screens/ValencedThemesFontFamiliesSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Displays all font families supplied by registered packs. Opened from Fonts page; omitted from main settings list. */
const ValencedThemesFontFamiliesSetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Font Families',
	unsearchable: true,
	screen: {
		route: RouteNames[Setting.ValencedThemesFontFamilies],
		getComponent: () => ValencedThemesFontFamiliesSettingScreen.default,
	},
}

export default ValencedThemesFontFamiliesSetting
