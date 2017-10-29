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