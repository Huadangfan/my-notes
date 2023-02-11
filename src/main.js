import { createApp } from 'vue'
import App from './App.vue'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css'

import hljs from 'highlight.js'

import router from './router'

// import Prism from 'prismjs';
// import 'prismjs/components/prism-json';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
    config: {
        toc: {
            includeLevel: [3, 4],
        }
    }
});

VMdPreview.use(createLineNumbertPlugin()).use(createCopyCodePlugin()).use(createKatexPlugin()).use(createMermaidPlugin());


createApp(App).use(VMdPreview).use(router).mount('#app')
