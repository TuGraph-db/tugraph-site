import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import { useIntl, history, useLocation } from 'umi';
import { Spin, Row, Col, Pagination } from 'antd';
import { Layout } from 'antd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogs } from '@/data/blog';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { BlogItem } from '@/interface';
import { useMedia } from 'react-use';

import styles from './blog.less';

const { Content } = Layout;

export default function BlogPage() {
  const intl = useIntl();
  const location = useLocation();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [blogDetail, setBlogDetail] = React.useState<string>();
  const [listData, setListData] = React.useState<BlogItem[]>(blogs.slice(0, 5));

  const onPaginationChange = (page: number) => {
    const start = 0 + (page - 1) * 5;
    const end = start + 5;
    setListData(blogs.slice(start, end));
  };

  React.useEffect(() => {
    const id = location.query?.id;
    if (!id) {
      return;
    }
    setBlogDetail(blogs[id]?.content);
  }, []);

  const pcContent = (
    <div className={styles.containerWrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'blog.all' })}
        </div>
        <div className={styles.lists}>
          {listData?.map((item, key) => (
            <div
              className={styles.list}
              key={key}
              onClick={() => {
                history.push(`/blog?id=${item.id}`);
                setBlogDetail(item.content);
              }}
            >
              <Row>
                <Col span={6}>
                  <img src={item.img} alt={item.title} />
                </Col>
                <Col span={18} className={styles.textWrapper}>
                  <div className={styles.listTitle}>{item.title}</div>
                  <div className={styles.updateDate}>{item.updateDate}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        defaultCurrent={1}
        total={blogs?.length}
        showTotal={(total) =>
          `${intl.formatMessage({
            id: 'blog.total',
          })} ${total} ${intl.formatMessage({ id: 'blog.item' })}`
        }
        pageSize={5}
        onChange={onPaginationChange}
      />
    </div>
  );

  const mobileContent = (
    <div className={styles.containerWrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'blog.all' })}
        </div>
        <div className={styles.lists}>
          {blogs?.map((item, key) => (
            <div
              className={styles.list}
              key={key}
              onClick={() => {
                history.push(`/blog?id=${item.id}`);
                setBlogDetail(item.content);
              }}
            >
              <Row>
                <Col span={6}>
                  <img src={item.img} alt={item.title} />
                </Col>
                <Col span={18} className={styles.textWrapper}>
                  <div className={styles.listTitle}>{item.title}</div>
                  <div className={styles.updateDate}>{item.updateDate}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!blogDetail ? (
        <LayoutTemplate
          bannerInfo={{
            bgIconUrl:
              'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*XQVyRqTv_3kAAAAAAAAAAAAAARQnAQ',
            activeKey: 'blog',

            slogan: intl.formatMessage({ id: 'blog.banner.slogan' }),
            subTitle: intl.formatMessage({ id: 'blog.banner.subTitle' }),
          }}
          content={isWide ? pcContent : mobileContent}
        />
      ) : (
        <Layout>
          <div className={styles.headerWrapper}>
            <Header activeKey="blog" />
          </div>
          <Layout>
            <Content className={styles.blogContainerWrapper}>
              <Spin spinning={!!!blogDetail}>
                <HTMLRenderer html={blogDetail} />
              </Spin>
            </Content>
          </Layout>

          <Footer />
        </Layout>
      )}
    </>
  );
}
