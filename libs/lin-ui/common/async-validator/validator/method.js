import rules from '../rule/index.js';
import { isEmptyValue } from '../util';
function method(e, r, i, t, u) {
  const o = [];
  if (e.required || (!e.required && t.hasOwnProperty(e.field))) {
    if (isEmptyValue(r) && !e.required) return i();
    rules.required(e, r, t, o, u), void 0 !== r && rules.type(e, r, t, o, u);
  }
  i(o);
}
export default method;
