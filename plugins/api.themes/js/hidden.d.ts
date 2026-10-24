import type { Plugin } from '@valenced/plugins/types'
import type * as store from './store'

declare module '@valenced/plugins/types' {
	interface PreInitPluginApi<
		O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions,
	> {
		themesInternal: {
			store: typeof store
			plugin: Plugin<any, any>
		}
	}
}
