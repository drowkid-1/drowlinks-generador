import { b as _export_sfc, u as useNuxtApp, a as useState, _ as __appConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent, reactive } from 'file:///data/data/com.termux/files/home/onelink/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'file:///data/data/com.termux/files/home/onelink/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///data/data/com.termux/files/home/onelink/node_modules/@iconify/vue/dist/offline.mjs';
import { loadIcon } from 'file:///data/data/com.termux/files/home/onelink/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/ofetch/dist/node.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/hookable/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/unctx/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/ufo/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/h3/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/defu/dist/defu.mjs';
import '../../nitro/config.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/destr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/scule/dist/index.mjs';

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2;
      const size = props.size || ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.class) != null ? _a3 : "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-6e89ca90></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-6e89ca90>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e89ca90"]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=Icon-852aaaf9.mjs.map
