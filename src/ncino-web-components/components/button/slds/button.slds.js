import{N as a}from"../button.js";import{r as c,k as d}from"../../../assets/index-chunk.js";import{s as i}from"../../../assets/index-chunk6.js";import{t as b}from"../../../assets/index-chunk3.js";import"../../../assets/index-chunk2.js";var _=Object.defineProperty,m=Object.getOwnPropertyDescriptor,v=(l,s,r,e)=>{for(var t=e>1?void 0:e?m(s,r):s,n=l.length-1,u;n>=0;n--)(u=l[n])&&(t=(e?u(s,r,t):u(t))||t);return e&&t&&_(s,r,t),t};let o=class extends a{get _themeClass(){switch(this.variant){case"neutral":return"slds-button_neutral";case"brand":return"slds-button_brand";case"outline-brand":return"slds-button_outline-brand";case"destructive":return"slds-button_destructive";case"text-destructive":return"slds-button_text-destructive";case"success":return"slds-button_success";default:return""}}render(){return d`
            <button class="slds-button ${this._themeClass}">
                <slot>! Missing Text !</slot>
            </button>
        `}};o.styles=[c(i)];o=v([b("nsc-button")],o);
