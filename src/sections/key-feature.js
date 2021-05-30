/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Качество оказания образовательных услуг.',
    text:
      '',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Международный статус обучения и документов об обучении.',
    text:
      '',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Практическая направленность обучения.',
    text:
      '',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Возможности для развития личности в профессиональном плане.',
    text:
      '',
  },
];

export default function KeyFeature() {
  return (
   <section sx = {{variant :'section.keyFeature'}} id = "feature">
     <Container>
       <SectionHeader
         slogan = "Институт математики и информатики постоянно развивается" 
         title = "открывая новые специальности, внедряя новые технологии">
       </SectionHeader>
       <Grid sx = {styles.grid}>
        {data.map((item)=>(<FeatureCardColumn
        key ={item.id}
        src={item.src}
        alt={item.altText}
        title = {item.title}
        text = {item.text}
        />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
