import {onShowCustomThemeView, onThemeChange, onThemeInit} from './theme';
import {onFlushPopularFavorite, onLoadMorePopular, onRefreshPopular} from './popular';
import {onFlushTrendingFavorite, onLoadMoreTrending, onRefreshTrending} from './trending';
import {onLoadMoreSearch, onSearch, onSearchCancel} from './search';
import {onLoadFavoriteData} from './favorite';
import {onLoadLanguage} from './language';

export default {
    onThemeChange,
    onRefreshPopular,
    onLoadMorePopular,
    onRefreshTrending,
    onLoadMoreTrending,
    onLoadFavoriteData,
    onFlushPopularFavorite,
    onFlushTrendingFavorite,
    onLoadLanguage,
    onShowCustomThemeView,
    onThemeInit,
    onSearch,
    onLoadMoreSearch,
    onSearchCancel,
}