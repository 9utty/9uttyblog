import Image from "next/image";
import { getCategories } from "@/utils/posts";
import Folder from "@/components/common/folder";
import { Col, Row } from "antd";
import Head from "next/head";

interface props {
  categories: string[];
}

export const getServerSideProps = async () => {
  const categories = await getCategories();

  if (categories === undefined) {
    return { notFound: true };
  }
  return {
    props: {
      categories,
    },
  };
};

export default function Home({ categories }: props) {
  return (
    <section id="home">
      <Head>
        <meta charSet="utf-8" />
        <title>구티의 블로그</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://user-images.githubusercontent.com/86397600/236520751-cbe5955c-0ec5-46d8-bc42-130ef3c62a1f.png"
        />
      </Head>
      <div style={{ color: "white", maxHeight: "80vh", padding: 5 }}>
        <Row>
          {categories &&
            categories.map((cate) => {
              return <Folder key={cate} FolderName={cate} />;
            })}
        </Row>
      </div>
    </section>
  );
}
