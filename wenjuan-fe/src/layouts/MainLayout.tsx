// markRead
// 当路由为 / 时，渲染 MainLayout 组件，通过 Outlet 组件渲染父路由的子路由
import React, { FC } from 'react'
// Outlet的作用是渲染父路由的子路由
import { Outlet } from 'react-router-dom'
// Spin 用于页面加载时的加载中状态
import { Layout, Spin } from 'antd'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'
import useLoadUserData from '../hooks/useLoadUserData'
import useNavPage from '../hooks/useNavPage'
import styles from './MainLayout.module.scss'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  // Tip: 为什么退出登陆之后，又回到问券页面
  // 因为每次username发生变化之后，
  useNavPage(waitingUserData)

  return (
    <div className="MainLayout">
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            <UserInfo />
          </div>
        </Header>
        <Layout className={styles.main}>
          <Content>
            {waitingUserData ? (
              <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Spin />
              </div>
            ) : (
              // 渲染父路由的子路由
              <Outlet />
            )}
          </Content>
        </Layout>
        <Footer className={styles.footer}>小慕问卷 &copy;2023 - present. Created by wzs</Footer>
      </Layout>
    </div>
  )
}

export default MainLayout
