import { c as create_ssr_component, f as subscribe, v as validate_component, g as escape, i as add_attribute } from './index2-6c38473e.js';
import { B as Button } from './Button-274a3e09.js';
import { T as Table } from './Table-d0293292.js';
import { p as page } from './stores-d80a5611.js';
import './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let province = $page.params.province;
  let year = parseInt($page.params.year);
  let updatedPhoneLandline = "";
  let updatedPhonePostPaymentPhoneLine = "";
  let updatedPhoneWideLandline = "";
  let phone = {};
  $$unsubscribe_page();
  return `<h1>Lineas de teléfono</h1>

${``}

${`${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return `<thead><tr><th>Province</th>
                <th>Year</th>
                <th>Landline</th>
                <th>Post_Payment</th>
                <th>Wide_Landline</th>
                <th>Action</th></tr></thead>
        <tbody><tr><td>${escape(province)}</td>
                <td>${escape(year)}</td>
                <td><input${add_attribute("value", updatedPhoneLandline, 0)}></td>
                <td><input${add_attribute("value", updatedPhonePostPaymentPhoneLine, 0)}></td>
                <td><input${add_attribute("value", updatedPhoneWideLandline, 0)}></td>
                <td>${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `Actualizar`;
        }
      })}</td></tr>
            <tr><td>${escape(phone.province)}</td>
                <td>${escape(phone.year)}</td>
                <td>${escape(phone.landline)}</td>
                <td>${escape(phone.post_payment_phone_line)}</td>
                <td>${escape(phone.wide_landline)}</td></tr></tbody>`;
    }
  })}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1b61d0a5.js.map
