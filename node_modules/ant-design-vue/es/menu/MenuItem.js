import _mergeJSXProps from 'babel-helper-vue-jsx-merge-props';
import _extends from 'babel-runtime/helpers/extends';
import { Item, itemProps } from '../vc-menu';
import { getOptionProps, getListeners } from '../_util/props-util';
import Tooltip from '../tooltip';
function noop() {}
export default {
  name: 'MenuItem',
  inheritAttrs: false,
  props: itemProps,
  inject: {
    getInlineCollapsed: { 'default': function _default() {
        return noop;
      } }
  },
  isMenuItem: 1,
  methods: {
    onKeyDown: function onKeyDown(e) {
      this.$refs.menuItem.onKeyDown(e);
    }
  },
  render: function render() {
    var h = arguments[0];

    var props = getOptionProps(this);
    var level = props.level,
        title = props.title,
        rootPrefixCls = props.rootPrefixCls;
    var getInlineCollapsed = this.getInlineCollapsed,
        $slots = this.$slots,
        attrs = this.$attrs;

    var inlineCollapsed = getInlineCollapsed();
    var titleNode = void 0;
    if (inlineCollapsed) {
      titleNode = title || (level === 1 ? $slots['default'] : '');
    }

    var itemProps = {
      props: _extends({}, props, {
        title: inlineCollapsed ? null : title
      }),
      attrs: attrs,
      on: getListeners(this)
    };
    var toolTipProps = {
      props: {
        title: titleNode,
        placement: 'right',
        overlayClassName: rootPrefixCls + '-inline-collapsed-tooltip'
      }
    };
    return h(
      Tooltip,
      toolTipProps,
      [h(
        Item,
        _mergeJSXProps([itemProps, { ref: 'menuItem' }]),
        [$slots['default']]
      )]
    );
  }
};