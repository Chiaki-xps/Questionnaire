// markRead
import { configureStore } from '@reduxjs/toolkit'
// edux-undo：用于撤销和重做、取消
// undoable: 用于给 reducer 增加 undo 功能
// excludeAction: 用于排除某些 action 不参与 undo
// SateWithHistory 类型: 用于包装 reducer 的 state，增加 undo 功能
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import userReducer, { UserStateType } from './userReducer'
import componentsReducer, { ComponentsStateType } from './componentsReducer'
import pageInfoReducer, { PageInfoType } from './pageInfoReducer'

export type StateType = {
  user: UserStateType
  // components: ComponentsStateType
  components: StateWithHistory<ComponentsStateType> // 增加了 undo
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    user: userReducer,

    // // 没有 undo
    // components: componentsReducer,

    //
    // undoable传入 componentsReducer，返回一个新的 reducer
    // 第一个参数是 reducer，第二个参数是配置
    // filter: 用于过滤不需要 undo 的 action
    components: undoable(componentsReducer, {
      limit: 20, // 限制 undo 20 步
      // filter的作用是排除某些 action 不参与 undo
      // excludeAction: 用于排除某些 action 不参与 undo
      // filter中excludeAction: 用于排除某些 action 不参与 undo
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]),
    }),

    pageInfo: pageInfoReducer,
  },
})
