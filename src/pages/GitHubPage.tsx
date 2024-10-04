import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/rootReducer";
import { AppDispatch } from "../app/store";
import {
  searchGitHubRepos,
  fetchUserRepos,
  clearRepos,
  setSearchTerm,
} from "../features/githubSlice";

const GitHubPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { repos, status, error, searchTerm } = useSelector(
    (state: RootState) => (state as any).github
  );

  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"repos" | "user">("repos");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(setSearchTerm(query));
      if (searchType === "repos") {
        dispatch(searchGitHubRepos(query.trim()));
      } else {
        dispatch(fetchUserRepos(query.trim()));
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub Repository Explorer</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="repos"
                checked={searchType === "repos"}
                onChange={(e) => setSearchType(e.target.value as "repos")}
                className="mr-2"
              />
              Search Repositories
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="user"
                checked={searchType === "user"}
                onChange={(e) => setSearchType(e.target.value as "user")}
                className="mr-2"
              />
              User Repositories
            </label>
          </div>
          <div className="flex flex-1 gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                searchType === "repos"
                  ? 'Search repositories (e.g., "react", "typescript")'
                  : 'Enter username (e.g., "facebook", "microsoft")'
              }
              className="flex-1 p-2 border rounded"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {status === "loading" ? "Searching..." : "Search"}
            </button>
            <button
              type="button"
              onClick={() => dispatch(clearRepos())}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      {status === "loading" && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2">Searching repositories...</p>
        </div>
      )}

      {status === "failed" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      {repos && repos.length > 0 && (
        <div>
          <div className="mb-4 text-gray-600">
            Found {repos.length} repositories
            {searchTerm && ` for "${searchTerm}"`}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo: any) => (
              <div
                key={repo.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                  >
                    {repo.name}
                  </a>
                  <div className="text-sm text-gray-500">{repo.full_name}</div>
                </div>

                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    {repo.language && (
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center">
                      ⭐ {formatNumber(repo.stargazers_count)}
                    </span>
                  </div>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {repos && repos.length === 0 && status === "succeeded" && (
        <div className="text-center py-8 text-gray-500">
          No repositories found. Try a different search term.
        </div>
      )}

      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Powered by GitHub API • Rate limited to 60 requests per hour</p>
      </div>
    </div>
  );
};

export default GitHubPage;
