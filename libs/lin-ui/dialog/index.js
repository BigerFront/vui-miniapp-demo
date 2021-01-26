import computeOffset from '../behaviors/computeOffset';
import zIndex from '../behaviors/zIndex';
import hover from '../behaviors/hover';
import validator from '../behaviors/validator';
Component({
  behaviors: [computeOffset, zIndex, hover, validator],
  externalClasses: ['l-class', 'l-title-class', 'l-content-class', 'l-confirm-class', 'l-cancel-class', 'l-bg-class'],
  properties: {
    show: { type: Boolean, value: !1 },
    type: { type: String, value: 'alert', options: ['alert', 'confirm'] },
    title: { type: String, value: '提示' },
    showTitle: { type: Boolean, value: !0 },
    content: { type: String, value: '' },
    locked: { type: Boolean, value: !0 },
    confirmText: { type: String, value: '确定' },
    confirmColor: { type: String, value: '#3683d6' },
    cancelText: { type: String, value: '取消' },
    cancelColor: { type: String, value: '#45526b' },
    titleColor: String,
    contentColor: { type: String, value: 'rgba(89,108,142,1)' },
    openApi: { type: Boolean, value: !0 },
  },
  data: { success: null, fail: null },
  attached() {
    this.data.openApi && this.initDialog();
  },
  pageLifetimes: {
    show() {
      this.data.openApi && this.initDialog();
    },
  },
  methods: {
    initDialog() {
      (wx.lin = wx.lin || {}),
        (wx.lin.showDialog = (t) => {
          const {
            type: e = 'alert',
            title: o = '提示',
            showTitle: l = !0,
            content: s = '',
            locked: a = !0,
            confirmText: i = '确定',
            contentColor: n = 'rgba(89,108,142,1)',
            cancelColor: c = '#45526b',
            cancelText: r = '取消',
            confirmColor: h = '#3683d6',
            success: p = null,
            fail: m = null,
          } = t;
          return (
            this.setData({
              type: e,
              title: o,
              showTitle: l,
              content: s,
              locked: a,
              confirmText: i,
              cancelColor: c,
              cancelText: r,
              confirmColor: h,
              contentColor: n,
              show: !0,
              fail: m,
              success: p,
            }),
            this
          );
        });
    },
    onConfirmTap() {
      const { success: t } = this.data;
      t && t({ confirm: !0, cancel: !1, errMsg: 'showDialog: success' }),
        this.setData({ show: !this.data.show }),
        this.triggerEvent('linconfirm', 'confirm', { bubbles: !0, composed: !0 });
    },
    onCancelTap() {
      const { success: t } = this.data;
      t && t({ confirm: !1, cancel: !0, errMsg: 'showDialog: success' }),
        this.setData({ show: !this.data.show }),
        this.triggerEvent('lincancel', 'cancel', { bubbles: !0, composed: !0 });
    },
    onDialogTap() {
      !0 !== this.data.locked && this.setData({ show: !this.data.show }),
        this.triggerEvent('lintap', !0, { bubbles: !0, composed: !0 });
    },
  },
});
