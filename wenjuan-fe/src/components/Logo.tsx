// markRead
// Logo组件
import React, { FC, useEffect, useState } from 'react'
// Space: 用于设置元素之间的间距
// Typography: 用于设置文字样式
import { Space, Typography } from 'antd'
// FormOutlined: 表单图标
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import useGetUserInfo from '../hooks/useGetUserInfo'
// HOME_PATHNAME: 首页路径 /
// MANAGE_INDEX_PATHNAME: 管理页面路径 /manage/list
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router/index'
import styles from './Logo.module.scss'

const { Title } = Typography

const Logo: FC = () => {
  const { username } = useGetUserInfo()

  const [pathname, setPathname] = useState(HOME_PATHNAME)
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATHNAME)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>小慕问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
