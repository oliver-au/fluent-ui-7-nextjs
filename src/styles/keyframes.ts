import { keyframes, mergeStyleSets } from '@uifabric/merge-styles';

export const fadeIn = keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
});

// https://github.com/microsoft/fluentui/blob/master/packages/merge-styles/README.md#registering-keyframes