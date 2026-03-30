import { Link } from "react-router-dom";

export default function ServicesCTA(){

  return(
    <section className="py-24 bg-green-500 text-center">

      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-black">
          Explore Our Products
        </h2>

        <p className="mt-4 text-black/80">
          Discover the tools and platforms built by KnytXStudio.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-lg"
        >
          View Products
        </Link>

      </div>

    </section>
  )
}