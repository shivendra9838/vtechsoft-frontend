import { Link } from "react-router-dom";
import { useState } from "react";
import { blogAPI } from "../api/config";

export default function BlogCard({ post, isFeatured = false }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const author = post.author || {
    name: "VTechSoft Team",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
  };

  // Use post avatar if available, otherwise use author avatar
  const postAvatar = post.avatar || author.avatar;

  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiking) return;
    
    setIsLiking(true);
    try {
      await blogAPI.like(post._id);
      setLikes(prev => prev + 1);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking post:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const engagement = {
    views: post.views || Math.floor(Math.random() * 5000) + 100,
    likes: likes,
    comments: post.comments?.length || Math.floor(Math.random() * 50) + 1
  };

  return (
    <Link
      to={`/blog/${post._id}`}
      className={`group block bg-white rounded-2xl border border-slate-200 shadow-md shadow-black/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#2dd4bf]/20 hover:-translate-y-2 ${
        isFeatured ? 'ring-2 ring-[#2dd4bf] ring-offset-4' : ''
      }`}
    >
      {/* Category Badge */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2dd4bf] text-white backdrop-blur-sm border border-white/20">
            {post.category || "General"}
          </span>
        </div>
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white backdrop-blur-sm flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}

        {/* Image with hover zoom */}
        <div className="h-56 bg-slate-100 overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0f2942] to-[#1e4a6f]" />
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className={`font-bold text-slate-700 leading-tight mb-3 group-hover:text-[#2dd4bf] transition-colors ${
          isFeatured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-200">
              <img
                src={postAvatar}
                alt={author.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Author Name */}
            <span className="text-sm font-medium text-slate-700">
              {author.name}
            </span>
          </div>
          
          {/* Date and Read Time */}
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{post.formattedDate || "Jan 20, 2026"}</span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime || "5 min read"}
            </span>
          </div>
        </div>

        {/* Engagement Signals */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {engagement.views.toLocaleString()}
            </span>
            <button
              onClick={handleLike}
              disabled={isLiked || isLiking}
              className={`flex items-center gap-1 transition-colors ${
                isLiked ? 'text-red-500' : 'hover:text-red-500'
              } ${isLiking ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {engagement.likes}
            </button>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {engagement.comments}
            </span>
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center text-sm font-semibold text-[#2dd4bf] group-hover:text-[#0f2942] transition-colors">
            Read More
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

