import TrendRepo from '../../features/TrendRepo/TrendRepo.features'
import PagesTitle from '../../features/shared/PagesTitle/PagesTitle'
import { useEffect, useState } from 'react'
import { _GET_AllRepos } from '../../../Controllers/services/Repos/Repos.services'
import { NavLink } from 'react-router-dom';



export default function GithubRepos() {
    const [APIsKey, setAPIsKey] = useState('GithubRepos')
    const [allRepos, setAllRepos] = useState()
    const [loading, setLoading] = useState(false)
    // Get Data From APIs
    useEffect(() => {
        _GET_AllRepos("2017-10-22", '', '', 1).then(res => {
            setAllRepos(res)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const githubReposTemp = () => {
        return (
            <div>
                {/* Repos Title */}
                <PagesTitle title="Trending Repos" />

                {/* Github repos  */}
                {
                    allRepos?.data?.items.map(elem => {
                        return elem?.created_at <= "2017-11-22" && elem?.created_at >= "2017-10-22" &&
                            <TrendRepo APIs={elem} key={elem?.id} />
                    })
                }
                {/* Route To Home */}
                <div className="d-flex justify-content-center py-4">
                    <NavLink to="/" exact className="btn btn-secondary btn-lg" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" activeStyle={{ color: "#4bbef7", borderBottom: "1px solid #4bbef7" }}>
                        Go Home
                    </NavLink>
                </div>
            </div >
        )
    }
    return githubReposTemp()
}