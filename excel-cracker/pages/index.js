import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ExcelCracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1 className="logo green">ExcelCracker</h1>
          <ul className="nav">
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </header>
        <h2 className="title">
          If you have forgotten the password to your Excel <span className="green">spreadsheet</span>, you are in the right place
        </h2>

        <p className="description">
          ExcelCracker is a simple and hassle free way to regain access to your 'protected' spreadsheet in seconds.
        </p>

        <div className="file">
          <a href="#" className="file-inner">
            <h3>Step 1: Please upload your file here &rarr;</h3>
            <p>Drag and Drop | Upload from local</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');
        * {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        
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

        .green {
          color: #007C58;
          text-decoration: none;
        }

        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          font-weight: 600;
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .file {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
          background: rgba(19, 30, 41, 0.04);
          border: 2px dashed rgba(19, 30, 41, 0.16)
          border-radius: 17px;
          float: right;
        }

        .file-inner {
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

        .file-inner:hover,
        .file-inner:focus,
        .file-inner:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .file-inner h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .file-inner p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .file {
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
