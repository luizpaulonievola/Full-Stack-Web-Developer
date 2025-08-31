import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

/**
 * @file Este arquivo contém o componente de rodapé da página.
 * @summary O componente Footer é responsável por renderizar o rodapé da aplicação,
 * que inclui links para redes sociais e informações de copyright.
 * @see {@link https://react-icons.github.io/react-icons/icons?name=fa} para mais informações sobre os ícones.
 */

/**
 * Componente de rodapé da página.
 *
 * Este componente renderiza o rodapé da página, incluindo ícones de redes sociais
 * e um texto de copyright. Os estilos são aplicados usando CSS Modules.
 *
 * @returns {JSX.Element} O componente de rodapé renderizado.
 */
function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Lista de ícones de redes sociais */}
            <ul className={styles.social_list}>
                <li>
                    {/* Ícone do Facebook */}
                    <FaFacebook />
                </li>
                <li>
                    {/* Ícone do Instagram */}
                    <FaInstagram />
                </li>
                <li>
                    {/* Ícone do Twitter */}
                    <FaTwitter />
                </li>
                <li>
                    {/* Ícone do Linkedin */}
                    <FaLinkedin />
                </li>
            </ul>
            {/* Texto de copyright */}
            <p className={styles.copy_right}>
                <span>Nosso site</span> &copy; 2025
            </p>
        </footer>
    );
}

export default Footer;
