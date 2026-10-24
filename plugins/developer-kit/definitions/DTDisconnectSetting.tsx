import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { Setting } from '../constants'
import { disconnect, useIsConnected } from '../devtools'
import type { SettingsItem } from '@valenced/discord/modules/settings'

const DTDisconnectSetting: SettingsItem = {
	parent: Setting.ValencedDeveloper,
	IconComponent: () => <TableRowAssetIcon name="DenyIcon" variant="danger" />,
	variant: 'danger',
	useTitle: () => 'Disconnect from DevTools',
	usePredicate: useIsConnected,
	onPress: disconnect,
	type: 'pressable',
}

export default DTDisconnectSetting
