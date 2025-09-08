import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rally Together',
    Svg: require('@site/static/img/rally.svg').default,
    description: (
      <>
        Engage in the battle for sexual purity and God-honoring virtues. Join our <a href="https://discord.gg/xk6qxyZSkx" target="blank">Discord</a> community to get connected. 
      </>
    ),
  },
  {
    title: 'Victory Mindset',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        Develop a winning strategy by destroying addictive behaviors and renewing old thought patterns with Biblical truth.
      </>
    ),
  },
  {
    title: 'Defend Your Honor',
    Svg: require('@site/static/img/shield.svg').default,
    description: (
      <>
        Take offensive measures by standing your ground against temptation and defending from porn-induced relapse.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
