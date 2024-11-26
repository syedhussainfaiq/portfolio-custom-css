import Link from "next/link";
import styles from '../About.module.css'
 
 export default function About () {
    return(
        <div className = {styles.container}>
            <header className={styles . header}>
                <h1>About Me</h1>
                <nav>
                    <ul>
                        <li><Link href= "/Home">Home</Link></li>
                        <li><Link href= "/Contact">Contact</Link></li>
                     
                    </ul>
                </nav>
            </header>
            <main className={styles .main}>
                <h2>Hello! I'm a passionate web developer</h2>
                <p>I specialize in creating dynamic an interactive websites using technologies like</p>
            </main>
        </div>
    )
 }