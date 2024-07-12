import { useRef, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";

const Upload = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSelectImg = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 w-full">
      <div
        className="w-full flex justify-center items-center p-3 rounded-lg bg-blue-200 cursor-pointer"
        onClick={handleSelectImg}
      >
        <input
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          type="file"
        />
        <p className="text-center">آپلود</p>
      </div>
      <div className="flex gap-2 justify-center items-center bg-red-100 px-3 py-5 rounded-lg">
        <p className="text-xs" dir="rtl">
          حواست باشه که برای یه قاب با کیفیت، باید عکس با کیفیت آپلود کنی.
        </p>
        <PiWarningCircleLight size={20} />
      </div>
      <div className="grid grid-cols-2 gap-1 overflow-y-scroll mt-3 h-[calc(100vh-170px)]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Selected ${index}`}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Upload;
