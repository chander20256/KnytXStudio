import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/sanity";

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage{
        asset->{url}
      }
    }`;

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  if (!posts.length) {
    return (
      <div className="py-32 text-center text-black dark:text-white">
        <p className="text-lg animate-pulse">Loading latest articles...</p>
      </div>
    );
  }

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className="relative bg-gray-50 dark:bg-black py-20 lg:py-28 transition-colors">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Section Header */}
        

        {/* FEATURED POST */}
        {featured && (
          <div className="group mb-24 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 transition hover:shadow-2xl">

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="h-80 lg:h-full overflow-hidden">
                <img
                  src={featured.mainImage?.asset?.url}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">

                {featured.publishedAt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(featured.publishedAt).toDateString()}
                  </p>
                )}

                <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-black dark:text-white group-hover:text-green-400 transition">
                  {featured.title}
                </h3>

                <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {featured.excerpt}
                </p>

                <Link
                  to={`/blog/${featured.slug.current}`}
                  className="mt-8 inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Read Full Article →
                </Link>

              </div>
            </div>
          </div>
        )}

        {/* GRID POSTS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              {post.mainImage?.asset?.url && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">

                {post.publishedAt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                )}

                <h3 className="mt-3 text-xl font-semibold text-black dark:text-white group-hover:text-green-400 transition">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug.current}`}
                  className="mt-5 inline-flex items-center gap-2 text-green-400 font-medium hover:underline"
                >
                  Read Article →
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}