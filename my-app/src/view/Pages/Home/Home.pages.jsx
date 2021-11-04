import HomeFeature from "../../features/Home/Home.features"
export default function Home() {
    const homeTemp = () => {
        return (
            <div>
                <HomeFeature />
            </div>
        )
    }
    return homeTemp()
}

