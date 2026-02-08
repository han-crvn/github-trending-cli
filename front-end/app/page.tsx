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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">GitHub Trending Repositories</h1>
      <div className="mb-6">
        <SpanDuration value={duration} onChange={setDuration} />
      </div>
      
      {loading && <div className="text-center py-8">Loading...</div>}
      {error && <div className="text-red-600 text-center py-8">Error: {error}</div>}
      
      {!loading && !error && <RepoTable repos={repos} />}
    </div>
  );
}