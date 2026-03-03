import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <p className="text-xs uppercase tracking-wide text-green-400 font-semibold">
          {post.category}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-xl font-semibold text-black dark:text-white group-hover:text-green-400 transition">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* CTA */}
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-green-400 font-medium hover:underline"
        >
          Read Article →
        </Link>

      </div>
    </div>
  );
}