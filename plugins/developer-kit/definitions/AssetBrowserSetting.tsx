import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { RouteNames, Setting } from '../constants'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const AssetBrowserSetting: SettingsItem = {
	parent: Setting.ValencedDeveloper,
	type: 'route',
	IconComponent: () => <TableRowAssetIcon name="ImageIcon" />,
	useTitle: () => 'Asset Browser',
	screen: {
		route: RouteNames[Setting.AssetBrowser],
		getComponent: () => require('../screens/AssetBrowserSettingScreen').default,
	},
}

export default AssetBrowserSetting
