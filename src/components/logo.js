/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link path="/"
    sx = {{
    variant:'links.logo',
    display:'fkex',
    cursor:'pointer',
    mr:15,
    }}>
      <Image src = {src} alt="imi landing page logo"></Image>
    </Link>
  );
}
