import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ==================
// 组件
// ==================
function Page3() {
  return <div className="son">C 子container 3</div>;
}

export default connect(
  null,
  (dispatch: any) => ({
    actions: bindActionCreators({}, dispatch),
  }),
)(Page3);
