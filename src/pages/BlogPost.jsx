import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { blogAPI } from "../api/config";
import { getFallbackPostById } from "../data/blogPosts";

// Table of Contents Component
const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!content) return;
    
    // Extract headings from content (simple implementation)
    const regex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      matches.push({
        level: match[1].length,
        text: match[2].trim(),
        id: match[2].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '')
      });
    }
    
    setHeadings(matches);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-8 bg-white rounded-lg border border-slate-200 p-6 shadow-lg">
      <h3 className="font-bold text-[#0f2942] mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-sm hover:text-[#2dd4bf] transition-colors ${
              heading.level === 1 ? 'font-semibold' : 
              heading.level === 2 ? 'ml-4' : 'ml-8'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

// Code Block Component with Copy Button
const CodeBlock = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
        <span className="text-xs text-slate-400">{language || 'code'}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-slate-100">{children}</code>
      </pre>
    </div>
  );
};

// Tip Box Component
const TipBox = ({ children, type = 'tip' }) => {
  const styles = {
    tip: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: '💡'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      icon: '⚠️'
    },
    info: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: 'ℹ️'
    }
  };

  const style = styles[type] || styles.tip;

  return (
    <div className={`my-6 p-4 rounded-lg border ${style.bg} ${style.border}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg">{style.icon}</span>
        <div className={`text-sm ${style.text}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Quote Component
const BlockQuote = ({ children }) => (
  <blockquote className="border-l-4 border-[#2dd4bf] pl-6 py-4 my-6 bg-slate-50 rounded-r-lg">
    <p className="text-lg italic text-slate-700">{children}</p>
  </blockquote>
);

export default function BlogPost() {
  const { id } = useParams();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await blogAPI.getOne(id);
        const postData = {
          ...res.data,
          category: res.data?.category || "General",
          image: res.data?.image || res.data?.coverImage || res.data?.imageUrl,
        };
        setPost(postData);
        setLikes(postData.likes || 0);
        
        // Fetch comments
        try {
          const commentsRes = await blogAPI.getComments(id);
          setComments(commentsRes.comments || []);
        } catch (err) {
          console.error('Error fetching comments:', err);
        }
        
        // Fetch related posts (same category)
        try {
          const allPostsRes = await blogAPI.getAll();
          if (allPostsRes.data) {
            const related = allPostsRes.data
              .filter(p => p._id !== id && p.category === postData.category)
              .slice(0, 3);
            setRelatedPosts(related);
          }
        } catch (err) {
          // Ignore error for related posts
        }
      } catch (error) {
        // Try fallback
        const fallback = getFallbackPostById(id);
        if (fallback) {
          setPost(fallback);
          // Set fallback related posts
          const fallbackRelated = [
            { _id: '2', title: 'React Performance Optimization', category: fallback.category },
            { _id: '3', title: 'Modern Web Architecture', category: fallback.category },
            { _id: '4', title: 'Why TypeScript Matters', category: fallback.category }
          ].filter(p => p._id !== id).slice(0, 3);
          setRelatedPosts(fallbackRelated);
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Handle like functionality
  const handleLike = async () => {
    if (!user) {
      alert('Please login to like this post.');
      return;
    }
    
    if (isLiking) return;
    
    setIsLiking(true);
    try {
      await blogAPI.like(id);
      setLikes(prev => prev + 1);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking post:', error);
    } finally {
      setIsLiking(false);
    }
  };

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
        // Fallback to copying to clipboard
        copyToClipboard();
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard();
    }
  };

  // Copy to clipboard fallback
  const copyToClipboard = () => {
    const shareUrl = window.location.href;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy:', err);
        fallbackCopyTextToClipboard(shareUrl);
      });
    } else {
      fallbackCopyTextToClipboard(shareUrl);
    }
  };

  // Fallback copy method
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        alert('Link copied to clipboard!');
      } else {
        alert('Failed to copy link. Please copy manually: ' + text);
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
      alert('Failed to copy link. Please copy manually: ' + text);
    }
    
    document.body.removeChild(textArea);
  };

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Please login to post a comment.');
      return;
    }
    
    if (!newComment.trim() || isSubmittingComment) return;
    
    setIsSubmittingComment(true);
    try {
      const response = await blogAPI.addComment(id, newComment.trim());
      setComments(prev => [response.comment, ...prev]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  // Process content to add special formatting
  const processContent = (content) => {
    if (!content) return '';
    
    // Replace code blocks with CodeBlock component
    let processed = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<CodeBlock language="${lang || ''}">${code.trim()}</CodeBlock>`;
    });
    
    // Replace tip boxes
    processed = processed.replace(/💡\s*Tip:\s*([\s\S]*?)(?=\n\n|\n$|$)/g, (match, tip) => {
      return `<TipBox>${tip.trim()}</TipBox>`;
    });
    
    // Replace blockquotes
    processed = processed.replace(/^>\s*(.+)$/gm, '<BlockQuote>$1</BlockQuote>');
    
    return processed;
  };

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-slate-50">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-[#2dd4bf] border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-slate-600">Loading post...</p>
        </div>
      </section>
    );
  }

  if (notFound || !post) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0f2942] mb-4">Post not found</h1>
          <Link to="/blog" className="text-[#2dd4bf] hover:text-[#1e4a6f] font-medium">Back to Blog</Link>
        </div>
      </section>
    );
  }

  // Use post avatar if available, otherwise use author avatar
  const postAvatar = post.avatar || author.avatar;

  const author = post.author || {
    name: "VTechSoft Team",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
  };

  const engagement = {
    views: post.views || Math.floor(Math.random() * 5000) + 100,
    likes: likes,
    comments: comments.length
  };

  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-[#2dd4bf]">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#2dd4bf]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Post Header */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#2dd4bf]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30">
              {post.category || "General"}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="font-medium text-white">{author.name}</div>
                <div className="text-slate-400">{post.formattedDate || "Jan 20, 2026"}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime || "5 min read"}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {engagement.views.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              {post.image && (
                <div className="mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-slate-200 shadow-lg"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Article Content */}
              <article className="prose prose-slate prose-lg max-w-none">
                <div className="text-slate-700 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // Check if it's a code block
                    if (paragraph.startsWith('```')) {
                      const lines = paragraph.split('\n');
                      const language = lines[0].replace('```', '').trim();
                      const code = lines.slice(1, -1).join('\n');
                      return <CodeBlock key={index} language={language}>{code}</CodeBlock>;
                    }
                    
                    // Check if it's a tip
                    if (paragraph.includes('💡') || paragraph.includes('Tip:')) {
                      const tip = paragraph.replace(/💡\s*Tip:\s*/, '').trim();
                      return <TipBox key={index}>{tip}</TipBox>;
                    }
                    
                    // Check if it's a quote
                    if (paragraph.startsWith('>')) {
                      const quote = paragraph.replace(/^>\s*/, '').trim();
                      return <BlockQuote key={index}>{quote}</BlockQuote>;
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="text-base leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={handleLike}
                      disabled={isLiked || isLiking}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                        isLiked 
                          ? 'bg-red-50 border-red-200 text-red-600' 
                          : user 
                            ? 'border-slate-300 hover:bg-slate-50'
                            : 'border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100'
                      } ${isLiking ? 'opacity-50 cursor-not-allowed' : ''}`}
                      title={!user ? "Login to like this post" : ""}
                    >
                      <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{engagement.likes} {user ? 'Likes' : 'Login to Like'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{engagement.comments} Comments</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handleShare}
                      className="p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      title="Share this post"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Table of Contents */}
                <TableOfContents content={post.content} />
                
                {/* Author Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-lg">
                  <h3 className="font-bold text-[#0f2942] mb-4">About Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200">
                      <img
                        src={postAvatar}
                        alt={author.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0f2942]">{author.name}</div>
                      <div className="text-sm text-slate-600">Tech Expert</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Passionate about sharing knowledge and helping developers build amazing things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2942] mb-8">Comments ({post.comments?.length || 0})</h2>
          
          {/* Comment Form */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0f2942] mb-4">Leave a Comment</h3>
            
            {!user && (
              <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-blue-800 font-medium mb-2">Login to Comment</p>
                    <p className="text-blue-700 text-sm mb-3">
                      Please login to your account to share your thoughts on this post.
                    </p>
                    <div className="flex gap-2">
                      <Link
                        to="/login"
                        className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        Create Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={user ? "Share your thoughts..." : "Please login to comment..."}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent resize-none"
                rows={4}
                disabled={!user}
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmittingComment || !newComment.trim() || !user}
                  className="px-6 py-2 bg-[#2dd4bf] text-white rounded-lg hover:bg-[#26b5a4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                </button>
              </div>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0">
                    <img
                      src={comment.user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format'}
                      alt={comment.user?.name || 'Anonymous'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-[#0f2942]">
                        {comment.user?.name || 'Anonymous'}
                      </span>
                      <span className="text-sm text-slate-500">
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {comments.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f2942] mb-4">You May Also Like</h2>
              <p className="text-lg text-slate-600">
                Discover more articles related to {post.category}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  to={`/blog/${relatedPost._id}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2dd4bf]/20 text-[#2dd4bf]">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0f2942] mb-2 group-hover:text-[#2dd4bf] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">📩 Stay Updated</h2>
          <p className="text-lg text-slate-300 mb-8">
            Get more articles like this delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
              />
              <button className="px-6 py-3 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
