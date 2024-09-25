import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { AppDispatch } from '../app/store';
import { fetchPosts, createPost, clearPosts } from '../features/postsSlice';

const PostsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: posts, status, error, currentPage, totalPages } = useSelector(
    (state: RootState) => (state as any).posts
  );
  
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts(1));
    }
  }, [status, dispatch]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.body.trim()) {
      dispatch(createPost({
        title: newPost.title,
        body: newPost.body,
        userId: 1,
      }));
      setNewPost({ title: '', body: '' });
      setShowCreateForm(false);
    }
  };

  const loadPage = (page: number) => {
    dispatch(fetchPosts(page));
  };

  if (status === 'loading') {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
        <button 
          onClick={() => dispatch(fetchPosts(1))}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {showCreateForm ? 'Cancel' : 'Create Post'}
          </button>
          <button
            onClick={() => dispatch(clearPosts())}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreatePost} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Post title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Post content"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
              className="w-full p-2 border rounded h-24"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Post
          </button>
        </form>
      )}

      <div className="space-y-4">
        {posts?.map((post: any) => (
          <div key={post.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.body}</p>
            <div className="text-sm text-gray-500">
              Post ID: {post.id} | User ID: {post.userId}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => loadPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
