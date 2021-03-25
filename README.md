# cool-replace

> 替换特殊需求代码

##  使用方式
- 本地安装 npm i --save cool-replace
在 `package.json` 的 `script` 中添加 "replace": "replace"，在根目录使用 npm run replace remove-script-with-word <keyword> 移除包含该关键词的 script。

- 全局安装 npm i cool-replace -g
直接运行 replace remove-script-with-word <keyword> 移除包含该关键词的 script。

## API
- remove-script-with-word <keyword> [path]
keyword 为需要删除的包含关键词的script标签；path 为文件路径（可输入文件夹或文件路径），如果不指定则为 src。

| 参数     | 说明         | 类型               | 默认值 |
| -------- | ------------ | ------------------ | ------ |
| keyword    | 选项值       | _string_ | -      |
| path    | 可选     | _string_ | src |
