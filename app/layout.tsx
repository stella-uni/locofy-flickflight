import "./global.css";
import "./antd.css";

import { ReactNode } from "react";
import { ConfigProvider } from "antd";

export const metadata = {
  title: `IVTS Designsystem`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "var(--border-extensions-border-info)",
              colorText: "var(--content-content-primary)",
              colorBgContainer: "var(--background-background-primary)",
              colorBorder: "var(--border-border-primary)",
              colorTextSecondary: "var(--content-content-secondary)",
              colorTextTertiary: "var(--content-content-tertiary)",
              colorBgElevated: "var(--background-background-secondary)",
              colorBgLayout: "var(--background-background-tertiary)",
              borderRadius: 4,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
