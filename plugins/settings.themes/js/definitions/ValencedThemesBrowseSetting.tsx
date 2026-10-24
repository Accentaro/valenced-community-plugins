import { TableRowAssetIcon } from '@valenced/components'
import { RouteNames, Setting } from '../constants'
import * as ValencedThemesBrowseSettingScreen from '../screens/ValencedThemesBrowseSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

/** Repository theme plugins page. Opened from Themes screen; omitted from main settings list. */
const ValencedThemesBrowseSetting: SettingsItem = {
	parent: null,
	type: 'route',
	IconComponent: () => <TableRowAssetIcon name="PlusMediumIcon" />,
	useTitle: () => 'Browse Themes',
	screen: {
		route: RouteNames[Setting.ValencedThemesBrowse],
		getComponent: () => ValencedThemesBrowseSettingScreen.default,
	},
}

export default ValencedThemesBrowseSetting
