export const Setting = {
	// MAIN SETTINGS

	ValencedDeveloper: 'ValencedDeveloper',

	// SUBSETTINGS

	DTAutoConnect: 'DTAutoConnect',
	DTConnect: 'DTConnect',
	DTDisconnect: 'DTDisconnect',

	RDTAutoConnect: 'RDTAutoConnect',
	RDTConnect: 'RDTConnect',
	RDTDisconnect: 'RDTDisconnect',

	EvalJS: 'EvalJS',
	AssetBrowser: 'AssetBrowser',
	TestErrorBoundary: 'TestErrorBoundary',
} as const

export const RouteNames = {
	[Setting.ValencedDeveloper]: 'Valenced Developer',
	[Setting.AssetBrowser]: 'Asset Browser',
	[Setting.EvalJS]: 'Evaluate JavaScript',
	[Setting.TestErrorBoundary]: 'Test ErrorBoundary',
} as const
