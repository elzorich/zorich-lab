import styles from './Apple.module.scss';

type PrincipleCardProps = {
  title: string;
  description: string;
  accent: string;
};

export default function PrincipleCard({
  title,
  description,
  accent,
}: PrincipleCardProps) {
  return (
    <div className={styles.glassCard}>
      <div className={styles.cardAccent} style={{ background: accent }} />
      <h3 className={styles.cardTitle} style={{ color: accent }}>
        {title}
      </h3>
      <p className={styles.cardBody}>{description}</p>
    </div>
  );
}
