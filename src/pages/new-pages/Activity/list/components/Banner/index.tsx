import { Button, Calendar, Space, Tooltip } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import {
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const Banner = () => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

  const data = {
    startTime: '2024-11-12',
    endTime: '2024-11-22',
  };

  const cellRender: any = (current) => {
    console.log(current, 'lkm'); // if (info.type === 'date') return dateCellRender(current); // if (info.type === 'month') return monthCellRender(current);
    const today = moment().format('YYYY-MM-DD');

    const startOfDayStartDate = moment(data.startTime).endOf('day');
    const startOfDayEndDate = moment(data.endTime).startOf('day');

    const isToDay = moment(current._d).isSame(moment(), 'day');
    const isBetween =
      moment(current._d).isSameOrAfter(startOfDayStartDate) &&
      moment(current._d).isSameOrBefore(startOfDayEndDate);
    const isStartandEnd =
      moment(current._d).format('YYYY-MM-DD') === data.startTime ||
      moment(current._d).format('YYYY-MM-DD') === data.endTime;

    console.log(
      'isBetween',
      moment(current._d).format('YYYY-MM-DD'),
      isStartandEnd,
    );

    return (
      <div
        className={cx(
          styles.fullCell,
          isToDay ? styles.today : '',
          isBetween ? styles.between : '',
          isStartandEnd ? styles.startandend : '',
        )}
      >
        {moment(current._d).format('DD')}
      </div>
    );
  };
  const headerRender = ({ value, onChange }) => {
    const month = value.month();

    const changeMonth = (newMonth) => {
      const now = value.clone().month(newMonth);
      onChange(now);
    };
    return (
      <div className={styles.calendarHeader}>
        <CaretLeftOutlined
          className={styles.left}
          onClick={() => changeMonth(month - 1)}
        />
        <div className={styles.month}>{month + 1}月</div>
        <CaretRightOutlined
          className={styles.right}
          onClick={() => changeMonth(month + 1)}
        />
      </div>
    );
  };

  return (
    <div
      id="banner"
      className={styles.banner}
      style={{
        backgroundImage: background,
        height: '406px',
        backgroundColor: 'rgba(22,80,255,0.05)',
      }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.bannerLeft}>
          <div>
            <div className={styles.avtivityTitle}>
              新一代数据底座，来外滩大会解锁图智能前沿技术
            </div>
            <div className={styles.avtivityInfo}>
              <div className={styles.InfoItem}>
                <div className={styles.InfoItemLabel}>活动类型：</div>
                <div className={styles.InfoItemVal}>线下活动</div>
              </div>
              <div className={styles.InfoItem}>
                <div className={styles.InfoItemLabel}>活动时间：</div>
                <div className={styles.InfoItemVal}>2024-09-07～2024-09-09</div>
              </div>
              <div className={styles.InfoItem}>
                <div className={styles.InfoItemLabel}>活动地点：</div>
                <div className={styles.InfoItemVal}>
                  上海·黄浦区世博园区(黄浦区龙华东路68号) C7 场馆
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Button className={cx(styles.mainBtn, true ? styles.ending : '')}>
              立即报名
            </Button>
          </div>
        </div>

        <Calendar
          className={styles.activityCalendar}
          fullscreen={false}
          dateFullCellRender={cellRender}
          headerRender={headerRender}
        />
      </div>
    </div>
  );
};

export default Banner;
