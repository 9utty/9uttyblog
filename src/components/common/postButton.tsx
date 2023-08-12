import { Grid } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  Header: string;
  Date: string;
  Tag: string[];
  filePath: string;
}

const { useBreakpoint } = Grid;

const PostButton = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const screens = useBreakpoint();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openModal = () => {
    router.push(props.filePath);
  };

  return (
    <button
      style={{
        width: "100%",
        height: "50px",
        position: "relative",
        transform: isHovered ? "scale(0.98)" : "",
        transition: "transform 0.2s",
      }}
      className={isHovered ? "scaled" : ""}
      onClick={openModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          backgroundColor: isHovered ? "#0027a9" : "black",
          opacity: "0.1",
          height: screens.sm ? "60px" : "50px",
          borderRadius: "10px",
        }}
      ></span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          top: screens.sm ? "-45px" : "-40px",
        }}
      >
        <Image
          src="https://user-images.githubusercontent.com/86397600/236504963-ae3b7e09-7aba-476b-b51b-df402aa5567e.png"
          width={30}
          height={30}
          alt="postButton"
        />
        <span
          style={{
            marginLeft: "10px",
            fontFamily: "dunggeunmo-bold",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
              maxWidth: screens.sm ? "18em" : "10em", // 최대 길이를 10글자로 설정
              textOverflow: "ellipsis", // 말줄임표로 넘치는 텍스트 처리
              whiteSpace: "nowrap", // 텍스트를 한 줄로 유지
              overflow: "hidden", // 넘치는 부분 감춤
            }}
          >
            {props.Header}
          </p>
          {screens.sm ? (
            <p
              style={{
                fontFamily: "dunggeunmo-bold",
                fontSize: "20px",
                top: "-50px",
              }}
            >
              {props.Date}
            </p>
          ) : null}
        </span>
      </span>
    </button>
  );
};

export default PostButton;
