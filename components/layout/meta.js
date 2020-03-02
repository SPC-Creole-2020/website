import Head from "next/head";

function GlobalMeta() {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#3ed2a7" />

      {/* 
        <link rel="shortcut icon" href="./favicon.png" />
        */}

      <link rel="stylesheet" href="https://use.typekit.net/qxb8htk.css" />
      <link rel="stylesheet" href="/css/liquid-icon/liquid-icon.min.css" />
      <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/theme-vendors.min.css" />
      <link rel="stylesheet" href="/css/theme.min.css" />
      <link rel="stylesheet" href="/css/themes/original.css" />
      <script async src="/js/modernizr.min.js"></script>
    </Head>
  );
}

export default GlobalMeta;
