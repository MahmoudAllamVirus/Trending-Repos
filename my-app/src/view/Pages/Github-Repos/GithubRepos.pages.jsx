import TrendRepo from '../../features/TrendRepo/TrendRepo.features'
import PagesTitle from '../../features/shared/PagesTitle/PagesTitle'
import { useEffect, useState } from 'react'
import { _GET_AllRepos } from '../../../Controllers/services/Repos/Repos.services'
import { FixedSizeList as List } from 'react-window';


export default function GithubRepos() {
    const [APIsKey, setAPIsKey] = useState('GithubRepos')
    const [allRepos, setAllRepos] = useState()
    const [currentPage, setCurrentPage] = useState()

    // const scrollToEnd = () => {
    //     console.log("mahmoud");

    // }

    function scrollToEnd() {
        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {
            console.log("done");
        }
    }



    // Get Data From APIs
    let page = 1
    useEffect(() => {
        _GET_AllRepos("2017-10-22", '', '', page).then(res => {
            setAllRepos(res)
        }).catch(error => {
            console.log(error);
        })
    }, [currentPage])
    const Row = ({ index, style, data }) => {
        const githubRepos = data[index];
        return (
            <div style={style}>
                {
                    <TrendRepo APIs={githubRepos} key={index} />
                }
            </div>

        )
    }

    {
        allRepos?.data?.items.map(elem => {
            return elem?.created_at <= "2017-11-22" && elem?.created_at >= "2017-10-22" &&
                <TrendRepo APIs={elem} key={elem?.id} />
        })
    }
    const githubReposTemp = () => {
        return (
            <div>
                {/* Repos Title */}
                <PagesTitle title="Trending Repos" />
                {/* Github repos  */}
                <div onScroll={scrollToEnd()}>
                    <List className=" w-100 uCT-overflow-x"
                        height={400}
                        itemCount={allRepos?.data?.items?.length}
                        itemData={allRepos?.data?.items}
                        itemSize={170}
                        width={950}
                    >
                        {Row}
                    </List>
                </div>
            </div >
        )
    }
    return githubReposTemp()
}