declare module "*.mdx" {
  import type { ComponentType } from "react";
  
  export const metadata: Record<string, any>;
  const Component: ComponentType;
  export default Component;
}

