/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/pos.png';
import Member2 from 'assets/team/imi.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  
  
  {
    id: 1,
    imgSrc: Member2,
    altText: 'ИМИ',
    title: 'ВСЕ новости Института математики и информатики СВФУ',
    designation: '',
    socialProfile: [
    
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/imi_svfu/?hl=ru',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member1,
    altText: 'ПОС ИМИ',
    title: 'Профсоюзная организация студентов института математики и информатики',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://vk.com/posimi_ppossvfu',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/posimi_ppossvfu',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/posimi_ppossvfu/?hl=ru',
        icon: <FaInstagram />,
      },
    ],
  },
  
];

export default function TeamSection() {
  return (
    <section>
    <Container>
      <SectionHeader 
      slogan = ""
      title = "социальные сети"/>
        <Grid sx = {styles.grid}> 
          {data.map((item)=>(
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText = {item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
    </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
