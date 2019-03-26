import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ==================
// 组件
// ==================
function Page2() {
  return <div className="son">B 子container 2</div>;
}

export default connect(
  null,
  (dispatch: any) => ({
    actions: bindActionCreators({}, dispatch),
  }),
)(Page2);
