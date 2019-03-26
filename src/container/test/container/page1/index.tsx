import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ==================
// 组件
// ==================
function Page1() {
  return <div className="son">A 子container 1</div>;
}

export default connect(
  null,
  (dispatch: any) => ({
    actions: bindActionCreators({}, dispatch),
  }),
)(Page1);
