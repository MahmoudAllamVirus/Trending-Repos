import { MediaCT } from "../../view-logic/view-logic"
import githubImage from '../../../assets/images/opengraph.png'
export default function TrendRepo({ APIs }) {
    const trendRepoTemp = () => {
        return (
            <div className={`${MediaCT('md') ? 'cCT-Gradian-Linear-supp' : 'cCT-support2-bg'} container p-0 uCT-f-radius-sC d-flex shadow-lg mb-4`}>
                {/* Owner Avatar */}
                <div className={`${MediaCT('md') ? '' : 'cCT-Gradian-Linear-supp'} d-flex align-items-start align-items-md-center uCT-l-radius-sC  py-2 py-md-4 px-2 px-md-4`}>
                    <img className="uCT-f-radius-sB" src={APIs?.owner?.avatar_url !== '' ? APIs?.owner?.avatar_url : githubImage} width="100" height="100" />
                </div>
                {/* Repository Holder */}
                <div className="pt-3 pt-md-4 w-100 cCT-dark-text ">
                    {/* Repository Name */}
                    <p className="fCT-Regular-s m-0">{APIs?.name !== '' ? APIs?.name : 'No Repository Name'}</p>
                    {/* Repository description */}
                    <p className='mb-0 fCT-Light-sA cCT-gray-text uCT-ellip-text'>{APIs?.description != null ? APIs?.description : 'No Description'}</p>
                    {/* Notification Text */}
                    <div className="w-100 d-flex justify-content-start align-items-center">
                        <div className="p-2 me-2 fCT-Regular-sB uCT-f-radius-sA shadow-sm"> Stars : {APIs?.stargazers_count} K</div>
                        <div className="p-2 ml-3 fCT-Regular-sB uCT-f-radius-sA shadow-sm">Issues : {APIs?.has_issues == true ? APIs?.open_issues_count : 'No Issue'} K</div>
                        <div className="p-2 fCT-Regular-sB">{APIs?.created_at} <strong className="px-1">Created By </strong>{APIs?.owner?.login}</div>
                    </div>
                </div>
            </div>
        )
    }
    return trendRepoTemp()
}