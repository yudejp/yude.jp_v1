// Base layout
import Layout from "../components/Layout"

// microCMS library
import { client } from "../../libs/client";

// next-seo
import { NextSeo } from 'next-seo';

// React
import * as React from "react";

// React Moment
import Moment from 'react-moment';

export default function BlogId({ blog }) {
  return (
    <>
    <Layout title={blog.title + " - yude.jp"}>
    <NextSeo
      title={blog.title + " - yude.jp"}
      description={blog.publishedAt + "に更新された「" + blog.title + "」というタイトルの記事です。"}
    />
        <h1>{blog.title}</h1>
        <p>
          <Moment format="YYYY/MM/DD HH:mm">
          {blog.updated}
          </Moment>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
    </Layout>
    </>
  );
}

// Specify path for static generator
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/posts/${content.id}`);
  return { paths, fallback: false };
};

// Passing data to template
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};