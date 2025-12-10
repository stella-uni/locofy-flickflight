import{R as e}from"./index-DhY--VwN.js";import{c as l}from"./utils-r2PmdWzr.js";import{B as G}from"./button-qiJ_JqNg.js";import{F as k}from"./PlusIcon-CK0K_Rlq.js";import"./index-Cv1A0CQQ.js";import"./index-C_vHipXs.js";import"./index-BoxsY6nR.js";const J=r=>{switch(r){case"xs":return"px-3 py-2";case"sm":return"px-3 py-2";case"base":return"px-4 py-3";case"l":return"px-4 py-4";case"xl":return"px-4 py-4";default:return"px-4 py-3"}},K=r=>{switch(r){case"xs":return"text-xs";case"sm":case"base":case"l":return"text-sm";case"xl":return"text-base";default:return"text-sm"}},Q=r=>{switch(r){case"xs":return"leading-4";case"sm":case"base":case"l":return"leading-5";case"xl":return"leading-6";default:return"leading-5"}},X=r=>{switch(r){case"xs":return{width:"24px",height:"24px"};case"sm":return{width:"28px",height:"28px"};case"base":return{width:"32px",height:"32px"};case"l":return{width:"36px",height:"36px"};case"xl":return{width:"40px",height:"40px"};default:return{width:"32px",height:"32px"}}},Y=r=>{switch(r){case"xs":case"sm":return"rounded-md";case"base":case"l":case"xl":return"rounded-lg";default:return"rounded-lg"}},Z=(r,s="default",n,t)=>{const o=(()=>{const d="!shadow-none";return s==="outline"?l("!bg-background-background-primary","!border !border-border-primary !border-solid",t?"[&_.anticon]:!text-content-content-primary [&_svg]:!text-content-content-primary":"!text-content-content-primary","[&:not(:disabled)]:!bg-background-background-primary","[&:not(:disabled)]:hover:!bg-background-background-primary","[&:not(:disabled)]:active:!bg-background-background-primary","[&:not(:disabled)]:focus:!bg-background-background-primary",d):s==="plain"?l(t?"!bg-background-background-primary":"!bg-transparent","!border-none",t?"[&_.anticon]:!text-content-content-primary [&_svg]:!text-content-content-primary":"!text-content-content-primary",t?"[&:not(:disabled)]:!bg-background-background-primary":"[&:not(:disabled)]:!bg-transparent","[&:not(:disabled)]:hover:!bg-background-background-primary",t?"[&:not(:disabled)]:active:!bg-background-background-primary":"[&:not(:disabled)]:active:!bg-transparent","[&:not(:disabled)]:focus:!bg-background-background-primary",d):l("!bg-background-background-inverse-primary","!border !border-border-inverse-primary !border-solid",t?"[&_.anticon]:!text-content-content-inverse-secondary [&_svg]:!text-content-content-inverse-secondary":"!text-content-content-inverse-primary","[&:not(:disabled)]:!bg-background-background-inverse-primary","[&:not(:disabled)]:hover:!bg-background-background-inverse-primary","[&:not(:disabled)]:active:!bg-background-background-inverse-primary","[&:not(:disabled)]:focus:!bg-background-background-inverse-primary",d)})();if(n||r==="disabled")return(()=>{const m=l("!cursor-not-allowed","[&:disabled]:!opacity-50","[&:disabled]:!cursor-not-allowed");return s==="outline"?l("!bg-background-background-primary","!border !border-border-primary",t?"[&_*]:!text-content-content-secondary":"!text-content-content-secondary","[&:disabled]:!bg-background-background-primary","[&:disabled]:!border-border-primary",t?"[&:disabled_*]:!text-content-content-secondary":"[&:disabled]:!text-content-content-secondary",m):s==="plain"?l(t?"!bg-background-background-primary":"!bg-transparent","!border-none",t?"[&_*]:!text-content-content-secondary":"!text-content-content-secondary",t?"[&:disabled]:!bg-background-background-primary":"[&:disabled]:!bg-transparent","[&:disabled]:!border-none",t?"[&:disabled_*]:!text-content-content-secondary":"[&:disabled]:!text-content-content-secondary",m):l("!bg-background-background-inverse-primary","!border !border-border-inverse-primary",t?"[&_*]:!text-content-content-inverse-tertiary":"!text-content-content-inverse-tertiary","[&:disabled]:!bg-background-background-inverse-primary","[&:disabled]:!border-border-inverse-primary",t?"[&:disabled_*]:!text-content-content-inverse-tertiary":"[&:disabled]:!text-content-content-inverse-tertiary",m)})();const c=()=>s==="outline"||s==="plain"?"hover:!shadow-[inset_0_0_0_9999px_var(--background-background-hover-overlay)]":"hover:!shadow-[inset_0_0_0_9999px_var(--background-background-inverse-hover-overlay)]",h=()=>s==="outline"||s==="plain"?"!shadow-[inset_0_0_0_9999px_var(--background-background-hover-overlay)]":"!shadow-[inset_0_0_0_9999px_var(--background-background-inverse-hover-overlay)]";switch(r){case"default":return l(o,c());case"hover":return l(o,h(),c(),s==="plain"?"[&:not(:disabled)]:hover:!border-none":s==="outline"?"[&:not(:disabled)]:hover:!border-border-primary":"[&:not(:disabled)]:hover:!border-border-inverse-primary");case"focus":return l(o,c());default:return o}},i=e.forwardRef(({size:r="base",state:s="default",variant:n="default",className:t,disabled:a,children:o,iconOnly:c=!1,icon:h,...d},m)=>{const q=c?"":J(r),F=Y(r),P=c?"":K(r),W=c?"":Q(r),u=c?X(r):null,j=Z(s,n,a,c),p=a||s==="disabled",L=c?null:o,O=c?h:void 0;return e.createElement(G,{ref:m,type:"primary",size:r==="xs"||r==="sm"?"small":r==="l"||r==="xl"?"large":"middle",icon:O,disabled:p,className:l("flex items-center justify-center transition-colors","font-medium",c?"!p-0":"",q,P,W,F,j,t),style:{...c&&u?{width:u.width,height:u.height,minWidth:u.width,minHeight:u.height,padding:"0"}:{},fontFamily:"Inter, sans-serif",letterSpacing:"0%",borderRadius:r==="xs"||r==="sm"?"6px":"8px",border:n==="plain"?"none":n==="outline"?"1px solid var(--border-border-primary)":"1px solid var(--border-border-inverse-primary)",backgroundColor:n==="plain"?c?"var(--background-background-primary)":s==="default"||s==="disabled"||p?"transparent":s==="hover"||s==="focus"?"var(--background-background-primary)":"transparent":n==="outline"?"var(--background-background-primary)":"var(--background-background-inverse-primary)",borderColor:n==="plain"?"transparent":n==="outline"?"var(--border-border-primary)":"var(--border-border-inverse-primary)",color:p?n==="outline"||n==="plain"?"var(--content-content-secondary)":"var(--content-content-inverse-tertiary)":n==="outline"||n==="plain"?"var(--content-content-primary)":"var(--content-content-inverse-primary)",opacity:p?.5:1,...s==="hover"&&{boxShadow:n==="outline"||n==="plain"?"inset 0 0 0 9999px var(--background-background-hover-overlay)":"inset 0 0 0 9999px var(--background-background-inverse-hover-overlay)"}},...d},L)});i.displayName="Button";i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'base' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outline' | 'plain'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'plain'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const ce={title:"UI/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","base","l","xl"],description:"Button size: xs, sm, base, l, xl"},state:{control:"select",options:["default","hover","focus","disabled"],description:"Button state: default, hover, focus, disabled"},variant:{control:"select",options:["default","outline","plain"],description:"Button variant: default, outline, plain"},disabled:{control:"boolean",description:"Whether the button is disabled"},iconOnly:{control:"boolean",description:"Whether the button is icon-only"}}},b={args:{children:"Button text",size:"base",state:"default",variant:"default",disabled:!1,iconOnly:!1}},x={args:{icon:e.createElement(k,{className:"w-4 h-4"}),size:"base",state:"default",variant:"default",disabled:!1,iconOnly:!0}},f={render:()=>{const r=["default","outline","plain"],s=["xs","sm","base","l","xl"],n=["default","hover","focus","disabled"];return e.createElement("div",{className:"flex flex-col gap-12 p-8 bg-background-background-primary"},r.map(t=>e.createElement("div",{key:t,className:"flex flex-col gap-8"},e.createElement("h3",{className:"text-lg font-semibold text-content-content-primary"},t.charAt(0).toUpperCase()+t.slice(1)," Variant"),e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm font-medium text-content-content-secondary"},"State"),e.createElement("div",{className:"flex gap-4"},s.map(a=>e.createElement("div",{key:a,className:"w-20 text-center text-sm font-medium text-content-content-secondary"},a.toUpperCase())))),n.map(a=>e.createElement("div",{key:a,className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm text-content-content-secondary"},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement("div",{className:"flex gap-4"},s.map(o=>e.createElement(i,{key:`${t}-${a}-${o}`,variant:t,size:o,state:a},"Button text"))))))))}},v={render:()=>{const r=["default","outline","plain"],s=["xs","sm","base","l","xl"],n=["default","hover","focus","disabled"];return e.createElement("div",{"data-theme":"dark",className:"flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen",style:{backgroundColor:"#18181b"}},r.map(t=>e.createElement("div",{key:t,className:"flex flex-col gap-8"},e.createElement("h3",{className:"text-lg font-semibold text-content-content-primary",style:{color:"#ffffff"}},t.charAt(0).toUpperCase()+t.slice(1)," Variant (Dark Mode)"),e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm font-medium text-content-content-secondary",style:{color:"#a1a1aa"}},"State"),e.createElement("div",{className:"flex gap-4"},s.map(a=>e.createElement("div",{key:a,className:"w-20 text-center text-sm font-medium text-content-content-secondary",style:{color:"#a1a1aa"}},a.toUpperCase())))),n.map(a=>e.createElement("div",{key:a,className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm text-content-content-secondary",style:{color:"#a1a1aa"}},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement("div",{className:"flex gap-4"},s.map(o=>e.createElement(i,{key:`dark-${t}-${a}-${o}`,variant:t,size:o,state:a},"Button text"))))))))}},g={render:()=>{const r=["default","outline","plain"],s=["xs","sm","base","l","xl"],n=["default","hover","focus","disabled"];return e.createElement("div",{className:"flex flex-col gap-12 p-8 bg-background-background-primary"},r.map(t=>e.createElement("div",{key:t,className:"flex flex-col gap-8"},e.createElement("h3",{className:"text-lg font-semibold text-content-content-primary"},t.charAt(0).toUpperCase()+t.slice(1)," Variant (Icon Only)"),e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm font-medium text-content-content-secondary"},"State"),e.createElement("div",{className:"flex gap-4"},s.map(a=>e.createElement("div",{key:a,className:"w-8 text-center text-sm font-medium text-content-content-secondary"},a.toUpperCase())))),n.map(a=>e.createElement("div",{key:a,className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm text-content-content-secondary"},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement("div",{className:"flex gap-4"},s.map(o=>e.createElement(i,{key:`icon-${t}-${a}-${o}`,variant:t,size:o,state:a,iconOnly:!0,icon:e.createElement(k,{className:"w-4 h-4"})}))))))))}},y={render:()=>{const r=["default","outline","plain"],s=["xs","sm","base","l","xl"],n=["default","hover","focus","disabled"];return e.createElement("div",{"data-theme":"dark",className:"flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen",style:{backgroundColor:"#18181b"}},r.map(t=>e.createElement("div",{key:t,className:"flex flex-col gap-8"},e.createElement("h3",{className:"text-lg font-semibold text-content-content-primary",style:{color:"#ffffff"}},t.charAt(0).toUpperCase()+t.slice(1)," Variant (Icon Only, Dark Mode)"),e.createElement("div",{className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm font-medium text-content-content-secondary",style:{color:"#a1a1aa"}},"State"),e.createElement("div",{className:"flex gap-4"},s.map(a=>e.createElement("div",{key:a,className:"w-8 text-center text-sm font-medium text-content-content-secondary",style:{color:"#a1a1aa"}},a.toUpperCase())))),n.map(a=>e.createElement("div",{key:a,className:"flex gap-4 items-center"},e.createElement("div",{className:"w-32 text-sm text-content-content-secondary",style:{color:"#a1a1aa"}},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement("div",{className:"flex gap-4"},s.map(o=>e.createElement(i,{key:`dark-icon-${t}-${a}-${o}`,variant:t,size:o,state:a,iconOnly:!0,icon:e.createElement(k,{className:"w-4 h-4"})}))))))))}};var N,w,E;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Button text',
    size: 'base',
    state: 'default',
    variant: 'default',
    disabled: false,
    iconOnly: false
  }
}`,...(E=(w=b.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var z,C,_;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon className="w-4 h-4" />,
    size: 'base',
    state: 'default',
    variant: 'default',
    disabled: false,
    iconOnly: true
  }
}`,...(_=(C=x.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var A,S,U;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = ['default', 'outline', 'plain'];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = ['xs', 'sm', 'base', 'l', 'xl'];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = ['default', 'hover', 'focus', 'disabled'];
    return <div className="flex flex-col gap-12 p-8 bg-background-background-primary">\r
        {variants.map(variant => <div key={variant} className="flex flex-col gap-8">\r
            <h3 className="text-lg font-semibold text-content-content-primary">\r
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant\r
            </h3>\r
            {/* Header row with size labels */}\r
            <div className="flex gap-4 items-center">\r
              <div className="w-32 text-sm font-medium text-content-content-secondary">\r
                State\r
              </div>\r
              <div className="flex gap-4">\r
                {sizes.map(size => <div key={size} className="w-20 text-center text-sm font-medium text-content-content-secondary">\r
                    {size.toUpperCase()}\r
                  </div>)}\r
              </div>\r
            </div>\r
\r
            {/* State rows */}\r
            {states.map(state => <div key={state} className="flex gap-4 items-center">\r
                <div className="w-32 text-sm text-content-content-secondary">\r
                  {state.charAt(0).toUpperCase() + state.slice(1)}\r
                </div>\r
                <div className="flex gap-4">\r
                  {sizes.map(size => <Button key={\`\${variant}-\${state}-\${size}\`} variant={variant} size={size} state={state}>\r
                      Button text\r
                    </Button>)}\r
                </div>\r
              </div>)}\r
          </div>)}\r
      </div>;
  }
}`,...(U=(S=f.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var $,B,V;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = ['default', 'outline', 'plain'];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = ['xs', 'sm', 'base', 'l', 'xl'];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = ['default', 'hover', 'focus', 'disabled'];
    return <div data-theme="dark" className="flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen" style={{
      backgroundColor: '#18181b'
    }}>\r
        {variants.map(variant => <div key={variant} className="flex flex-col gap-8">\r
            <h3 className="text-lg font-semibold text-content-content-primary" style={{
          color: '#ffffff'
        }}>\r
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Dark\r
              Mode)\r
            </h3>\r
            {/* Header row with size labels */}\r
            <div className="flex gap-4 items-center">\r
              <div className="w-32 text-sm font-medium text-content-content-secondary" style={{
            color: '#a1a1aa'
          }}>\r
                State\r
              </div>\r
              <div className="flex gap-4">\r
                {sizes.map(size => <div key={size} className="w-20 text-center text-sm font-medium text-content-content-secondary" style={{
              color: '#a1a1aa'
            }}>\r
                    {size.toUpperCase()}\r
                  </div>)}\r
              </div>\r
            </div>\r
\r
            {/* State rows */}\r
            {states.map(state => <div key={state} className="flex gap-4 items-center">\r
                <div className="w-32 text-sm text-content-content-secondary" style={{
            color: '#a1a1aa'
          }}>\r
                  {state.charAt(0).toUpperCase() + state.slice(1)}\r
                </div>\r
                <div className="flex gap-4">\r
                  {sizes.map(size => <Button key={\`dark-\${variant}-\${state}-\${size}\`} variant={variant} size={size} state={state}>\r
                      Button text\r
                    </Button>)}\r
                </div>\r
              </div>)}\r
          </div>)}\r
      </div>;
  }
}`,...(V=(B=v.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var I,D,R;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = ['default', 'outline', 'plain'];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = ['xs', 'sm', 'base', 'l', 'xl'];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = ['default', 'hover', 'focus', 'disabled'];
    return <div className="flex flex-col gap-12 p-8 bg-background-background-primary">\r
        {variants.map(variant => <div key={variant} className="flex flex-col gap-8">\r
            <h3 className="text-lg font-semibold text-content-content-primary">\r
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Icon\r
              Only)\r
            </h3>\r
            {/* Header row with size labels */}\r
            <div className="flex gap-4 items-center">\r
              <div className="w-32 text-sm font-medium text-content-content-secondary">\r
                State\r
              </div>\r
              <div className="flex gap-4">\r
                {sizes.map(size => <div key={size} className="w-8 text-center text-sm font-medium text-content-content-secondary">\r
                    {size.toUpperCase()}\r
                  </div>)}\r
              </div>\r
            </div>\r
\r
            {/* State rows */}\r
            {states.map(state => <div key={state} className="flex gap-4 items-center">\r
                <div className="w-32 text-sm text-content-content-secondary">\r
                  {state.charAt(0).toUpperCase() + state.slice(1)}\r
                </div>\r
                <div className="flex gap-4">\r
                  {sizes.map(size => <Button key={\`icon-\${variant}-\${state}-\${size}\`} variant={variant} size={size} state={state} iconOnly={true} icon={<PlusIcon className="w-4 h-4" />} />)}\r
                </div>\r
              </div>)}\r
          </div>)}\r
      </div>;
  }
}`,...(R=(D=g.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var H,M,T;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = ['default', 'outline', 'plain'];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = ['xs', 'sm', 'base', 'l', 'xl'];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = ['default', 'hover', 'focus', 'disabled'];
    return <div data-theme="dark" className="flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen" style={{
      backgroundColor: '#18181b'
    }}>\r
        {variants.map(variant => <div key={variant} className="flex flex-col gap-8">\r
            <h3 className="text-lg font-semibold text-content-content-primary" style={{
          color: '#ffffff'
        }}>\r
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Icon\r
              Only, Dark Mode)\r
            </h3>\r
            {/* Header row with size labels */}\r
            <div className="flex gap-4 items-center">\r
              <div className="w-32 text-sm font-medium text-content-content-secondary" style={{
            color: '#a1a1aa'
          }}>\r
                State\r
              </div>\r
              <div className="flex gap-4">\r
                {sizes.map(size => <div key={size} className="w-8 text-center text-sm font-medium text-content-content-secondary" style={{
              color: '#a1a1aa'
            }}>\r
                    {size.toUpperCase()}\r
                  </div>)}\r
              </div>\r
            </div>\r
\r
            {/* State rows */}\r
            {states.map(state => <div key={state} className="flex gap-4 items-center">\r
                <div className="w-32 text-sm text-content-content-secondary" style={{
            color: '#a1a1aa'
          }}>\r
                  {state.charAt(0).toUpperCase() + state.slice(1)}\r
                </div>\r
                <div className="flex gap-4">\r
                  {sizes.map(size => <Button key={\`dark-icon-\${variant}-\${state}-\${size}\`} variant={variant} size={size} state={state} iconOnly={true} icon={<PlusIcon className="w-4 h-4" />} />)}\r
                </div>\r
              </div>)}\r
          </div>)}\r
      </div>;
  }
}`,...(T=(M=y.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const le=["Default","IconOnly","AllVariations","DarkMode","IconOnlyVariations","IconOnlyDarkMode"];export{f as AllVariations,v as DarkMode,b as Default,x as IconOnly,y as IconOnlyDarkMode,g as IconOnlyVariations,le as __namedExportsOrder,ce as default};
