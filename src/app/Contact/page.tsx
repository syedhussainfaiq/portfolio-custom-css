import Link from "next/link";

import styles from "../Contact.module.css"
export default function Contact (){
    return(
        <div  className={styles .container}>
            <header className={styles .header}>
                <h1>Contact</h1>
                <nav>
                    <ul>
                        <li><Link href="/Home">Home</Link></li>
                       
                    </ul>
                </nav>
            </header>
            <main className={styles .main}>
                <h2>I'd love to hear from you!</h2>
                <p>You can reach me via email at <a href= "mailto:example@example.com">syedfaiqhussain78@gmail.com</a>. </p>
            </main>
        </div>
    )
}