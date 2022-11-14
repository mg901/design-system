import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Section = ({ children }: Props) => {
  return <section className={styles.section}>{children}</section>;
};
