import { DevToolsClient } from '@revenge-mod/devtools-client'
import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { Setting } from '../constants'
import { connect, useIsConnected } from '../devtools'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const DTConnectSetting: SettingsItem = {
	parent: Setting.ValencedDeveloper,
	IconComponent: () => <TableRowAssetIcon name="LinkIcon" />,
	useTitle: () => 'Connect to DevTools',
	useDescription: () => `Version: ${DevToolsClient.version}`,
	usePredicate: () => !useIsConnected(),
	onPress: connect,
	type: 'pressable',
}

export default DTConnectSetting
