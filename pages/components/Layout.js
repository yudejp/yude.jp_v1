import Head from "next/head"
import Link from "next/link"
import "tailwindcss/tailwind.css";

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      
      <main>
        {/*
        {title ? <h1 className="page-title">{title}</h1> : ``}
        */}
        <div className="page-main">
          {children}
        </div>
      </main>
      <style jsx global>{`
        body {
            text-align: center;
        }
      `}</style>
    </div>
  )
}
export default Layout