import React, { useState } from "react";
import glassesData from "./data.json"; // Đường dẫn tới tệp JSON

export default function ChangeColorGlasses() {
  const [modelImg] = useState("./glassesImage/model.jpg"); // Ảnh người mẫu mặc định
  const [glassesUrl, setGlassesUrl] = useState(null); // Không có kính mặc định
  const [selectedGlasses, setSelectedGlasses] = useState(null); // Không có kính được chọn mặc định

  const handleChangeGlasses = (glasses) => {
    setGlassesUrl(glasses.url); // Cập nhật ảnh kính
    setSelectedGlasses(glasses); // Cập nhật thông tin kính
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-6">
        Change Color Glasses
      </h1>

      {/* Khu vực hiển thị người mẫu */}
      <div className="grid">
        <div className="relative grid grid-cols-1 justify-center items-center">
          <img
            src={modelImg}
            alt="Model"
            className="w-full max-w-md mx-auto"
          />
          {glassesUrl && (
            <img
              src={glassesUrl}
              alt="Glasses"
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-60 opacity-70"
            />
          )}
        </div>
      </div>

      {/* Danh sách kính */}
      <div className="mt-10 flex justify-center flex-wrap">
        {glassesData.map((glasses) => (
          <div
            key={glasses.id}
            className="flex flex-col items-center mx-4 cursor-pointer"
            onClick={() => handleChangeGlasses(glasses)}
          >
            <img
              src={glasses.url}
              alt={glasses.name}
              className="w-24 border-2 border-transparent hover:border-blue-500"
            />
            <p className="text-center font-bold">{glasses.name}</p>
            <p className="text-center text-gray-500">${glasses.price}</p>
          </div>
        ))}
      </div>

      {/* Thông tin kính được chọn */}
      {selectedGlasses && (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">{selectedGlasses.name}</h2>
          <p className="text-gray-600">${selectedGlasses.price}</p>
          <p className="text-gray-500">{selectedGlasses.desc}</p>
        </div>
      )}
    </div>
  );
}
