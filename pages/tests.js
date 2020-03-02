import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <h2>CMS Pages:</h2>
      <div>
        {posts.map(p => (
          <div key={p.id}>
            <p>{p.id}</p>
            <p>{p.title.rendered}</p>
            <div dangerouslySetInnerHTML={{ __html: p.content.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
          </div>
        ))}
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async () => {
  const res = await fetch(
    "http://spc-cms.webdevstudio.net/wp-json/wp/v2/posts"
  );
  const posts = await res.json();
  // console.log({ posts });
  // console.log("post", posts[0]);
  /*
post {
  id: 1,
  date: '2020-03-01T00:30:18',
  date_gmt: '2020-03-01T00:30:18',
  modified: '2020-03-01T00:30:18',
  modified_gmt: '2020-03-01T00:30:18',
  slug: 'hello-world',
  status: 'publish',
  type: 'post',
  link: 'http://spc-cms.webdevstudio.net/hello-world/',
  title: { rendered: 'Hello world!' },
  content: {
    rendered: '\n' +
      '<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n',
    protected: false
  },
  excerpt: {
    rendered: '<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n',
    protected: false
  },
  author: 1,
  featured_media: 0,
  comment_status: 'open',
  sticky: false,
  template: '',
  format: 'standard',
  meta: [],
  categories: [ 1 ],
  tags: []
}
  */

  const res2 = await fetch(
    "http://spc-cms.webdevstudio.net/wp-json/wp/v2/pages"
  );
  const pages = await res2.json();
  // console.log({ pages });
  // console.log("page", pages[0]);

  return { posts };
};

export default Home;
