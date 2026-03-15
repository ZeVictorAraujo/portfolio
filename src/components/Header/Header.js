import styles from '@/components/Header/Header.module.css'

export default function Header(){
    return(
        <div className={styles.backColor}>
            <h1>Portfolio</h1>
            
            <ul className={styles.listPage}>
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Contatos</li>
            </ul>
            
        </div>
    );
}