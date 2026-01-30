import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogAPI } from "../api/config";
import { FALLBACK_BLOG_POSTS } from "../data/blogPosts";
import BlogSearchBar from "../components/BlogSearchBar";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'latest');

  const categories = ["Web Development", "Mobile Apps", "Cloud", "AI/ML", "DevOps", "UI/UX"];

  // Get featured posts (first 11 posts for handpicked section)
  const getFeaturedPosts = () => {
    return posts.slice(0, 11);
  };

  // Get latest posts (last 3 posts for latest articles section)
  const getLatestPosts = () => {
    return posts.slice(-3).reverse(); // Last 3 posts, reversed to show newest first
  };

  // Sort posts based on selected option
  const sortPosts = (postsToSort) => {
    const sorted = [...postsToSort];
    switch (sortBy) {
      case 'latest':
        return sorted.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.createdAt || a.date) - new Date(b.createdAt || b.date));
      case 'popular':
        return sorted.sort((a, b) => (b.engagement?.views || 0) - (a.engagement?.views || 0));
      default:
        return sorted;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await blogAPI.getAll();
        if (res.data && res.data.length > 0) {
          let filteredPosts = res.data.map((p) => ({
            ...p,
            category: p.category || "General",
            image: p.image || p.coverImage || p.imageUrl,
          }));

          // Filter by selected tag if any
          if (selectedTag) {
            filteredPosts = filteredPosts.filter(post => 
              post.category === selectedTag || 
              post.tags?.includes(selectedTag) ||
              post.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
              post.excerpt?.toLowerCase().includes(selectedTag.toLowerCase())
            );
          }

          setPosts(sortPosts(filteredPosts));
        } else {
          let fallbackPosts = FALLBACK_BLOG_POSTS;
          
          // Filter fallback posts by selected tag if any
          if (selectedTag) {
            fallbackPosts = fallbackPosts.filter(post => 
              post.category === selectedTag || 
              post.tags?.includes(selectedTag) ||
              post.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
              post.excerpt?.toLowerCase().includes(selectedTag.toLowerCase())
            );
          }
          
          setPosts(sortPosts(fallbackPosts));
          setUsingFallback(true);
        }
      } catch (error) {
        let fallbackPosts = FALLBACK_BLOG_POSTS;
        
        // Filter fallback posts by selected tag if any
        if (selectedTag) {
          fallbackPosts = fallbackPosts.filter(post => 
            post.category === selectedTag || 
            post.tags?.includes(selectedTag) ||
            post.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(selectedTag.toLowerCase())
          );
        }
        
        setPosts(sortPosts(fallbackPosts));
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedTag, sortBy]);

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      setSearchParams({});
    } else {
      setSelectedTag(tag);
      setSearchParams({ tag, sort: sortBy });
    }
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setSearchParams({ tag: selectedTag, sort: newSortBy });
  };

  const getPostCountByTag = (tag) => {
    const allPosts = usingFallback ? FALLBACK_BLOG_POSTS : posts;
    return allPosts.filter(post => 
      post.category === tag || 
      post.tags?.includes(tag) ||
      post.title.toLowerCase().includes(tag.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(tag.toLowerCase())
    ).length;
  };

  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts();

  return (
    <>
      {/* Search bar header */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Our Blog</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Insights, tutorials, and industry trends from our expert team. Stay updated with the latest in technology and innovation.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((tag) => {
                const postCount = getPostCountByTag(tag);
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-[#2dd4bf] text-[#0f2942] border-[#2dd4bf] shadow-lg transform scale-105' 
                        : 'bg-white/10 border-white/20 text-slate-200 hover:bg-white/20 hover:border-white/40 hover:scale-105'
                    }`}
                  >
                    {tag}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      isSelected 
                        ? 'bg-[#0f2942] text-white' 
                        : 'bg-white/20 text-slate-300'
                    }`}>
                      {postCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <span className="text-slate-300">Sort by:</span>
              <div className="flex gap-2">
                {[
                  { value: 'latest', label: 'Latest' },
                  { value: 'popular', label: 'Popular' },
                  { value: 'oldest', label: 'Oldest' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortChange(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      sortBy === option.value
                        ? 'bg-[#2dd4bf] text-[#0f2942] shadow-lg'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedTag && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="text-slate-300">Filtered by:</span>
                <span className="px-3 py-1 rounded-full bg-[#2dd4bf] text-[#0f2942] font-semibold">
                  {selectedTag}
                </span>
                <button
                  onClick={() => handleTagClick(selectedTag)}
                  className="text-slate-300 hover:text-white underline text-sm"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
          <div className="max-w-2xl mx-auto">
            <BlogSearchBar />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {!loading && featuredPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured Posts
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">
                Handpicked Content Just for You
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our most popular and insightful articles that every tech enthusiast should read.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post._id} post={post} isFeatured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-[#2dd4bf] border-t-transparent rounded-full animate-spin mb-6" />
              <p className="text-lg text-slate-600">Loading amazing content...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No posts found</h3>
              <p className="text-slate-600 mb-6">
                {selectedTag 
                  ? `No posts found for "${selectedTag}". Try selecting a different category or clear the filter.`
                  : "No blog posts available at the moment."
                }
              </p>
              {selectedTag && (
                <button
                  onClick={() => handleTagClick(selectedTag)}
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors"
                >
                  Clear Filter
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-12">
              {/* Section Title */}
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">
                  {selectedTag ? `${selectedTag} Articles` : 'Latest Articles'}
                </h2>
                <p className="text-lg text-slate-600">
                  {selectedTag 
                    ? `Discover our best content about ${selectedTag.toLowerCase()}`
                    : 'Explore our latest insights and tutorials'
                  }
                </p>
              </div>
              
              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          )}

          {usingFallback && !loading && posts.length > 0 && (
            <div className="mt-12 text-center p-6 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-amber-800 font-medium">Showing sample posts</span>
              </div>
              <p className="text-sm text-amber-700">
                Connect the backend for live content and real-time updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Newsletter</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">📩 Stay Updated with Latest Insights</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Get exclusive access to expert tutorials, industry trends, and insider tips delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
              />
              <button className="px-6 py-3 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300"
            >
              Create Free Account
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-[#0f2942] hover:bg-slate-100 transition-all duration-300"
            >
              🚀 Need IT Solutions?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
