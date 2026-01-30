import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogSearchBar({ initialValue = "" }) {
  const navigate = useNavigate();
  const [q, setQ] = useState(initialValue);

  const onSubmit = (e) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) {
      navigate("/blog");
      return;
    }
    navigate(`/blog/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex items-stretch w-full">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search here"
          className="flex-1 px-4 sm:px-5 py-3 rounded-l-lg border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 sm:px-5 rounded-r-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}

