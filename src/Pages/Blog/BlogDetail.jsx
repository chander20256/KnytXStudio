import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity"

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const postQuery = `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      publishedAt,
      views,
      seoScore,
      mainImage{
        asset->{url}
      },
      body
    }`;

    const recommendedQuery = `
      *[_type == "post"]{
        title,
        slug,
        views,
        seoScore,
        "score": (coalesce(views,0) * 0.6 + coalesce(seoScore,0) * 0.4)
      } | order(score desc)[0...5]
    `;

    client.fetch(postQuery, { slug }).then((data) => {
      setPost(data);
      window.scrollTo(0, 0);
    });

    client.fetch(recommendedQuery).then(setRecommended);

  }, [slug]);

  /* ================= AUTO TABLE OF CONTENTS ================= */

  const headings = useMemo(() => {
    if (!post?.body) return [];

    return post.body
      .filter(
        (block) =>
          block._type === "block" &&
          block.style &&
          ["h2", "h3"].includes(block.style)
      )
      .map((block) => {
        const text = block.children
          ?.filter((child) => child._type === "span")
          .map((span) => span.text)
          .join("");

        const id = text
          ?.toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-");

        return {
          text,
          level: block.style,
          id,
        };
      });
  }, [post]);

  if (!post) {
    return (
      <div className="py-24 text-center text-black dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">

        <div className="grid lg:grid-cols-[2.3fr_1fr] gap-14">

          {/* ================= MAIN ARTICLE ================= */}

          <article>

            <Link
              to="/blog"
              className="text-sm text-gray-500 hover:text-green-400 transition"
            >
              ← Back to Blog
            </Link>

            <header>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {post.publishedAt && (
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-white/10 pb-6">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toDateString()}
                  </time>{" "}
                  · <span className="text-green-400 font-medium">KnytXStudio</span>
                </div>
              )}

            </header>

            {/* ================= TABLE OF CONTENTS ================= */}

            {headings.length > 0 && (
              <nav className="mt-10 mb-12 p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-neutral-900">
                <h2 className="text-lg font-semibold mb-4">
                  Table of Contents
                </h2>

                <ul className="space-y-2">
                  {headings.map((item, index) => (
                    <li
                      key={index}
                      className={`${item.level === "h3"
                          ? "ml-4 text-sm"
                          : "text-base"
                        }`}
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-green-400 transition"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {post.mainImage?.asset?.url && (
              <div className="mt-10 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* ================= ARTICLE CONTENT ================= */}

            <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">

              <PortableText
                value={post.body}
                components={{

                  block: {

                    normal: ({ children }) => (
                      <p className="my-6 leading-relaxed">{children}</p>
                    ),

                    h1: ({ children }) => {
                      const text = children
                        ?.map(child => child?.props?.children)
                        .join("");

                      const id = text
                        ?.toLowerCase()
                        .replace(/[^\w\s]/gi, "")
                        .replace(/\s+/g, "-");

                      return (
                        <h1
                          id={id}
                          className="scroll-mt-28 mt-14 mb-6 text-3xl font-bold"
                        >
                          {children}
                        </h1>
                      );
                    },

                    h2: ({ children }) => {
                      const text = children
                        ?.map(child => child?.props?.children)
                        .join("");

                      const id = text
                        ?.toLowerCase()
                        .replace(/[^\w\s]/gi, "")
                        .replace(/\s+/g, "-");

                      return (
                        <h2
                          id={id}
                          className="scroll-mt-28 mt-12 mb-5 text-2xl font-semibold"
                        >
                          {children}
                        </h2>
                      );
                    },

                    h3: ({ children }) => {
                      const text = children
                        ?.map(child => child?.props?.children)
                        .join("");

                      const id = text
                        ?.toLowerCase()
                        .replace(/[^\w\s]/gi, "")
                        .replace(/\s+/g, "-");

                      return (
                        <h3
                          id={id}
                          className="scroll-mt-28 mt-10 mb-4 text-xl font-semibold"
                        >
                          {children}
                        </h3>
                      );
                    },

                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-green-400 pl-4 italic my-6">
                        {children}
                      </blockquote>
                    ),

                  },

                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc ml-6 my-6 space-y-2">
                        {children}
                      </ul>
                    ),

                    number: ({ children }) => (
                      <ol className="list-decimal ml-6 my-6 space-y-2">
                        {children}
                      </ol>
                    ),
                  },

                  listItem: {
                    bullet: ({ children }) => (
                      <li className="leading-relaxed">{children}</li>
                    ),

                    number: ({ children }) => (
                      <li className="leading-relaxed">{children}</li>
                    ),
                  },

                  marks: {

                    strong: ({ children }) => (
                      <strong className="font-semibold">
                        {children}
                      </strong>
                    ),

                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),

                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        {children}
                      </a>
                    ),

                  },

                  types: {
  image: ({ value }) => (
    <img
      src={urlFor(value).width(900).url()}
      alt=""
      className="rounded-xl my-8"
      loading="lazy"
    />
  ),
}

                }}
              />

            </div>

          </article>

          {/* ================= SIDEBAR ================= */}

          <aside className="lg:sticky lg:top-24 h-fit">

            <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-6 bg-gray-50 dark:bg-neutral-900">

              <h3 className="text-lg font-semibold text-black dark:text-white mb-6">
                Most Popular & Best Ranked
              </h3>

              <div className="space-y-4">
                {recommended.map((item, i) => (
                  <Link
                    key={i}
                    to={`/blog/${item.slug.current}`}
                    className="block text-sm text-gray-600 dark:text-gray-300 hover:text-green-400 transition"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}