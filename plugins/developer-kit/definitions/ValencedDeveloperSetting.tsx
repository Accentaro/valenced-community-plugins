import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { RouteNames, Setting } from '../constants'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const ValencedDeveloperSetting: SettingsItem = {
	parent: null,
	type: 'route',
	IconComponent: () => <TableRowAssetIcon name="WrenchIcon" />,
	useTitle: () => 'Developer',
	screen: {
		route: RouteNames[Setting.ValencedDeveloper],
		getComponent: () =>
			require('../screens/ValencedDeveloperSettingScreen').default,
	},
}

export default ValencedDeveloperSetting
