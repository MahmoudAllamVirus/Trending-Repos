import { API } from "../../../environment/enviroment";

// APIs Get list the most starred Github Repository
export const _GET_AllRepos = async (created, stars, desc, currentPage) => {
    created = (typeof created !== 'undefined' ? created : '') // created default
    stars = (typeof stars !== 'undefined' ? stars : '') // stars default
    desc = (typeof desc !== 'undefined' ? desc : '') // desc default
    currentPage = (typeof currentPage !== 'undefined' ? currentPage : '') // currentPage default
    return await API.get(`search/repositories?q=${created}&sort=${stars}&order=${desc}&page=${currentPage}`)
}
