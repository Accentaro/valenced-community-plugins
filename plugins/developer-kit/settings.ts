import {
	addSettingsItemToSection,
	registerSettingsItems,
} from '@valenced/discord/modules/settings'
import { api } from '.'
import { Setting } from './constants'
import AssetBrowserSetting from './definitions/AssetBrowserSetting'
import DTAutoConnectSetting from './definitions/DTAutoConnectSetting'
import DTConnectSetting from './definitions/DTConnectSetting'
import DTDisconnectSetting from './definitions/DTDisconnectSetting'
import EvalJSSetting from './definitions/EvalJSSetting'
import RDTAutoConnectSetting from './definitions/RDTAutoConnectSetting'
import RDTConnectSetting from './definitions/RDTConnectSetting'
import RDTDisconnectSetting from './definitions/RDTDisconnectSetting'
import TestErrorBoundarySetting from './definitions/TestErrorBoundarySetting'
import ValencedDeveloperSetting from './definitions/ValencedDeveloperSetting'

export function register() {
	api.cleanup(
		registerSettingsItems({
			[Setting.ValencedDeveloper]: ValencedDeveloperSetting,
			[Setting.DTAutoConnect]: DTAutoConnectSetting,
			[Setting.DTConnect]: DTConnectSetting,
			[Setting.DTDisconnect]: DTDisconnectSetting,
			[Setting.RDTAutoConnect]: RDTAutoConnectSetting,
			[Setting.RDTConnect]: RDTConnectSetting,
			[Setting.RDTDisconnect]: RDTDisconnectSetting,
			[Setting.EvalJS]: EvalJSSetting,
			[Setting.AssetBrowser]: AssetBrowserSetting,
			[Setting.TestErrorBoundary]: TestErrorBoundarySetting,
		}),
		addSettingsItemToSection('VALENCED', Setting.ValencedDeveloper, -1),
	)
}
