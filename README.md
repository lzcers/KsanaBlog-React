# KsanaBlog-React
blog by React
## 基于 React 框架的静态博客实现
文章使用 md 格式，存储在仓库的 article 目录下，通过 Github API 获取文章内容，
然后由 markdown.js 解析，并根据内容自动生成文章目录。

发布文章需要先 `npm run tags` 生成摘要，然后`npm run push`即可，
当然，也可以使用写好的脚本[updatePost.js](https://github.com/lzcers/KsanaBlog-React/blob/master/updatePost.js)。