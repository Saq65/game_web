import GameioExclusive from './Home/GameioExclusive'
import ProfileCard from './Home/ProfileCard'
import Slider from './Home/Slider'

function Home() {
    return (
        <div>
            <Slider />
            <ProfileCard />
            <GameioExclusive />
        </div>
    )
}

export default Home