import axios from 'axios';

export async function fetchTrendingRepos(sinceDate, limit) {
    const url = 'https://api.github.com/search/repositories'

    try {
        const response = await axios.get(url, {
            params: {
                q: `created:>${sinceDate}`,
                sort: 'stars',
                order: 'desc',
                per_page: limit
            },
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        
        return response.data.items;
    } catch (error) {
        throw new Error(
            error.response?.data.message || 'Failed to fetch trending repositories from GitHub'
        )
    }
}