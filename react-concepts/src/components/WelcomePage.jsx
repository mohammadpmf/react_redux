import WelcomeMessage from "./WelcomeMessage"

function WelcomePage({ children }) {
    return (
        <div>
            <p>
                Something!
            </p>
            {children}
        </div>
    )
}

export default WelcomePage