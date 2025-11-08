import type { Preview } from '@storybook/react';
import React from 'react';
import '../app/global.css';
import { ConfigProvider } from 'antd';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'var(--border-extensions-border-info)',
            colorText: 'var(--content-content-primary)',
            colorBgContainer: 'var(--background-background-primary)',
            colorBorder: 'var(--border-border-primary)',
            colorTextSecondary: 'var(--content-content-secondary)',
            colorTextTertiary: 'var(--content-content-tertiary)',
            colorBgElevated: 'var(--background-background-secondary)',
            colorBgLayout: 'var(--background-background-tertiary)',
            borderRadius: 4,
          },
        }}
      >
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;

