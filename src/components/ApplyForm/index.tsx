import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox, Col, Form, Input, Modal, Row, Typography } from 'antd';
import { useIntl } from 'umi';
import styles from './index.less';

export const ApplyForm = ({
  visible = false,
  setVisible,
}: {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const onOk = (values: any) => {
    form.validateFields().then((values) => {
      let body = [];
      for (const [key, value] of Object.entries(values)) {
        body.push(`${key}: ${value}`);
      }

      const bodyString = body.join(';');
      // TODO 用邮件服务替换掉 https://dashboard.emailjs.com/
      window.location.href = `mailto:tugraph@service.alipay.com?subject=${intl.formatMessage(
        {
          id: 'form.banner.slogan',
        },
      )}&body=${bodyString}`;
    });
  };

  return (
    <Modal
      width={800}
      title={intl.formatMessage({ id: 'form.banner.slogan' })}
      open={visible}
      onOk={onOk}
      onCancel={() => {
        setVisible(false);
      }}
      okText={intl.formatMessage({ id: 'form.submit' })}
      className={styles.containerWrapper}
    >
      <Form
        form={form}
        name="applyForFree"
        layout={'vertical'}
        labelCol={{ span: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.name' })}
              name={intl.formatMessage({ id: 'form.name' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.position' })}
              name={intl.formatMessage({ id: 'form.item.position' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.firm' })}
              name={intl.formatMessage({ id: 'form.item.firm' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.phone' })}
              name={intl.formatMessage({ id: 'form.item.phone' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.email' })}
              name={intl.formatMessage({ id: 'form.item.email' })}
              rules={[{ required: true, type: 'email' }]}
            >
              <Input
                type="email"
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className={styles.itemWithTip}>
          <Typography.Text className={styles.tip} type="secondary">
            {intl.formatMessage({ id: 'form.item.desc' })}
          </Typography.Text>
          <Form.Item
            label={intl.formatMessage({ id: 'form.item.situation' })}
            name={intl.formatMessage({ id: 'form.item.situation' })}
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder={intl.formatMessage({
                id: 'form.input.placeholder',
              })}
            />
          </Form.Item>
        </div>

        <Form.Item
          name={intl.formatMessage({ id: 'form.submit.info' })}
          valuePropName="checked"
          rules={[{ required: true }]}
        >
          <Checkbox defaultChecked={false}>
            {intl.formatMessage({ id: 'form.submit.info' })}
          </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};
