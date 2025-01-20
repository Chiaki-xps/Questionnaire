// useSearchParams 用于获取 URL 中的查询参数
import { useSearchParams } from 'react-router-dom'
// useRequest 用于发送请求
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from '../constant/index'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

// 获取问题列表数据
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar, isDeleted } = opt
  const [searchParams] = useSearchParams()

  const { data, loading, error, refresh } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE

      const data = await getQuestionListService({ keyword, isStar, isDeleted, page, pageSize })
      return data
    },
    {
      refreshDeps: [searchParams], // 刷新的依赖项
    }
  )

  return { data, loading, error, refresh }
}

export default useLoadQuestionListData
