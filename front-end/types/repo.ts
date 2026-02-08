export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}