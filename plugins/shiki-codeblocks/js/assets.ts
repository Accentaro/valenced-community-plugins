import { readFileSync } from '@valenced/modules/native/fs'
import { pluginDistDirFor } from '@valenced/plugins/constants'
import type { ShikiIndex } from './types'

const PluginId = 'palmdevs.shiki-codeblocks'

export function readAsset<T>(path: string): T {
	return JSON.parse(
		readFileSync(`${pluginDistDirFor(PluginId)}/assets/shiki/${path}.json`),
	)
}

let index: ShikiIndex | undefined

export function getIndex() {
	index ??= readAsset<ShikiIndex>('index')
	return index
}
