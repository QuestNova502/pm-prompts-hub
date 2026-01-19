# PM Prompts Hub - 同步机制

## 数据来源

本项目为 [Dean Peters' Product Manager Prompts](https://github.com/deanpeters/product-manager-prompts) 创建易用的 Web 界面。

**原始库**: https://github.com/deanpeters/product-manager-prompts
**本地副本**: `~/.claude/skills/product-manager-prompts/`

## 同步方式

### 自动提取脚本

使用 `extract-prompts.js` 从本地副本自动提取所有提示词：

```bash
cd ~/pm-prompts-hub
node extract-prompts.js
```

**功能**:
- 自动读取所有 .md 文件
- 提取标题、描述和完整内容
- 自动分类（strategy, research, agile, analysis, storytelling, other）
- 自动生成标签
- 输出到 `prompts-data.js`

### 更新流程

1. **更新本地副本**（如果原库有更新）:
   ```bash
   cd ~/.claude/skills/product-manager-prompts
   git pull origin main
   ```

2. **重新提取**:
   ```bash
   cd ~/pm-prompts-hub
   node extract-prompts.js
   ```

3. **推送到 GitHub**:
   ```bash
   git add prompts-data.js
   git commit -m "Update prompts from Dean Peters library"
   git push
   ```

4. **等待 GitHub Pages 部署**（约 2-3 分钟）

5. **访问网站验证**:
   https://questnova502.github.io/pm-prompts-hub/

## 当前状态

- **提示词数量**: 23 个
- **最后更新**: 2026-01-19
- **数据完整性**: ✅ 包含完整原始内容

## 优势

✅ **完全控制**: 不依赖外部 API
✅ **快速加载**: 静态资源，无需网络请求
✅ **离线可用**: 可以保存为本地 HTML 使用
✅ **易于维护**: 一个脚本更新所有内容
✅ **中文友好**: 界面完全中文化
