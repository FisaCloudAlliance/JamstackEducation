import { useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

/**
 * ReactでURLやクエリ文字列による変化を簡単にHooksするヘルパーです
 * 
 * 使用例
 * 
 * const router = useRouter();
 * console.log(router.query.postId);
 * console.log(router.pathname)
 */
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params
      },
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}