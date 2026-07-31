'use client'

import styles from './Apple.module.scss';
import { useState } from 'react';
import PrincipleCard from './PrincipleCard';

const principles = [
  {
    title: 'Clarity',
    description: 'Text is legible at every size. Icons are precise and lucid. Adornments are subtle and appropriate.',
    accent: '#0A84FF',
  },
  {
    title: 'Deference',
    description: 'Fluid motion and a crisp, beautiful interface help people understand and interact with content.',
    accent: '#30D158',
  },
  {
    title: 'Depth',
    description: 'Visual layers and realistic motion convey hierarchy, impart vitality, and facilitate understanding.',
    accent: '#BF5AF2',
  },
]

const typeScale = [
  { name: 'Large Title', size: '34px', weight: '700', sample: 'Design is how it works' },
  { name: 'Title 1',     size: '28px', weight: '700', sample: 'Human Interface' },
  { name: 'Headline',    size: '17px', weight: '600', sample: 'Clarity. Deference. Depth.' },
  { name: 'Body',        size: '17px', weight: '400', sample: 'Content is always the focus.' },
  { name: 'Caption',     size: '12px', weight: '400', sample: 'San Francisco · SF Pro' },
]

const systemColors = [
  { name: 'Blue',   value: '#0A84FF' },
  { name: 'Green',  value: '#30D158' },
  { name: 'Indigo', value: '#5E5CE6' },
  { name: 'Orange', value: '#FF9F0A' },
  { name: 'Pink',   value: '#FF375F' },
  { name: 'Purple', value: '#BF5AF2' },
  { name: 'Red',    value: '#FF453A' },
  { name: 'Teal',   value: '#40C8E0' },
  { name: 'Yellow', value: '#FFD60A' },
]

const AppleComponent = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className={`${styles.page} ${theme === 'dark' ? styles.dark : ''}`}>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Human Interface Guidelines</p>
        <h1 className={styles.heroTitle}>
          Design is not just what it looks like.<br />
          <span className={styles.heroAccent}>Design is how it works.</span>
        </h1>
        <p className={styles.heroSub}>iOS · iPadOS · macOS · watchOS · visionOS</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Core Principles</h2>
        <div className={styles.grid3}>
          {principles.map((principle) => (
            <PrincipleCard
              key={principle.title}
              description={principle.description}
              title={principle.title}
              accent={principle.accent} 
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>SF Pro — Type Scale</h2>
        <div className={styles.glassCard}>
          {typeScale.map((t) => (
            <div key={t.name} className={styles.typeRow}>
              <span className={styles.typeMeta}>{t.name} · {t.size}</span>
              <span className={styles.typeSample} style={{ fontSize: t.size, fontWeight: t.weight }}>
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>iOS System Colors</h2>
        <div className={styles.colorGrid}>
          {systemColors.map((c) => (
            <div key={c.name} className={styles.colorSwatch}>
              <div className={styles.swatchDot} style={{ background: c.value }} />
              <span className={styles.swatchName}>{c.name}</span>
              <span className={styles.swatchHex}>{c.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.liquidSection}>
        <div className={styles.liquidCard}>
          <h2 className={styles.liquidTitle}>Liquid Glass</h2>
          <p className={styles.liquidBody}>
            A new material that reflects and refracts light from both the content behind it
            and the surrounding environment. Glass adapts — to light, to content, to context.
          </p>
          <p className={styles.liquidCaption}>Introduced in iOS 26 · iPadOS 26</p>
        </div>
      </section>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
    </div>
  )
}

export default AppleComponent