// markRead
/**
 * 这个demo 演示了，当我调用useSelector的时候，相当于我们的组件订阅了store中的某个数据，
 * 当我们 dispatch 之后，对应的组件就会重新执行
 * 所以当点击之后，打印顺序是 reduxDemo -> nickname
 * useSelector本质上就是useContext的封装，所以当store数据变化的时候，对应的组件就会重新执行
 */
import React from 'react'
import useGetName from './useGetName'
import { loginReducer } from '../store/userReducer'
import { useDispatch } from 'react-redux'

function ReduxDemo() {
  console.log('ReduxDemo')

  const dispatch = useDispatch()

  const { nickname } = useGetName()
  console.log('🚀 ~ ReduxDemo ~ nickname:', nickname)

  const changeName = () => {
    const nums = Math.random() + ''
    console.log('🚀 ~ changeName ~ nums:', nums)
    dispatch(loginReducer({ username: nums, nickname: nums }))
  }
  return (
    <>
      <div>{nickname}</div>
      <button onClick={changeName}>+1</button>
    </>
  )
}

export default ReduxDemo
