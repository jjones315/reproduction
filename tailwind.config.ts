import { nextui, semanticColors } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import tailwindColors from 'tailwindcss/colors';

export const screensPxs = {
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
};

export const screens = {
	sm: `${screensPxs.sm}px`,
	md: `${screensPxs.md}px`,
	lg: `${screensPxs.lg}px`,
	xl: `${screensPxs.xl}px`
};

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/layerchart/**/*.{svelte,js}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts}'
	],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				layout: 'hsl(180, 46%, 11%)',
				project: 'hsl(169, 66%, 70%)',
				order: 'hsl(309, 61%, 70%)',
				lineItem: 'hsl(43, 87%, 71%)',

				primary: semanticColors.light.primary,
				danger: semanticColors.light.danger,
				grey: tailwindColors.neutral,
				surface: {
					100: '#FFFFFF',
					200: '#f4f4f5',
					300: '#e4e4e7',
					400: '#d4d4d8',
					content: '#11181C'
				}
			},
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				signature: ['Mrs Saint Delafield', 'cursive']
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'screen-sm': screens.sm,
				'screen-md': screens.md,
				'screen-lg': screens.lg,
				'screen-xl': screens.xl
			}
		},
		screens
	},
	plugins: [nextui({})]
} satisfies Config;
