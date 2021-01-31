import Types from '../types'
import DataStore, {FLAG_STORAGE} from '../../expand/dao/DataStore'
import {_projectModels, handleData} from '../ActionUtil'

/**
 *          action
 * @param storeName
 * @param url
 * @param pageSize
 * @param favoriteDao
 * @returns {function(*=)}
 */
export function onRefreshTrending(storeName, url, pageSize,favoriteDao) {
    return dispatch => {
        dispatch({type: Types.TRENDING_REFRESH, storeName: storeName});
        let dataStore = new DataStore();
        dataStore.fetchData(url, FLAG_STORAGE.flag_trending)//  action    
            .then(data => {
                handleData(Types.TRENDING_REFRESH_SUCCESS, dispatch, storeName, data, pageSize,favoriteDao)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.POPULAR_REFRESH_FAIL,
                    storeName,
                    error
                });
            })
    }
}

/**
 *     
 * @param storeName
 * @param pageIndex    
 * @param pageSize       
 * @param dataArray     
 * @param callBack     ，                ：         ，      
 * @param favoriteDao
 * @returns {function(*)}
 */
export function onLoadMoreTrending(storeName, pageIndex, pageSize, dataArray = [],favoriteDao, callBack) {
    return dispatch => {
        setTimeout(() => {//      
            if ((pageIndex - 1) * pageSize >= dataArray.length) {//        
                if (typeof callBack === 'function') {
                    callBack('no more')
                }
                dispatch({
                    type: Types.TRENDING_LOAD_MORE_FAIL,
                    error: 'no more',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                    projectModels: dataArray
                })
            } else {
                //          
                let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
                _projectModels(dataArray.slice(0, max), favoriteDao, data => {
                    dispatch({
                        type: Types.TRENDING_LOAD_MORE_SUCCESS,
                        storeName,
                        pageIndex,
                        projectModels: data,
                    })
                })
            }
        }, 500);
    }
}
/**
 *       
 * @param storeName
 * @param pageIndex    
 * @param pageSize       
 * @param dataArray     
 * @param favoriteDao
 * @returns {function(*)}
 */
export function onFlushTrendingFavorite(storeName, pageIndex, pageSize, dataArray = [], favoriteDao) {
    return dispatch => {
        //          
        let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
        _projectModels(dataArray.slice(0, max), favoriteDao, data => {
            dispatch({
                type: Types.TRENDING_FLUSH_FAVORITE,
                storeName,
                pageIndex,
                projectModels: data,
            })
        })
    }
}


