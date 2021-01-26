import rules from '../rule/index.js';
import { isEmptyValue } from '../util';
function string(e, r, i, t, s) {
  const u = [];
  if (e.required || (!e.required && t.hasOwnProperty(e.field))) {
    if (isEmptyValue(r, 'string') && !e.required) return i();
    rules.required(e, r, t, u, s, 'string'),
      isEmptyValue(r, 'string') ||
        (rules.type(e, r, t, u, s),
        rules.range(e, r, t, u, s),
        rules.pattern(e, r, t, u, s),
        !0 === e.whitespace && rules.whitespace(e, r, t, u, s));
  }
  i(u);
}
export default string;
