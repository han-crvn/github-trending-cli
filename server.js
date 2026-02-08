import express from 'express';
import cors from 'cors';
import { fetchTrendingRepos } from './src/api/github.js';
import { getDateFromDuration } from './src/utils/date.js'; 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/trending-repos', async (req, res) => {
  try {
    const { duration = 'week', limit = 30 } = req.query;
    const sinceDate = getDateFromDuration(duration);
    const repos = await fetchTrendingRepos(sinceDate, limit);
    
    res.json({ success: true, data: repos });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});