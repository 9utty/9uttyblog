import { Grid } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";

const { useBreakpoint } = Grid;

interface Props {
  FolderName: string;
}

const Folder = ({ FolderName }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const screens = useBreakpoint();

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
        width: screens.md ? "200px" : "150px",
      }}
    >
      <Link
        className="bg-transparent border-0 pt-[10px] w-20"
        href={`/categories/${FolderName}`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: screens.md ? "120px" : "100px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              width: screens.md ? "80px" : "60px",
              inlineSize: "block",
              alignItems: "middle",
            }}
          >
            <Image
              src="https://user-images.githubusercontent.com/86397600/236442704-86adb1a0-63f3-460a-a138-fcf18906222b.png"
              alt="folder"
              width={screens.md ? 100 : 80}
              height={screens.md ? 100 : 80}
            />
          </div>
          <span
            className="text-white"
            style={{ fontSize: "1.3rem", paddingLeft: "8px" }}
          >
            {`${FolderName}.`}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default memo(Folder, (prevProps, nextProps) => {
  return prevProps.FolderName === nextProps.FolderName;
});
