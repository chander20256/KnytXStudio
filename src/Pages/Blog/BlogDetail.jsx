import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      publishedAt,
      mainImage{
        asset->{url}
      },
      body
    }`;

    client.fetch(query, { slug }).then((data) => {
      setPost(data);
      window.scrollTo(0, 0);
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="py-24 text-center text-black dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="max-w-3xl mx-auto px-4 py-20 lg:py-28">

        {/* Back */}
        <Link
          to="/blog"
          className="text-sm text-gray-500 hover:text-green-400 transition"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        {post.publishedAt && (
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-white/10 pb-6">
            {new Date(post.publishedAt).toDateString()} ·{" "}
            <span className="text-green-400 font-medium">
              KnytXStudio
            </span>
          </div>
        )}

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <article
          className="mt-16 prose prose-lg max-w-none
                     prose-headings:font-bold
                     prose-headings:text-black
                     dark:prose-headings:text-white
                     prose-a:text-green-400
                     prose-strong:text-black
                     dark:prose-strong:text-white
                     prose-img:rounded-xl
                     dark:prose-invert"
        >
          <PortableText value={post.body} />
        </article>

      </div>
    </section>
  );
}