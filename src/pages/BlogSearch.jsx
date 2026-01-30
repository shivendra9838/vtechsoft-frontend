import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogAPI } from "../api/config";
import { FALLBACK_BLOG_POSTS } from "../data/blogPosts";
import BlogSearchBar from "../components/BlogSearchBar";
import BlogCard from "../components/BlogCard";

function normalize(s) {
  return String(s || "").toLowerCase();
}

export default function BlogSearch() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await blogAPI.getAll();
        const data = Array.isArray(res.data) ? res.data : [];
        if (data.length > 0) {
          setPosts(data);
        } else {
          setPosts(FALLBACK_BLOG_POSTS);
          setUsingFallback(true);
        }
      } catch {
        setPosts(FALLBACK_BLOG_POSTS);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const results = useMemo(() => {
    if (!q) return [];
    const nq = normalize(q);
    return posts
      .map((p) => ({
        ...p,
        category: p.category || "General",
        image: p.image || p.coverImage || p.imageUrl,
      }))
      .filter((p) => {
        const hay = `${p.title} ${p.excerpt} ${p.category}`;
        return normalize(hay).includes(nq);
      });
  }, [posts, q]);

  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSearchBar initialValue={q} />
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-slate-600">
              {q ? (
                <>
                  Search results for <span className="font-semibold text-[#0f2942]">“{q}”</span>
                </>
              ) : (
                "Type something to search."
              )}
            </div>
            <Link to="/blog" className="text-sm font-semibold text-[#2dd4bf] hover:text-[#1e4a6f]">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-[#2dd4bf] border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-slate-600">Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0f2942]">No results found</h2>
              <p className="text-slate-600 mt-2">
                Try different keywords (title, category, or short text).
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}

          {usingFallback && !loading && (
            <p className="text-center text-sm text-slate-500 mt-10">
              Showing sample posts. Connect the backend for live content.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

