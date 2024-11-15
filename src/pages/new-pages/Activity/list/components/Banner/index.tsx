import { Button, Calendar } from 'antd';
import cx from 'classnames';
import { ReactNode } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';

const Banner = () => {
  const { pathname, search } = useLocation();

  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/An4uTrsTiyUAAAAAAAAAAAAADh8WAQFr/original)';

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

        <div className={styles.bannerRight}>
          <Calendar fullscreen={false} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
