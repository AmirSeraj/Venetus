import { useEffect } from "react";
import { useData } from "./components/Context";
import Tabs from "./components/Tabs";
import { NextUIProvider } from "@nextui-org/system";
import TabContent from "./components/TabContent/TabContent";
import MainContainer from "./components/Container/MainContainer";
import { useFabricJSEditor, FabricJSCanvas } from "fabricjs-react";
import { fabric } from "fabric";

function App() {
  const { setEstikers, cropImage } = useData();
  const { editor, onReady } = useFabricJSEditor();

  const history = [];

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }

    if (cropImage) {
      editor.canvas.__eventListeners = {};
      return;
    }

    if (!editor.canvas.__eventListeners["mouse:move"]) {
      editor.canvas.on("mouse:move", function (opt) {
        if (this.isDragging) {
          let e = opt.e;
          let vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:up"]) {
      editor.canvas.on("mouse:up", function (opt) {
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
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.setHeight(500);
    editor.canvas.setWidth(400);
    // addBackground();
    editor.canvas.renderAll();
  }, []);

  const toggleSize = () => {
    editor.canvas.freeDrawingBrush.width === 12
      ? (editor.canvas.freeDrawingBrush.width = 5)
      : (editor.canvas.freeDrawingBrush.width = 12);
  };

  const undo = () => {
    if (editor.canvas._objects.length > 0) {
      history.push(editor.canvas._objects.pop());
    }
    editor.canvas.renderAll();
  };

  const redo = () => {
    if (history.length > 0) {
      editor.canvas.add(history.pop());
    }
  };

  const addText = () => {
    editor.addText("inset text");
  };

  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
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
