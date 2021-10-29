var n=`# Svelte

\u6211\u4EEC\u4E0D\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 Svelte \u652F\u6301\uFF0C\u4F46\u4F60\u53EF\u4EE5\u5728 svelte \u4E2D\u8F7B\u677E\u4F7F\u7528\u9999\u8349\u7248\u672C\u3002

## \u4F9D\u8D56\u5B89\u88C5

\`\`\`bash
# install with npm
npm install @milkdown/core @milkdown/preset-commonmark @milkdown/theme-nord
\`\`\`

## \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6

\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5341\u5206\u7B80\u5355\u3002

\`\`\`html
<script>
    import { onMount } from 'svelte';
    import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
    import { commonmark } from '@milkdown/preset-commonmark';
    import { nord } from '@milkdown/theme-nord';

    export let defaultValue;

    function editor(dom) {
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, dom);
                ctx.set(defaultValueCtx, defaultValue);
            })
            .use(nord)
            .use(commonmark)
            .create();
    }
<\/script>

<style></style>

<div use:editor />
\`\`\`

### \u5728\u7EBF\u793A\u4F8B

!CodeSandBox{milkdown-svelte-setup-5we3g?fontsize=14&hidenavigation=1&theme=dark&view=preview}
`;export{n as default};
