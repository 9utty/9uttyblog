import Image from "next/image";
import { getCategories } from "@/utils/posts";
import Folder from "@/components/common/folder";

interface props {
  categories: string[];
}

export const getStaticProps = async () => {
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
    <div>
      <div style={{ padding: "20px", color: "white" }}>
        {categories &&
          categories.map((cate) => <Folder key={cate} FolderName={cate} />)}
      </div>
    </div>
  );
}
