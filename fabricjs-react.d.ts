declare module "fabricjs-react" {
  import { fabric } from "fabric";

  interface FabricJSEditor {
    canvas: fabric.Canvas;
    addText: (text: string) => void;
  }

  export function useFabricJSEditor(): {
    editor: FabricJSEditor | undefined;
    onReady: () => void;
  };
  export const FabricJSCanvas: React.FC<{ onReady: () => void }>;
}
