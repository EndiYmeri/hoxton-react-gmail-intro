import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import backArrow from '../../assets/icons/back-arrow.png'
import downloadButton from '../../assets/icons/download-button.png'
import rateStarButton from '../../assets/icons/rate-star-button.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import MainNav from './MainNav/MainNav'
import MainArticle from './MainArticle/MainArticle'

function MainSection() {
    return (
      <main className="email-view">
        <MainNav/>
        <MainArticle/>
      </main>
    )
}
export default MainSection