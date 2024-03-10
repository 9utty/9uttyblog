import Image from "next/image";
import { getCategories } from "@/utils/posts";
import Folder from "@/components/common/folder";
import { Card, Col, Row } from "antd";
import Head from "next/head";
import { CardContent, Grid } from "@mui/material";

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
      <CardContent sx={{width: '100%', paddingX: 10, paddingY: 3}}>
        <Grid container spacing={5}>
          <CardContent sx={{display: 'flex', gap: 3, flexWrap: 'wrap'}}>
          {categories &&
            categories.map((cate, index) => {
              return (
                <Grid item xs={4} sm={3} md={2} lg={2} xl={2} key={index}>
                  <Folder key={cate} FolderName={cate} />
                </Grid>
              );
            })}
          </CardContent>
        </Grid>
      </CardContent>
    </section>
  );
}
