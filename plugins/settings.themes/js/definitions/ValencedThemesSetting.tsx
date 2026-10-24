import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { RouteNames, Setting } from '../constants'
import * as ValencedThemesSettingScreen from '../screens/ValencedThemesSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const ValencedThemesSetting: SettingsItem = {
	parent: null,
	type: 'route',
	IconComponent: () => <TableRowAssetIcon name="PaintPaletteIcon" />,
	useTitle: () => 'Themes',
	screen: {
		route: RouteNames[Setting.ValencedThemes],
		getComponent: () => ValencedThemesSettingScreen.default,
	},
}

export default ValencedThemesSetting
