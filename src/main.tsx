import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './config/styles/GlobalStyle';
import App from './App';
import { theme } from './config/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { toastArgs } from './config/toasts/toastArgs';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Toaster {...toastArgs} />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <App />
    </QueryClientProvider>
  </ThemeProvider>
);
