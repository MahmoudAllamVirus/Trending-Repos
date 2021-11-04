import GithubRepos from "../view/Pages/Github-Repos/GithubRepos.pages"
import Home from "../view/Pages/Home/Home.pages"
const routes = {
    data: [
        {
            key: Home,
            path: "/"
        },
        {
            key: GithubRepos,
            path: "/github-repos"
        }
    ]
}
export default routes