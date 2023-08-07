import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo, useState } from "react";

interface Props {
  FolderName: string;
}

const Folder = ({ FolderName }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();

  const onClickFolder = () => {
    route.push(`/categories/${FolderName}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={isHovered ? "scaled" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(1.1)" : "",
        transition: "transform 0.3s",
        width: "100px",
      }}
    >
      <button
        className="bg-transparent border-0 pt-[10px] w-20"
        onClick={onClickFolder}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          <div
            style={{ width: "50px", inlineSize: "block", alignItems: "middle" }}
          >
            <Image
              src="https://user-images.githubusercontent.com/86397600/236442704-86adb1a0-63f3-460a-a138-fcf18906222b.png"
              alt="folder"
              width={70}
              height={70}
              className="w-14 h-9"
            />
          </div>
          <span className="text-white pl-[8px] text-[20px] z-0">
            {`${FolderName}.`}
          </span>
        </div>
      </button>
    </div>
  );
};

export default memo(Folder, (prevProps, nextProps) => {
  return prevProps.FolderName === nextProps.FolderName;
});
