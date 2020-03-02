import Head from "next/head";
import Menu from "./menu";

function Header({ title = "Print Shop", desc, ...props }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={desc || title} />
      </Head>
    </>
  );
}

export default Header;
