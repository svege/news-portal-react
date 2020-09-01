export const getNews = (state) => state.news.news;
export const getNewsLoading = (state) => state.news.isLoading;
export const getNewsErrorMessage = (state) => state.news.errorMessage;

export const getIsAuthed = (state) => state.auth.isAuthed;
export const getIsAuthLoading = (state) => state.auth.isLoading;
export const getAuthErrorMessage = (state) => state.auth.errorMessage;

export const getProfile = (state) => state.profile.profile;
export const getProfileIsLoading = (state) => state.profile.isLoading;
export const getProfileErrorMessage = (state) => state.profile.errorMessage;

export const getUserId = (state) => state.auth.userId;
