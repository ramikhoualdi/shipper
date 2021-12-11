import './styles.css'

const Carrier = ({user}) => {
    return (
        <div className="carrier" >
            <h1>WELCOME {user.username}</h1>
        </div>
    )
}

Carrier.defaultProps = {
    user: {username:'Ramirez'},
}

export default Carrier


