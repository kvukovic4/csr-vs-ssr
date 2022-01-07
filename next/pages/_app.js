import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
		categories,
	} = props;
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MyApp;
