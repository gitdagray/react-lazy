import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main className="home">
            <h2>Home</h2>
            <p>
                <Link to="/admin">Go to Admin</Link>
            </p>
        </main>
    )
}
export default Home