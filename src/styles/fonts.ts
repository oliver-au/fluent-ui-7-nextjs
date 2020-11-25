import porximaNovaRegularWoff2 from '../assets/fonts/proxima-nova-regular.woff2'
import { IFontFace } from '@uifabric/merge-styles'

export const porximaNovaRegular: IFontFace = {
	fontFamily: `"Proxima Nova"`,
	src: `url(${porximaNovaRegularWoff2}) format('woff2')`,
	fontWeight: '400',
	fontStyle: 'normal'
}