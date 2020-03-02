import Head from "next/head";

function GlobalMeta() {
  return (
    <Head>
      <meta key="description" name="description" content={"Desc..."} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/assets/img/favicon.ico"
      />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/assets/css/slick.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/font.awesome.css" />
      <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
      <link rel="stylesheet" href="/assets/css/slinky.menu.css" />
      <link rel="stylesheet" href="/assets/css/plugins.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      <script src="/assets/js/vendor/modernizr-3.7.1.min.js"></script>
    </Head>
  );
}

export default GlobalMeta;
