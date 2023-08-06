/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

interface Props {
  Header: string;
  Date: string;
  Tag: string[];
  filePath: string;
}

const PostButton = (props: Props) => {
  const router = useRouter();

  const openModal = () => {
    router.push(props.filePath);
  };

  return (
    <button
      style={{
        width: "100%",
        height: "50px",
        position: "relative",
      }}
      onClick={openModal}
    >
      <span
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          backgroundColor: "black",
          opacity: "0.1",
          height: "50px",
          borderRadius: "10px",
        }}
      ></span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          top: "-40px",
        }}
      >
        <img
          src="https://user-images.githubusercontent.com/86397600/236504963-ae3b7e09-7aba-476b-b51b-df402aa5567e.png"
          width="30px"
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
          {props.Header}
          <span
            style={{
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
              top: "-50px",
            }}
          >
            {props.Date}
          </span>
        </span>
      </span>
    </button>
  );
};

export default PostButton;
