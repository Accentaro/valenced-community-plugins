import { RouteNames, Setting } from '../constants'
import * as ValencedThemesBackgroundSettingScreen from '../screens/ValencedThemesBackgroundSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Background overrides. Opened from the Colors page; omitted from main settings list. */
const ValencedThemesBackgroundSetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Background',
	unsearchable: true,
	screen: {
		route: RouteNames[Setting.ValencedThemesBackground],
		getComponent: () => ValencedThemesBackgroundSettingScreen.default,
	},
}

export default ValencedThemesBackgroundSetting
