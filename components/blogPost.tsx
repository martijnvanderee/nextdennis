import Link from "next/link";

import { formatDate } from "../helpers";

export const BlogPost = ({ blogPost }) => {
  const path = "dennisCloseup.jpg";

  return (
    <Link href="/blog/[id]" as={`/blog/${blogPost.id}`}>
      <a className="flex md:block bg-white hover:bg-gray-200 cursor-pointer rounded h-32 md:h-auto shadow-offset rounded">
        <div className="object-cover h-full md:h-64 w-32 md:w-full flex-none">
          <img
            className="object-cover h-full w-full rounded-t"
            src={require(`images/${path}?webp`)}
          />
        </div>

        <section className="relative p-2 h-full md:h-32 overflow-visible flex-auto ">
          <h2 className="text-lg md:text-xl font-semibold leading-tight">
            {blogPost.Title}
          </h2>
          <div className="absolute bottom-0 text-xs mb-2">
            {" "}
            {formatDate(blogPost.updated_at)[0]}
          </div>
        </section>
      </a>
    </Link>
  );
};
