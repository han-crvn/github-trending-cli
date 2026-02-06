import Table from 'cli-table3';
import chalk from 'chalk';

export function formatRepos(repos) {
    if (!repos || repos.length === 0) {
        console.log(chalk.yellow('\n⚠️  No trending repositories found.\n'));
        return;
    }

    // Header
    console.log(chalk.bold.magenta('\n🔥 GitHub Trending Repositories\n'));

    const table = new Table({
        head: [
            chalk.bold.cyan('#'),
            chalk.bold.cyan('Repository'),
            chalk.bold.cyan('Description'),
            chalk.bold.cyan('⭐ Stars'),
            chalk.bold.cyan('🍴 Forks'),
            chalk.bold.cyan('Language')
        ],
        colWidths: [5, 30, 45, 12, 10, 15],
        style: {
            head: [],
            border: ['grey']
        },
        wordWrap: true
    });

    repos.forEach((repo, index) => {
        // Format numbers with commas
        const stars = repo.stargazers_count.toLocaleString();
        const forks = repo.forks_count.toLocaleString();
        
        // Colorize language
        const language = repo.language 
            ? chalk.yellow(repo.language) 
            : chalk.gray('N/A');
        
        // Truncate and style description
        const description = repo.description 
            ? chalk.gray(repo.description.substring(0, 100) + (repo.description.length > 100 ? '...' : ''))
            : chalk.dim.gray('No description');
        
        table.push([
            chalk.white(index + 1),
            chalk.bold.green(repo.full_name),
            description,
            chalk.yellow(stars),
            chalk.cyan(forks),
            language
        ]);
    });

    console.log(table.toString());
    console.log(chalk.dim(`\n📊 Total: ${repos.length} repositories\n`));
}