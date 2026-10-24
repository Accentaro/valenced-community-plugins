import { RouteNames, Setting } from '../constants'
import * as ValencedThemesGroupSettingScreen from '../screens/ValencedThemesGroupSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Complete option list for a single group. Opened from "See all"; omitted from main settings list. */
const ValencedThemesGroupSetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Theme Group',
	unsearchable: true,
	screen: {
		route: RouteNames[Setting.ValencedThemesGroup],
		getComponent: () => ValencedThemesGroupSettingScreen.default,
	},
}

export default ValencedThemesGroupSetting
