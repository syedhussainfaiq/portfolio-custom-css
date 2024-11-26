import Link from "next/link";
import styles from "../Home.module.css"

export default function home () {
    return(
        <div className={styles.container}>
        <header className={styles.header}>
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <ul>
                    <li> <Link href="/Home">Home</Link>  </li>
                    <li> <Link href="/About">About</Link>  </li>
                </ul>
            </nav>
        </header>
        <main className={styles.main}>
            <h2>Hi, I'm a web Develpor</h2>
            <p>Cheack out my projects and skills below.</p>
        </main>
      
    </div>
    )
}
