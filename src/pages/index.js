import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto my-4">
      <Head>
        <title>Woo! Tailwind!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tailwind.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-3xl text-blue-500 mb-2 mt-20">
          <a href="https://github.com/sord-dev">Next.js with TailwindCSS!</a>
        </h1>
        <p className="mx-auto w-[700px]">
          I find it&apos;s always nice to have a good starter that you can use
          when starting a new front end project, so here you go c:
        </p>
      </main>
    </div>
  );
}
