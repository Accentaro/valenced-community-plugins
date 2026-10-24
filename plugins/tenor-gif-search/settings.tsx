import Page from '@valenced/components/Page'
import { Design } from '@valenced/discord/design'
import { DefaultGridQuality, GridQualities } from '.'
import type { PluginSettingsComponent } from '@valenced/plugins/types'
import type { ComponentProps } from 'react'
import type { GridQuality, Settings } from '.'

const { TableRadioGroup, TableRadioRow } = Design

const GridQualityRows: Record<
	GridQuality,
	{ label: string; subLabel: string }
> = {
	gif: {
		label: 'High',
		subLabel: 'Full-size GIFs. Uses the most data.',
	},
	tinygif: {
		label: 'Medium',
		subLabel: 'Smaller GIFs. Recommended.',
	},
	nanogif: {
		label: 'Low',
		subLabel: 'Smallest GIFs. Uses the least data.',
	},
}

type SettingsComponentProps = ComponentProps<
	PluginSettingsComponent<{ jsonStorage: Settings }>
>

export default function SettingsComponent({
	api: { jsonStorage: storage },
}: SettingsComponentProps) {
	const { gridQuality } = storage.use() ?? {}

	return (
		<Page>
			<TableRadioGroup
				title="GIF Quality"
				defaultValue={gridQuality ?? DefaultGridQuality}
				onChange={(gridQuality: GridQuality) => storage.set({ gridQuality })}
			>
				{GridQualities.map(quality => (
					<TableRadioRow
						key={quality}
						value={quality}
						{...GridQualityRows[quality]}
					/>
				))}
			</TableRadioGroup>
		</Page>
	)
}
