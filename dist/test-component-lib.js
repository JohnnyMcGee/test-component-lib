import { defineComponent as r, openBlock as _, createElementBlock as a, normalizeStyle as s } from "vue";
const l = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    color: {
      type: String,
      default: "#7878ff"
    }
  },
  setup(t) {
    return (e, o) => (_(), a("button", {
      class: "btn",
      style: s({ backgroundColor: t.color })
    }, " Imported Button ", 4));
  }
});
const p = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, d = /* @__PURE__ */ p(l, [["__scopeId", "data-v-54dcaaa3"]]);
export {
  d as Button
};
