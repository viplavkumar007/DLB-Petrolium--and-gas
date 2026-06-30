import { noticeItems, marqueeText } from '../data/siteContent';
import NoticeBar from '../components/common/NoticeBar';
import Marquee from '../components/common/Marquee';

export default function NoticeMarquee() {
  return (
    <>
      <NoticeBar items={noticeItems} />
      <Marquee text={marqueeText} />
    </>
  );
}
