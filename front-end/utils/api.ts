const API_URL = 'http://localhost:3001/api';

export async function fetchTrendingRepos(duration: string, limit: number = 30) {
  try {
    const response = await fetch(
      `${API_URL}/trending-repos?duration=${duration}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch from backend');
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'API request failed');
    }
    
    return data.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch repositories'
    );
  }
}