import { NavLink } from 'react-router-dom';
export default function HomeFeature() {
    const homeFeatureTemp = () => {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                {/* Route TO Trending Repos */}
                <NavLink to="/github-repos" exact className="btn btn-secondary btn-lg" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" activeStyle={{ color: "#4bbef7", borderBottom: "1px solid #4bbef7" }}>
                    Trending Repos
                </NavLink>
            </div>
        )
    }
    return homeFeatureTemp()
}

