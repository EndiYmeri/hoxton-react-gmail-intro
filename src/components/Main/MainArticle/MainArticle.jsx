

import EmailActions from './EmailActions'
import EmailBody from './EmailBody'
import EmailHeader from './EmailHeader'
function MainArticle() {
    return (
        <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <EmailHeader/>
        <EmailBody />
        <EmailActions/>
      </article>
    )
}
export default MainArticle