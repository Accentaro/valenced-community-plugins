import { RouteNames, Setting } from '../constants'
import * as ValencedThemesPluginsSettingScreen from '../screens/ValencedThemesPluginsSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Management screen for installed theme plugins. Opened from Themes screen; omitted from main settings list. */
const ValencedThemesPluginsSetting: SettingsItem = {
	parent: null,
	type: 'route',
	useTitle: () => 'Theme Plugins',
	screen: {
		route: RouteNames[Setting.ValencedThemesPlugins],
		getComponent: () => ValencedThemesPluginsSettingScreen.default,
	},
}

export default ValencedThemesPluginsSetting
