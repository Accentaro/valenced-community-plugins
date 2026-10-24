import { Design } from '@valenced/discord/design'
import { Clipboard } from '@valenced/externals/react-native-clipboard'
import { getModules } from '@valenced/modules/finders'
import { withName } from '@valenced/modules/finders/filters'
import { instead } from '@valenced/patcher'
import type { DiscordModules } from '@valenced/discord/types'
import type { FC, ReactElement, ReactNode } from 'react'

const { Button } = Design

type MaskedLinkModal = FC<{
	isProtocol: boolean
	onCancel(): unknown
	onConfirm(): unknown
	trustUrl(): unknown
	url: string
}>

export default plugin({
	start({ cleanup }) {
		cleanup(
			getModules(
				withName<MaskedLinkModal>('MaskedLinkModal'),
				mod => {
					const module = mod as { default: MaskedLinkModal }
					cleanup(
						instead(module, 'default', (args, Comp) => {
							const [props] = args
							const tree = Reflect.apply(
								Comp,
								undefined,
								args,
							) as ReactElement<DiscordModules.Components.AlertModalProps>

							const actions = tree.props.actions as ReactElement<{
								children: ReactNode[]
							}>

							actions.props.children = [...actions.props.children]
							actions.props.children.splice(
								1,
								0,
								<Button
									text="Copy Link"
									variant="tertiary"
									onPress={() => {
										Clipboard.setString(props.url)
									}}
								/>,
							)

							return tree
						}),
					)
				},
				{
					returnNamespace: true,
				},
			),
		)
	},
})
