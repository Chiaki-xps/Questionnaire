// markRead
// 获取用户信息
import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/userReducer'

function useGetName() {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  return { username, nickname }
}

export default useGetName
