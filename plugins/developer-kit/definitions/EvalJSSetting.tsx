import { TableRowAssetIcon } from '@valenced/components'
import { RouteNames, Setting } from '../constants'
import EvalJSSettingScreen from '../screens/EvalJSSettingScreen'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const EvalJSSetting: SettingsItem = {
	parent: Setting.ValencedDeveloper,
	type: 'route',
	IconComponent: () => <TableRowAssetIcon name="FileIcon" />,
	useTitle: () => 'Evaluate JavaScript',
	useDescription: () => 'Runs a JavaScript code snippet.',
	screen: {
		route: RouteNames[Setting.EvalJS],
		getComponent: () => EvalJSSettingScreen,
	},
}

export default EvalJSSetting
