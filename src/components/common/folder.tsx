import { Grid } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { Box, Typography } from '@mui/material';

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
    <Box
      className={isHovered ? "scaled" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        transform: isHovered ? "scale(1.03)" : "",
        transition: "transform 0.3s",
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
            width: screens.md ? "100px" : "80px",
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
              width={screens.md ? 80 : 60}
              height={screens.md ? 80 : 60}
            />
          </div>
          <Typography
            sx={{ fontFamily: "dunggeunmo-bold", color: "white", paddingLeft: "8px" }}
            variant="h6"
            noWrap
          >
            {`${FolderName}.`}
          </Typography>
        </div>
      </Link>
    </Box>
  );
};

export default memo(Folder, (prevProps, nextProps) => {
  return prevProps.FolderName === nextProps.FolderName;
});
