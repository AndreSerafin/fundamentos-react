import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header(props: any) {
  return (
    <>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong>Ignite Feed</strong>
      </header>
    </>
  );
}
