import { Button } from 'antd';
import styles from './index.less';
import JoLPlayer from '@/components/Player';
import FadeInSection from '@/components/FadeInSection';
import { IntlShape } from 'react-intl';
import MainButton from '@/components/MainButton';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';
import Title from 'antd/lib/skeleton/Title';

export interface IBannerProps {
  type: string;
  intl: IntlShape;
}

const Banner = ({ type, intl }: IBannerProps) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/G9ZrRYyDzWIAAAAAAAAAAAAADh8WAQFr/original)';

  const banners = {
    db: {
      title: intl.formatMessage({ id: 'header.product.desc1' }),
      desc: intl.formatMessage({ id: 'home.version0.desc' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(historyPushLinkAt('/docs/tugraph-db'));
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/7NU5RYANpA0AAAAAAAAAAAAADh8WAQFr/original',
    },
    analytics: {
      title: intl.formatMessage({ id: 'header.product.desc2' }),
      desc: intl.formatMessage({ id: 'product_analytics.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(historyPushLinkAt('/docs/tugraph-analytics'));
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/ltFLTZ0LRgoAAAAAAAAAAAAADh8WAQFr/original',
    },
    learn: {
      title: intl.formatMessage({ id: 'header.product.desc3' }),
      desc: intl.formatMessage({ id: 'product_learn.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="experience"
              btnText={intl.formatMessage({ id: 'product.btn.desc' })}
            />

            <Button
              size="large"
              shape="round"
              className={styles.enterpriseConsultationButton}
              onClick={() => {
                history.push(historyPushLinkAt('/docs/tugraph-db'));
              }}
            >
              {intl.formatMessage({ id: 'product.btn.desc1' })}
            </Button>
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/3-DXT6Cd7kAAAAAAAAAAAAAADh8WAQFr/original',
    },
    enterprise: {
      title: intl.formatMessage({ id: 'header.product.desc4' }),
      desc: intl.formatMessage({ id: 'product_enterprise.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/hR8lQoHEIoYAAAAAAAAAAAAADh8WAQFr/original',
    },
    clound: {
      title: intl.formatMessage({ id: 'header.product.desc5' }),
      desc: intl.formatMessage({ id: 'product_clound.description' }),
      btn: (
        <FadeInSection>
          <div className={styles.buttonContainer}>
            <MainButton
              style={{ height: 48 }}
              type="connect"
              btnText={intl.formatMessage({ id: 'footer.contact' })}
            />
          </div>
        </FadeInSection>
      ),
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/KfcLR5aphucAAAAAAAAAAAAADh8WAQFr/original',
    },
  };

  const bannerDetail = banners?.[type] || {};

  const videoList = [
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      title: intl.formatMessage({ id: 'product.video0' }),
      length: '02:39',
    },
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      title: intl.formatMessage({ id: 'product.video1' }),
      length: '02:39',
    },
    {
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
      title: intl.formatMessage({ id: 'product.video2' }),
      length: '02:39',
    },
  ];
  const renderVideo = () => {
    return type === 'db' ? (
      <div className={styles.featureSection}>
        {videoList.map((item) => (
          <div className={styles.featureSectionItem}>
            <JoLPlayer
              option={{
                videoSrc: item.url,
                height: 191,
                width: 345,
              }}
            />
            <div className={styles.videoDesc}>
              <div className={styles.videoName}>{item.title}</div>
              <div className={styles.videoLength}>{item.length}</div>
            </div>
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '567px',
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <FadeInSection>
            <span className={styles.titleText}>{bannerDetail.title}</span>
          </FadeInSection>
          <FadeInSection>
            <span className={styles.descriptionText}>{bannerDetail.desc}</span>
          </FadeInSection>
          {bannerDetail?.btn}
        </div>
        <img src={bannerDetail.icon} alt="" className={styles.icon} />
        {renderVideo()}
      </div>
    </div>
  );
};

export default Banner;
