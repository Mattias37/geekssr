import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.notice;
};

export const getNoticeLoading = compose((noticeState) => {
  return noticeState.loading;
}, rootState);
export const getNoticeBanner = compose((noticeState) => {
  return noticeState.banner;
}, rootState);
export const getNoticeFirstSection = compose((noticeState) => {
  return noticeState.firstSection;
}, rootState);
export const getNoticeTwoSection = compose((noticeState) => {
  return noticeState.twoSection;
}, rootState);
export const getNoticeDetail = compose((noticeState) => {
  return noticeState.noticeSelected;
}, rootState);