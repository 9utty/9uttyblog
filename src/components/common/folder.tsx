import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";

interface Props {
  FolderName: string;
}

const Folder = ({ FolderName }: Props) => {
  const route = useRouter();

  const onClickFolder = () => {
    route.push(`/categories/${FolderName}`);
  };

  return (
    <div className="hover:scale-110">
      <button
        className="bg-transparent border-0 pt-[10px] w-20"
        onClick={onClickFolder}
      >
        <div className="flex flex-col items-center">
          <div className="w-[50px] inline-block align-middle">
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
