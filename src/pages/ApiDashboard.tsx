import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

const ApiDashboard: React.FC = () => {
  const apiStates = useSelector((state: RootState) => {
    const s = state as any;
    return {
      users: s.users || { status: "idle", error: null },
      posts: s.posts || { status: "idle", error: null },
      weather: s.weather || { status: "idle", error: null },
      github: s.github || { status: "idle", error: null },
      books: s.books || { items: [] },
      todos: s.todos || { items: [] },
    };
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "loading":
        return "text-yellow-600 bg-yellow-100";
      case "succeeded":
        return "text-green-600 bg-green-100";
      case "failed":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "loading":
        return "⏳";
      case "succeeded":
        return "✅";
      case "failed":
        return "❌";
      default:
        return "⚪";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">API Status Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* External APIs */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">OpenSea Collections</h3>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(
              apiStates.users.status
            )}`}
          >
            <span className="mr-2">
              {getStatusIcon(apiStates.users.status)}
            </span>
            {apiStates.users.status}
          </div>
          {apiStates.users.error && (
            <p className="text-red-600 text-sm mt-2">{apiStates.users.error}</p>
          )}
          <div className="mt-2 text-sm text-gray-600">
            Endpoint: api.opensea.io/api/v2/collections
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">JSONPlaceholder Posts</h3>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(
              apiStates.posts.status
            )}`}
          >
            <span className="mr-2">
              {getStatusIcon(apiStates.posts.status)}
            </span>
            {apiStates.posts.status}
          </div>
          {apiStates.posts.error && (
            <p className="text-red-600 text-sm mt-2">{apiStates.posts.error}</p>
          )}
          <div className="mt-2 text-sm text-gray-600">
            Endpoint: jsonplaceholder.typicode.com/posts
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">Weather Service</h3>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(
              apiStates.weather.status
            )}`}
          >
            <span className="mr-2">
              {getStatusIcon(apiStates.weather.status)}
            </span>
            {apiStates.weather.status}
          </div>
          {apiStates.weather.error && (
            <p className="text-red-600 text-sm mt-2">
              {apiStates.weather.error}
            </p>
          )}
          <div className="mt-2 text-sm text-gray-600">Mock API (Demo data)</div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">GitHub API</h3>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(
              apiStates.github.status
            )}`}
          >
            <span className="mr-2">
              {getStatusIcon(apiStates.github.status)}
            </span>
            {apiStates.github.status}
          </div>
          {apiStates.github.error && (
            <p className="text-red-600 text-sm mt-2">
              {apiStates.github.error}
            </p>
          )}
          <div className="mt-2 text-sm text-gray-600">
            Endpoint: api.github.com
          </div>
        </div>

        {/* Local State */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">Books (Local)</h3>
          <div className="text-2xl font-bold text-blue-600">
            {apiStates.books.items?.length || 0}
          </div>
          <div className="text-sm text-gray-600">Books in inventory</div>
          <div className="mt-2 text-sm text-gray-600">
            Persisted with Redux Persist
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">Todos (Local)</h3>
          <div className="text-2xl font-bold text-green-600">
            {apiStates.todos.items?.length || 0}
          </div>
          <div className="text-sm text-gray-600">Total todos</div>
          <div className="mt-2 text-sm text-gray-600">
            Persisted with Redux Persist
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">
          Redux Toolkit Features Demonstrated
        </h3>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            createAsyncThunk for API calls
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            createSlice for state management
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            Redux Persist for data persistence
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            TypeScript integration
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            Error handling and loading states
          </div>
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            React Router integration
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDashboard;
