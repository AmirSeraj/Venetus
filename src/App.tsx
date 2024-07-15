/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useData } from "./components/Context";
import Tabs from "./components/Tabs";
import { NextUIProvider } from "@nextui-org/system";
import TabContent from "./components/TabContent/TabContent";
import MainContainer from "./components/Container/MainContainer";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function App() {
  const { setEstikers, cropImage } = useData();
  const { editor, onReady } = useFabricJSEditor();

  // const history: fabric.Object[] = [];

  useEffect(() => {
    if (!editor || !FabricJSCanvas) {
      return;
    }

    if (cropImage) {
      editor.canvas.__eventListeners = {};
      return;
    }

    if (!editor.canvas.__eventListeners["mouse:move"]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      editor.canvas.on("mouse:move", function (this: any, opt: fabric.IEvent<MouseEvent>) {
        if (this.isDragging) {
          const e = opt.e;
          const vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:up"]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      editor.canvas.on("mouse:up", function (this:any) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    editor.canvas.renderAll();
  }, [editor]);

  useEffect(() => {
    if (!editor) {
      return;
    }
    editor.canvas.setHeight(1000);
    editor.canvas.setWidth(400);
    // addBackground();
    editor.canvas.renderAll();
  }, []);

  // const toggleSize = () => {
  //   editor.canvas.freeDrawingBrush.width === 12
  //     ? (editor.canvas.freeDrawingBrush.width = 5)
  //     : (editor.canvas.freeDrawingBrush.width = 12);
  // };

  // const undo = () => {
  //   if (editor.canvas._objects.length > 0) {
  //     history.push(editor.canvas._objects.pop());
  //   }
  //   editor.canvas.renderAll();
  // };

  // const redo = () => {
  //   if (history.length > 0) {
  //     editor.canvas.add(history.pop());
  //   }
  // };

  const addText = () => {
    editor?.addText("inset text");
  };

  const removeSelectedObject = () => {
    editor?.canvas.remove(editor.canvas.getActiveObject());
  };

  useEffect(() => {
    //getStikers from backend
    setEstikers([
      "/estikers/1.jfif",
      "/estikers/2.jfif",
      "/estikers/3.jfif",
      "/estikers/4.jfif",
      "/estikers/5.jfif",
      "/estikers/6.jfif",
      "/estikers/7.jfif",
      "/estikers/8.jfif",
      "/estikers/9.jfif",
      "/estikers/10.jfif",
      "/estikers/11.jfif",
    ]);
  }, []);

  return (
    <NextUIProvider>
      <div
        className="grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-12 w-full h-full"
        dir="rtl"
      >
        <Tabs />
        <TabContent addText={addText} />
        <MainContainer
          onReady={onReady}
          removeSelectedObject={removeSelectedObject}
        />
      </div>
    </NextUIProvider>
  );
}

export default App;
