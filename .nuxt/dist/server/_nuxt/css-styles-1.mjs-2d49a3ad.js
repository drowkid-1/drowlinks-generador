const tailwind = `/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:Avenir Next,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Ubuntu,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,/*!*/ /*!*/ 0 0 0 1px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:/*!*/ /*!*/ 0 0 0 2px #fff,/*!*/ /*!*/ 0 0 0 4px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E")}[type=radio]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E")}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.-left-8{left:-2rem}.-right-3{right:-.75rem}.-top-3{top:-.75rem}.bottom-0{bottom:0}.left-1\\/2{left:50%}.right-0{right:0}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:.5rem}.col-span-2{grid-column:span 2/span 2}.col-span-6{grid-column:span 6/span 6}.-m-1{margin:-.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-6{margin-bottom:1.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-20{height:5rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-\\[729px\\]{height:729px}.h-full{height:100%}.h-screen{height:100vh}.w-10{width:2.5rem}.w-20{width:5rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-\\[340px\\]{width:340px}.w-full{width:100%}.min-w-0{min-width:0}.max-w-lg{max-width:32rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),-50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.gap-8{gap:2rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:.5rem;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:1.5rem;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:2rem;margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse:0;border-left-width:1px;border-left-width:calc(1px*(1 - var(--tw-divide-x-reverse)));border-right-width:0;border-right-width:calc(1px*var(--tw-divide-x-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\\[3rem\\]{border-radius:3rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.rounded-l-md{border-bottom-left-radius:.375rem;border-top-left-radius:.375rem}.rounded-r-md{border-bottom-right-radius:.375rem;border-top-right-radius:.375rem}.rounded-tl-lg{border-top-left-radius:.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-r{border-right-width:1px}.border-r-0{border-right-width:0}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:#e5e7eb;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:#d1d5db;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-slate-300{--tw-border-opacity:1;border-color:#cbd5e1;border-color:rgb(203 213 225/var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:#f9fafb;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-300{--tw-bg-opacity:1;background-color:#cbd5e1;background-color:rgb(203 213 225/var(--tw-bg-opacity))}.bg-slate-50{--tw-bg-opacity:1;background-color:#f8fafc;background-color:rgb(248 250 252/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-4{padding:1rem}.p-8{padding:2rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.pt-12{padding-top:3rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-6{line-height:1.5rem}.text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:#4b5563;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:#374151;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:#111827;color:rgb(17 24 39/var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity:1;color:#94a3b8;color:rgb(148 163 184/var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:#64748b;color:rgb(100 116 139/var(--tw-text-opacity))}.text-slate-600{--tw-text-opacity:1;color:#475569;color:rgb(71 85 105/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:#334155;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-800{--tw-text-opacity:1;color:#1e293b;color:rgb(30 41 59/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.placeholder-slate-400::-moz-placeholder{--tw-placeholder-opacity:1;color:#94a3b8;color:rgb(148 163 184/var(--tw-placeholder-opacity))}.placeholder-slate-400::placeholder{--tw-placeholder-opacity:1;color:#94a3b8;color:rgb(148 163 184/var(--tw-placeholder-opacity))}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 1px 2px 0 rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-8{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-slate-200{--tw-ring-opacity:1;--tw-ring-color:rgb(226 232 240/var(--tw-ring-opacity))}.ring-slate-800{--tw-ring-opacity:1;--tw-ring-color:rgb(30 41 59/var(--tw-ring-opacity))}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-slate-100:hover{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:#6366f1;border-color:rgb(99 102 241/var(--tw-border-opacity))}.focus\\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(99 102 241/var(--tw-ring-opacity))}.group:hover .group-hover\\:flex{display:flex}@media (min-width:640px){.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:block{display:block}.sm\\:overflow-hidden{overflow:hidden}.sm\\:rounded-md{border-radius:.375rem}.sm\\:p-6{padding:1.5rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:768px){.md\\:col-span-1{grid-column:span 1/span 1}.md\\:col-span-2{grid-column:span 2/span 2}.md\\:mt-0{margin-top:0}.md\\:grid{display:grid}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-6{gap:1.5rem}}`;
export {
  tailwind as default
};
//# sourceMappingURL=css-styles-1.mjs-2d49a3ad.js.map