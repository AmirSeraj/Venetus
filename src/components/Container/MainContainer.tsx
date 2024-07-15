// import MainContent from "./MainContent";
import NavBar from "./NavBar";
// import { fabric } from "fabric";
import { FabricJSCanvas } from "fabricjs-react";
// import { useEffect, useState } from "react";

const MainContainer = ({
  onReady,
  removeSelectedObject,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onReady: any;
  removeSelectedObject: () => void;
}) => {
  // const { editor, onReady } = useFabricJSEditor();
  // const [cropImage, setCropImage] = useState(true);

  // const history = [];

  // useEffect(() => {
  //   if (!editor || !fabric) {
  //     return;
  //   }

  //   if (cropImage) {
  //     editor.canvas.__eventListeners = {};
  //     return;
  //   }

  //   if (!editor.canvas.__eventListeners["mouse:move"]) {
  //     editor.canvas.on("mouse:move", function (opt) {
  //       if (this.isDragging) {
  //         let e = opt.e;
  //         let vpt = this.viewportTransform;
  //         vpt[4] += e.clientX - this.lastPosX;
  //         vpt[5] += e.clientY - this.lastPosY;
  //         this.requestRenderAll();
  //         this.lastPosX = e.clientX;
  //         this.lastPosY = e.clientY;
  //       }
  //     });
  //   }

  //   if (!editor.canvas.__eventListeners["mouse:up"]) {
  //     editor.canvas.on("mouse:up", function (opt) {
  //       // on mouse up we want to recalculate new interaction
  //       // for all objects, so we call setViewportTransform
  //       this.setViewportTransform(this.viewportTransform);
  //       this.isDragging = false;
  //       this.selection = true;
  //     });
  //   }

  //   editor.canvas.renderAll();
  // }, [editor]);

  // useEffect(() => {
  //   if (!editor || !fabric) {
  //     return;
  //   }
  //   editor.canvas.setHeight(500);
  //   editor.canvas.setWidth(500);
  //   // addBackground();
  //   editor.canvas.renderAll();
  // }, []);

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

  // const addText = () => {
  //   editor.addText("inset text");
  // };

  return (
    <div className="col-span-8 md:row-span-12 bg-gray-200 row-span-11 flex flex-col items-center w-full">
      <NavBar removeSelectedObject={removeSelectedObject} />
      {/* <MainContent /> */}

      {/* <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle} disabled={!cropImage}>
        Add Rectangle
      </button> */}
      {/* <button onClick={addText} disabled={!cropImage}>
        Add Text
      </button> */}
      {/* <button onClick={toggleDraw} disabled={!cropImage}>
        Toggle draw
      </button> */}
      {/* <button onClick={clear} disabled={!cropImage}>
        Clear
      </button> */}
      {/* <button onClick={undo} disabled={!cropImage}>
        Undo
      </button> */}
      {/* <button onClick={redo} disabled={!cropImage}>
        Redo
      </button> */}
      {/* <button onClick={toggleSize} disabled={!cropImage}>
        ToggleSize
      </button> */}
      {/* <button onClick={removeSelectedObject} disabled={!cropImage}>
        Delete
      </button> */}
      {/* <button onClick={(e) => setCropImage(!cropImage)}>Crop</button> */}
      {/* <label disabled={!cropImage}>
        <input
          disabled={!cropImage}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label> */}
      {/* <button onClick={exportSVG} disabled={!cropImage}>
        {" "}
        ToSVG
      </button> */}
      {/* <button onClick={fromSvg} disabled={!cropImage}>
        fromsvg
      </button> */}

      <div
        style={{
          border: `3px dotted Green`,
          width: "400px",
          height: "500px",
        }}
      >
        <FabricJSCanvas className="canvas-container" onReady={onReady} />
      </div>
    </div>
  );
};

export default MainContainer;
