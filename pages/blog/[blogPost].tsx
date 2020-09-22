import { fetcher } from "../../fetcher";

import Nav from "../../components/nav";

const BlogPost = (props) => {
  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />

      <Nav />

      <div className="content-container pt-32">
        <h1 className="text-2xl text-headerColor">{props.title}</h1>

        <p className="text-base text-fontColor">
          've gone back and forth about whether or not to have comments on the
          site. Most of all, I've liked having absolutely no server or external
          scripts on the site, and not having to moderate comments that are
          publicly facing on the site. A bit ago, I implemented my own comments
          REST API server with Node and wrote about it here, which was awesome,
          but I didn't implement any user system or authentication, so the
          barrier to posting was just too low. I couldn't keep ignoring how
          awesome Utterances looks, an open source project by Jeremy Danyow. Not
          only does it look absolutely fantastic, but it took me about 15
          minutes to set up completely on my Gatsby site. I made a comments repo
          to host all the issues and responses. Connecting to the Utterances
          GitHub app is required to leave a comment through the site, though you
          can also comment directly through GitHub if the issue exists. I
          imagine spam and obnoxious comments will be much more rare through
          this system, and people will actually be able to participate in
          discussions and leave helpful comments once again.
        </p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await fetcher([process.env.API_URL, "posts"]);

  const paths = posts.data.map((post) => ({
    params: { blogPost: post.id.toString() },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  const post = await fetcher([process.env.API_URL, "post", params.blogPost]);
  return {
    props: {
      title: post.data.Title,
    },
  };
}

export default BlogPost;
