import React from 'react'
import { Repo } from '@/types/repo'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface RepoTableProps {
  repos: Repo[];
}

export default function RepoTable({ repos }: RepoTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-75">Repository</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead className="text-right">Stars</TableHead>
          <TableHead className="text-right">Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {repos.map((repo) => (
          <TableRow key={repo.id}>
            <TableCell className="font-medium">{repo.name}</TableCell>
            <TableCell>{repo.description || 'No description'}</TableCell>
            <TableCell>{repo.owner.login}</TableCell>
            <TableCell className="text-right">⭐ {repo.stargazers_count.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}