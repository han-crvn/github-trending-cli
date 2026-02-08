'use client';
import { useState, useEffect } from 'react';
import { fetchTrendingRepos } from '@/utils/api';
import SpanDuration from '@/components/SpanDuration';
import RepoTable from '@/components/RepoTable';
import { Repo } from '@/types/repo';

export default function Page() {
  const [duration, setDuration] = useState('week');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchTrendingRepos(duration, 30);
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, [duration]);

  return (
    <div>
      <h1>GitHub Trending Repositories</h1>
      <SpanDuration value={duration} onChange={setDuration} />
      
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      
      {!loading && !error && (
        <div>
          {repos.map((repo) => (
            <RepoTable key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}