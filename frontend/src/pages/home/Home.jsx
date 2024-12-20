import Banner from "./Banner";
import News from "./News";
import Recomended from "./Recomended";
import TopSeller from "./TopSeller";

export default function Home() {
    return (
        <>
            <Banner />
            <TopSeller />
            <Recomended />
            <News />
        </>
    )
}