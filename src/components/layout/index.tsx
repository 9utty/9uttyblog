import React, { useState } from "react";
import {
  Bar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/utils/posts";
import Folder from "../common/folder";
interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Bar
        style={{
          width: "100vw",
          paddingTop: "3px",
          height: "2.5rem",
          position: "absolute",
          bottom: "0",
        }}
        className="min-h-[50px]"
      >
        <Toolbar>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{
                height: "2rem",
                width: "6rem",
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              <Image
                src={
                  "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                }
                alt="menuLogo"
                width={50}
                height={50}
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                  marginRight: "10px",
                }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "3.5rem",
                  width: "13rem",
                  zIndex: "100",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <Link href="/myBlog">
                    <span role="img" aria-label="👨">
                      {" 👨 MyBlog? "}
                    </span>
                  </Link>
                </MenuListItem>
                <MenuListItem>
                  <Link href="/profile">
                    <span role="img" aria-label="👨‍💻">
                      {" 👨‍💻 Profile? "}
                    </span>
                  </Link>
                </MenuListItem>
                <MenuListItem>
                  <Link href={"/"}>
                    <span role="img" aria-label="🏠">
                      {" 🏠 GoHome?"}
                    </span>
                  </Link>
                </MenuListItem>
                <MenuListItem>
                  <Link href="">
                    <span role="img" aria-label="📁">
                      {" 📁 GitHub? "}
                    </span>
                  </Link>
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  <div>Logout?</div>
                </MenuListItem>
              </MenuList>
            )}
          </div>
          {/* <Search /> */}
        </Toolbar>
      </Bar>
      {children}
    </>
  );
}
