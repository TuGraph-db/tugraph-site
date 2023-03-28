import React, { useState, useEffect } from 'react';
import { Button, Carousel, Drawer, Modal, Tooltip } from 'antd';
import { getLocale, history } from 'umi';
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  DoubleLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useMedia } from 'react-use';
import { useIntl } from 'umi';
import styles from './index.less';
import { getBannerContentList } from '@/data/bannerContent';
const AnnouncementBanner = () => {
  const [showBottomDrawer, setShowBottomDrawer] = useState(false);
  const [showBottomModal, setShowBottomModal] = useState(true);
  const [isBigPicture, setIsBigPicture] = useState(false);
  const isWide = useMedia('(min-width: 767.99px)', true);
  const intl = useIntl();
  const lang = getLocale();
  useEffect(() => {
    if (sessionStorage.getItem('isBannerShow')) {
      setShowBottomDrawer(false);
      setShowBottomModal(false);
    } else {
      setShowBottomDrawer(true);
      setShowBottomModal(true);
    }
    setIsBigPicture(window.screen.width > 1440);
  }, []);
  const onOpenBanner = () => {
    setShowBottomModal(true);
  };
  const pcBanner = lang === 'zh-CN' && (
    <>
      <Tooltip
        title={intl.formatMessage({ id: 'home.banner.expandBtnDesc' })}
        color="#FFFFFF"
        placement="left"
      >
        <div
          className={styles.expandBtn}
          onClick={() => {
            setShowBottomDrawer(true);
          }}
        >
          <img
            src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*WjEsS552EJAAAAAAAAAAAAAADgOBAQ/original"
            alt=""
          />
        </div>
      </Tooltip>
      <Drawer
        placement="right"
        open={showBottomDrawer}
        mask={false}
        height="192"
        closable={false}
        className={styles.bottomDrawer}
      >
        <div className={styles.closeOutlinedBtn}>
          <CloseOutlined
            onClick={() => {
              setShowBottomDrawer(false);
              sessionStorage.setItem('isBannerShow', 'false');
            }}
          />
        </div>
        {getBannerContentList(intl).length > 1 && (
          <>
            <div className={styles.leftOutlinedBtn}>
              <LeftOutlined />
            </div>
            <div className={styles.rightOutlinedBtn}>
              <RightOutlined />
            </div>
          </>
        )}
        <Carousel>
          {getBannerContentList(intl).map((item, index) => (
            <div key={index} className={styles.bannerContainer}>
              <img
                src={!isBigPicture ? item.pcImg : item.pcImg1920}
                onClick={() => {
                  setShowBottomDrawer(false);
                  sessionStorage.setItem('isBannerShow', 'false');
                  history.push('/blog?id=13');
                }}
              />
            </div>
          ))}
        </Carousel>
      </Drawer>
    </>
  );
  const mobileBanner = lang === 'zh-CN' && (
    <>
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*E6rZRLlvvDoAAAAAAAAAAAAADgOBAQ/original"
        className={styles.announcementIcon}
        onClick={() => {
          onOpenBanner();
        }}
      />
      <Modal
        className={styles.bannerModal}
        open={showBottomModal}
        closable={false}
        footer={null}
      >
        <Carousel>
          {getBannerContentList(intl).map((item, index) => (
            <div key={index} className={styles.mobileContainer}>
              <img
                src={item.mobileImg}
                onClick={() => {
                  history.push('/blog?id=13');
                  setShowBottomModal(false);
                  sessionStorage.setItem('isBannerShow', 'false');
                }}
              />
            </div>
          ))}
        </Carousel>
        <CloseOutlined
          className={styles.mobileCloseIcon}
          onClick={() => {
            setShowBottomModal(false);
            sessionStorage.setItem('isBannerShow', 'false');
          }}
        />
      </Modal>
    </>
  );
  return isWide ? pcBanner : mobileBanner;
};
export default AnnouncementBanner;
