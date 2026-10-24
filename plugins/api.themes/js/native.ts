import {
	callNativeMethod,
	callNativeMethodSync,
} from '@valenced/modules/native'
import type {
	BackgroundSettings,
	ColorsSelection,
	EmojiSelection,
	FontsSelection,
	FontVariant,
	IconsSelection,
	ThemesState,
} from './types'

export function readThemesState(): ThemesState {
	return JSON.parse(callNativeMethodSync('valenced.themes.getState', []))
}

export function writeColorsSelection(selection: ColorsSelection | null) {
	return callNativeMethod('valenced.themes.setColors', [
		selection && JSON.stringify(selection),
	])
}

export function writeFontsSelection(selection: FontsSelection | null) {
	return callNativeMethod('valenced.themes.setFonts', [
		selection && JSON.stringify(selection),
	])
}

export function writeIconsSelection(selection: IconsSelection | null) {
	return callNativeMethod('valenced.themes.setIcons', [
		selection && JSON.stringify(selection),
	])
}

export function writeEmojiSelection(selection: EmojiSelection | null) {
	return callNativeMethod('valenced.themes.setEmoji', [
		selection && JSON.stringify(selection),
	])
}

export function writeBackgroundSettings(settings: BackgroundSettings | null) {
	return callNativeMethod('valenced.themes.setBackground', [
		settings && JSON.stringify(settings),
	])
}

/** Copies a picked image (`file://` or `content://`) into storage. Resolves to its absolute path. */
export function importBackgroundImage(uri: string) {
	return callNativeMethod('valenced.themes.importBackground', [uri])
}

/** Registers {@link name} as a font family React Native can render previews with. */
export function registerPreviewFont(
	name: string,
	variants: Required<FontVariant>[],
) {
	callNativeMethodSync('valenced.themes.previewFont', [
		JSON.stringify({ name, variants }),
	])
}

/**
 * Returns image paths of {@link codepoints} in {@link pack}, or Discord's when {@link pack} is `null`.
 *
 * @returns `null` when neither source provides a preview.
 */
export async function readPreviewEmoji(
	pack: Pick<EmojiSelection, 'images' | 'font'> | null,
	codepoints: string[],
): Promise<(string | null)[]> {
	return JSON.parse(
		await callNativeMethod('valenced.themes.previewEmoji', [
			JSON.stringify({ pack, codepoints }),
		]),
	)
}

declare module '@valenced/modules/native' {
	interface NativeMethods {
		'valenced.themes.getState': [[], string]
		'valenced.themes.setColors': [[json: string | null], null]
		'valenced.themes.setFonts': [[json: string | null], null]
		'valenced.themes.setIcons': [[json: string | null], null]
		'valenced.themes.setEmoji': [[json: string | null], null]
		'valenced.themes.setBackground': [[json: string | null], null]
		'valenced.themes.importBackground': [[uri: string], string]
		'valenced.themes.previewFont': [[json: string], null]
		'valenced.themes.previewEmoji': [[json: string], string]
	}
}
