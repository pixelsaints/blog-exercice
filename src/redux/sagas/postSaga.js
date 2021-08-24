import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://blog.smartcricket.com/wp-json/wp/v2/posts?per_page=21`;

function getApi() {
  return fetch(apiUrl).then(response => response.json())
    .catch((error) => { throw error })
}

function* fetchPosts(action) {
  try {
    const posts = yield call(getApi);
    yield put({ type: 'GET_POSTS_SUCCESS', posts: posts });
  } catch (e) {
    yield put({ type: 'GET_POSTS_FAILED', message: e.message });
  }
}

function* postSaga() {
  yield takeEvery('GET_POSTS_REQUESTED', fetchPosts);
}

export default postSaga;