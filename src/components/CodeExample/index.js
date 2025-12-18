import React from 'react';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function CodeExample({ title, subtitle, inputCode, inputLabel, outputItems }) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>{title}</h2>
                    {subtitle && <p>{subtitle}</p>}
                </div>
                <div className={styles.codeContainer}>
                    <div className={styles.inputSection}>
                        <div className={styles.label}>{inputLabel}</div>
                        <CodeBlock language="go" className={styles.codeBlock}>
                            {inputCode}
                        </CodeBlock>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.outputSection}>
                        <div className={styles.label}>Generated Output</div>
                        <div className={styles.outputList}>
                            {outputItems.map((item, idx) => (
                                <div key={idx} className={styles.outputItem}>
                                    <span className={styles.outputIcon}>{item.icon}</span>
                                    <span className={styles.outputText}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
