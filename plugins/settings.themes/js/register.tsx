import {
	addSettingsItemToSection,
	refreshSettings,
	registerSettingsItems,
} from '@valenced/discord/modules/settings'
import { Setting } from './constants'
import ValencedThemesBackgroundSetting from './definitions/ValencedThemesBackgroundSetting'
import ValencedThemesBrowseSetting from './definitions/ValencedThemesBrowseSetting'
import ValencedThemesFontFamiliesSetting from './definitions/ValencedThemesFontFamiliesSetting'
import ValencedThemesFontFamilySetting from './definitions/ValencedThemesFontFamilySetting'
import ValencedThemesGroupSetting from './definitions/ValencedThemesGroupSetting'
import ValencedThemesKindSetting from './definitions/ValencedThemesKindSetting'
import ValencedThemesPluginsSetting from './definitions/ValencedThemesPluginsSetting'
import ValencedThemesSetting from './definitions/ValencedThemesSetting'

export default function register() {
	const unregisterItems = registerSettingsItems({
		[Setting.ValencedThemes]: ValencedThemesSetting,
		[Setting.ValencedThemesKind]: ValencedThemesKindSetting,
		[Setting.ValencedThemesGroup]: ValencedThemesGroupSetting,
		[Setting.ValencedThemesFontFamilies]: ValencedThemesFontFamiliesSetting,
		[Setting.ValencedThemesFontFamily]: ValencedThemesFontFamilySetting,
		[Setting.ValencedThemesPlugins]: ValencedThemesPluginsSetting,
		[Setting.ValencedThemesBrowse]: ValencedThemesBrowseSetting,
		[Setting.ValencedThemesBackground]: ValencedThemesBackgroundSetting,
	})
	const removeFromSection = addSettingsItemToSection(
		'VALENCED',
		Setting.ValencedThemes,
		2,
	)

	refreshSettings()

	return () => {
		removeFromSection()
		unregisterItems()
		refreshSettings()
	}
}
