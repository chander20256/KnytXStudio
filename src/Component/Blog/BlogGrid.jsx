import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/sanity";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);


  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      excerpt,
      publishedAt,
      "category": categories[0]->title,
      mainImage{
        asset->{url}
      }
    }`;

    client.fetch(query).then((data) => {
      setPosts(data);

      const unique = [
        "All",
        ...new Set(data.map((p) => p.category).filter(Boolean)),
      ];
      setCategories(unique);
    });
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      const matchSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [posts, selectedCategory, search]);

  if (!posts.length) {
    return (
      <div className="py-32 text-center text-black dark:text-white">
        <p className="text-lg animate-pulse">
          Loading latest articles...
        </p>
      </div>
    );
  }

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <section className="relative bg-gray-50 dark:bg-black py-20 lg:py-28 transition-colors">
      <div className="relative max-w-7xl mx-auto px-4">

        {/* ================= FILTER + SEARCH ROW ================= */}
        {/* ================= FILTER + SEARCH ROW ================= */}
<div className="flex items-center justify-between gap-3 sm:gap-6 mb-12">

  {/* FILTER BUTTON */}
  <div className="relative flex-shrink-0">
    <button
      onClick={() => setFilterOpen(!filterOpen)}
      className="flex items-center gap-2 
                 px-3 py-2 sm:px-5 sm:py-3
                 text-xs sm:text-base font-semibold
                 border border-gray-300 dark:border-white/20
                 rounded-lg sm:rounded-xl
                 bg-white dark:bg-neutral-900
                 shadow-sm hover:shadow-md transition"
    >
      <FiFilter size={14} className="sm:w-[18px] sm:h-[18px]" />
      {selectedCategory}
    </button>

    {filterOpen && (
      <div className="absolute left-0 mt-3 w-56 sm:w-64
                      bg-white dark:bg-neutral-900
                      border border-gray-200 dark:border-white/10
                      rounded-xl shadow-xl z-50
                      p-4 space-y-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedCategory(cat);
              setFilterOpen(false);
            }}
            className={`block w-full text-left text-sm font-medium transition ${
              selectedCategory === cat
                ? "text-green-400"
                : "text-gray-600 dark:text-gray-300 hover:text-green-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    )}
  </div>

  {/* SEARCH FIELD */}
  <div className="relative flex-1 max-w-[60%] sm:max-w-sm">
    <FiSearch
      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"
      size={14}
    />
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-8 sm:pl-11 pr-3 sm:pr-4
                 py-2 sm:py-3
                 text-xs sm:text-base
                 rounded-lg sm:rounded-xl
                 border border-gray-300 dark:border-white/10
                 bg-white dark:bg-neutral-900
                 text-black dark:text-white
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
                 transition shadow-sm"
    />
  </div>

</div>

        {/* ================= FEATURED POST ================= */}
        {featured && (
          <div className="group mb-24 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 transition hover:shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-full overflow-hidden">
                <img
                  src={featured.mainImage?.asset?.url}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-10 flex flex-col justify-center">
                {featured.publishedAt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(
                      featured.publishedAt
                    ).toDateString()}
                  </p>
                )}

                <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-black dark:text-white">
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

        {/* ================= GRID POSTS ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {post.mainImage?.asset?.url && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                {post.publishedAt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(
                      post.publishedAt
                    ).toDateString()}
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