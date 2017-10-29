import axios from 'axios';

/**
 * Action生成的语法糖
 * @param type        ［action种类］
 * @param payload     ［生成的action］
 */
export const createAction = (type, payload = {}) => ({ type, ...payload});

/**
 * Action type生成器
 * @param {string} type
 * @return {Object}
 */
const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';
export const createActionTypes = base =>
  [PENDING, SUCCESS, FAILURE, RESET].reduce((actions, type ) => {
    actions[type] = `FETCH_${base}_${type}`;
    return actions;
  }, {});

export const fetch = (api, data, opts = {}, errorMessage = '', showMessage = true) => {
  // todo 错误处理
  const p = new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${api}`,
      params: {
        ...data,
      },
    }).then(
      (response) => {
        return resolve('is resolved');
      },
      (error) => {
        return reject('is rejected');
      }
    );
  });
  return p;
};

