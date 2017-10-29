// lib
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router'

// component
import { Input } from 'antd';

// actions
import { testActionRequest } from '../../actions/testAction'

// constant

// utils
import { testAdapter } from '../../utils/adaptors/testComponent';

// styles
import './index.less';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTestData({
      testParam: 123,
    })
  }

  render() {
    return (
      <div className="test">
        simpleComponent
        <Input />
      </div>
    )
  }
}

SimpleComponent.propTypes = {};

SimpleComponent.defaultProps = {};

const getData = state => state.testComponent.testReducer.getIn(['testData', 'response']).toJS();

const dataSelector = createSelector(
  getData,
  data => testAdapter(data)
)

export default connect(state => ({
  testData: dataSelector(state)
}), dispatch => ({
  getTestData: bindActionCreators(testActionRequest, dispatch)
}))(SimpleComponent);