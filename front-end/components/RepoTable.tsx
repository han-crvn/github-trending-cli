import React from 'react'
import { Repo } from '@/types/repo';

interface RepoTableProps {
  repo: Repo;
}

const RepoTable = ({ repo }: RepoTableProps) => {
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <span>⭐ {repo.stargazers_count}</span>
      <span>🍴 {repo.forks_count}</span>
      <span>{repo.language}</span>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  )
}

export default RepoTable