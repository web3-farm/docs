import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "Simplified Farming Fun",
    Svg: require("@site/static/img/feature_list-easy_ui.png").default, // Replace with the path to the first image
    description: (
      <>
        Nature Farm Adventure is crafted for ease and enjoyment. Dive into a
        world of simplified farming where managing your eco-friendly farm is
        intuitive and engaging.
      </>
    ),
  },
  {
    title: "Focus on Sustainability",
    Svg: require("@site/static/img/feature_list-focus.png").default, // Replace with the path to the second image
    description: (
      <>
        Immerse yourself in the essentials of eco-farming. From nurturing crops
        to caring for animals, every action in Nature Farm Adventure contributes
        to a healthier planet.
      </>
    ),
  },
  {
    title: "Earn as You Grow",
    Svg: require("@site/static/img/feature_list-play2earn.png").default, // Replace with the path to the new third image
    description: (
      <>
        Embrace the Play-to-Earn model in Nature Farm Adventure. As you
        cultivate your farm and engage with the community, earn tokens that can
        be used within the game or contribute to real-world ecological projects.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
