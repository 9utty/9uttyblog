import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  IconName: string;
  filePath: string;
}

const CategoryIcon = ({ IconName, filePath }: Props) => {
  return (
    <div>
      <Link
        style={{
          background: "transparent",
          borderWidth: "0px",
          paddingTop: "10px",
          width: "100px",
        }}
        href={filePath}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            <Image
              src="https://user-images.githubusercontent.com/86397600/236442704-86adb1a0-63f3-460a-a138-fcf18906222b.png"
              alt="folder"
              width={10}
              height={10}
              className="w-14 h-9"
            />
          </div>
          <span
            style={{
              color: "white",
              paddingLeft: "8px",
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
              zIndex: 0,
            }}
          >
            {IconName}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryIcon;
