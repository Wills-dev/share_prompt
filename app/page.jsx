import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Love Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        nulla vero velit ut aliquid laboriosam ab optio veritatis sapiente
        voluptatem quae nam, soluta hic fugit rem unde! Velit.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
