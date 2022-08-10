import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignIn.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignIn() {

    const { data: session } = useSession()

        return (
            <div className={styles.container}>
                <Head>
                    <title>SignIn - Criata</title>
                </Head>
                <main className={styles.main}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>Login</h1>
                        <input type="text" placeholder='E-mail' className={styles.input} />
                        <input type="password" placeholder='Senha' className={styles.input} />
                        <button onClick={() => signIn()} className={styles.btn}>Login</button>
                        <Link href='/signUp'>
                            <a className={styles.link}>Criar conta</a>
                        </Link>
                        <p className={styles.copyright}>Coaraci © 2022</p>
                    </div>
                    <div className={styles.right}>
                        Imagem
                    </div>
                </main >
            </div >
        );
    }