import { _ as _sfc_main$2 } from './Simple-938fe15b.mjs';
import { ref, unref, useSSRContext, mergeProps } from 'file:///data/data/com.termux/files/home/onelink/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///data/data/com.termux/files/home/onelink/node_modules/vue/server-renderer/index.mjs';
import { d as useRoute, b as _export_sfc } from '../server.mjs';
import { decode } from 'file:///data/data/com.termux/files/home/onelink/node_modules/js-base64/base64.mjs';
import './Icon-852aaaf9.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///data/data/com.termux/files/home/onelink/node_modules/@iconify/vue/dist/iconify.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Loading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const decodeData = (base64) => JSON.parse(decode(base64));
const _sfc_main = {
  __name: "1",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const acc = route.query.data;
    const decodedData = ref({});
    decodedData.value = decodeData(acc);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_templates_simple = _sfc_main$2;
      const _component_base_loading = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(decodedData)) {
        _push(ssrRenderComponent(_component_templates_simple, { acc: unref(decodedData) }, null, _parent));
      } else {
        _push(`<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">`);
        _push(ssrRenderComponent(_component_base_loading, { class: "h-5 w-5" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=1-61b6de46.mjs.map
