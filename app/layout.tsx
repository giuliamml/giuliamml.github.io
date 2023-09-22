import React from "react";
import EmotionRootStyleRegistry from "./EmotionRootStyleRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
