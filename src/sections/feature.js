/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import FeatureCardColumn from 'components/feature-card-column';

const data = [
  {
    id: 1,
    // imgSrc: Performance,
    altText: 'Математика',
    title: 'Математика',
    text:
      'Выпускники овладевают навыками, позволяющими вести педагогическую деятельность в качестве учителя математики, научного сотрудника, преподавателя ВУЗов и ССУЗов или руководителя общеобразовательных учреждений РС(Я).',
  },
  {
    id: 2,
    // imgSrc: Partnership,
    altText: 'Прикладная математика и информатика',
    title: 'Прикладная математика и информатика',
    text:
      'Выпускники овладевают навыками, позволяющими вести профессиональную деятельность в качестве программистов в области научных исследователей, специалистов по моделированию, специалистов по IT и сетевым технологиям.',
  },
  {
    id: 3,
    // imgSrc: Subscription,
    altText: 'Фундаментальная информатика и информационные технологии',
    title: 'Фундаментальная информатика и информационные технологии',
    text:
      'Сферами применения полученных знаний являются практически все направления человеческой деятельности, где используются компьютерные технологии обработки сигналов и управления динамическими объектами.  ',
  },
  {
    id: 4,
    // imgSrc: Support,
    altText: 'Информатика и вычислительная техника',
    title: 'Информатика и вычислительная техника',
    text:
      'Выпускники овладевают навыками, позволяющими вести профессиональную деятельность в качестве бакалавров информатики и вычислительной техники.',
  },
  {
    id: 5,
    // imgSrc: Support,
    altText: 'Прикладная информатика',
    title: 'Прикладная информатика',
    text:
      'Выпускники овладевают навыками позволяющими вести профессиональную деятельность в качестве информатика, экономиста, менеджера, специалиста государственного и муниципального управления.',
  },
  {
    id: 6,
    // imgSrc: Support,
    altText: 'Педагогическое образование',
    title: 'Педагогическое образование',
    text:
      'Подготовка конкурентоспособных специалистов в области педагогического образования (профиль - математика), способных применять знания, умения и навыки в своей исследовательской, педагогической, проектной деятельности.Выпускники овладевают навыками, позволяющими вести педагогическую деятельность в качестве учителя математики или средних общеобразовательных школ.',
  },
];

export default function Feature() {
  return (
    <section sx = {{variant : 'section.feature'}} id ="directions">
      <Container>
      <SectionHeader
      slogan = "Направления"
      title = "Бакалавриат"
      />
      <Grid sx = {styles.grid}>
        {data.map((item)=>(
          <FeatureCard 
            key = {item.key}
            src = {item.imgSrc}
            alt = {item.altText}
            title = {item.title}
            text = {item.text}>
            
            </FeatureCard>
        ))}
      </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
