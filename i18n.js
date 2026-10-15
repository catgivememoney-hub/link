/* MEOW — English / 中文 text for the whole site.
   Elements use data-i18n="key" (text), data-i18n-ph="key" (placeholder),
   data-i18n-aria="key" (aria-label) or data-i18n-html="key" (trusted text with <strong>). */
(() => {
  'use strict';

  const DICT = {
    en: {
      saved: 'Saved meows',
      search: 'Search meows…',
      empty: 'No meows yet. 🐾',
      all: 'All',
      copy: 'Copy',
      moveBtn: 'Move to links.js',
      dismiss: 'Dismiss',
      olderLinks: '{n} older link(s) are only in this browser.',
      heroTitle: 'All your meows. One place.',
      heroHint: 'Add a link below, paste it into links.js, and it lands in the litter box on the left.',
      phTitle: 'Title',
      phTag: 'Tag',
      meowIt: 'Meow it',
      editLinks: 'Edit links.js on GitHub',
      exportJson: 'Export JSON',
      note: 'All meows live in <strong>links.js</strong> in the GitHub repo, so everyone sees the same list. “Meow it” copies the new line and opens links.js for you to paste and commit.',
      loadingPreview: 'Loading preview…',
      noPreview: 'No preview for this site',
      invalidLink: 'Please enter a title and a valid http(s) URL.',
      dupLink: 'That meow is already here.',
      lineCopied: 'Line copied 🐾 Paste it into links.js and commit',
      linesCopied: 'Lines copied 🐾 Paste them into links.js and commit',
      copied: 'Copied! 🐾',
      openSidebar: 'Open sidebar',
      closeSidebar: 'Close sidebar',
      toggleTheme: 'Toggle light/dark theme',
      settings: 'Settings',
      close: 'Close',
      // settings panel
      sLanguage: 'Language',
      sBackground: 'Background',
      sSound: 'Sound',
      sSoundOn: 'Sound effects',
      sSoundHint: 'Light rain. Starts after your first click.',
      sVolume: 'Volume',
      sHints: 'Hints',
      sHintsOn: 'Show small hints',
      sMotion: 'Animation',
      sMotionFull: 'Full',
      sMotionReduced: 'Reduced',
      sPassword: 'Password',
      sNewPw: 'New password',
      sCopyCode: 'Copy code',
      sChangePw: 'Change password',
      sPwHint: 'Type a new password and click "Copy code", then "Change password" and paste the code on GitHub.',
      sPwCodeCopied: 'Code copied. Now click "Change password" and paste it.',
      sPwEmpty: 'Type a new password first.',
      sLock: 'Lock now',
      sReset: 'Reset settings',
      sOn: 'On',
      sOff: 'Off',
      // backgrounds
      bgRain: 'Rainy window',
      bgFrost: 'Frosted mono',
      bgAurora: 'Aurora frost',
      bgMist: 'Misty mountains',
      bgNight: 'Starry night',
      bgSnow: 'Snowy forest',
      bgOcean: 'Sunset sea',
      // confirm
      cCancel: 'Cancel',
      cDelete: 'Delete',
      cReset: 'Reset',
      cDismiss: 'Delete the {n} link(s) saved only in this browser? This can’t be undone.',
      cResetMsg: 'Reset all settings to default?'
    },
    zh: {
      saved: '已存的喵',
      search: '搜索喵…',
      empty: '还没有喵 🐾',
      all: '全部',
      copy: '复制',
      moveBtn: '移到 links.js',
      dismiss: '忽略',
      olderLinks: '有 {n} 个旧链接只存在这个浏览器里。',
      heroTitle: '所有的喵，都在这里。',
      heroHint: '在下面添加链接，粘贴进 links.js，它就会出现在左边的猫砂盆里。',
      phTitle: '标题',
      phTag: '标签',
      meowIt: '喵一下',
      editLinks: '在 GitHub 编辑 links.js',
      exportJson: '导出 JSON',
      note: '所有的喵都保存在 GitHub 仓库的 <strong>links.js</strong> 里，所以每个人看到的列表都一样。“喵一下”会复制新的一行并打开 links.js，你粘贴后提交即可。',
      loadingPreview: '预览加载中…',
      noPreview: '这个网站没有预览',
      invalidLink: '请输入标题和有效的 http(s) 网址。',
      dupLink: '这个喵已经有了。',
      lineCopied: '已复制 🐾 粘贴到 links.js 并提交',
      linesCopied: '已复制 🐾 粘贴到 links.js 并提交',
      copied: '已复制！🐾',
      openSidebar: '打开侧边栏',
      closeSidebar: '关闭侧边栏',
      toggleTheme: '切换深色/浅色',
      settings: '设置',
      close: '关闭',
      sLanguage: '语言',
      sBackground: '背景',
      sSound: '声音',
      sSoundOn: '启用音效',
      sSoundHint: '小雨声。第一次点击页面后开始播放。',
      sVolume: '音量',
      sHints: '提示',
      sHintsOn: '显示小提示',
      sMotion: '动画',
      sMotionFull: '开启',
      sMotionReduced: '减少',
      sPassword: '密码',
      sNewPw: '新密码',
      sCopyCode: '复制代码',
      sChangePw: '更改密码',
      sPwHint: '输入新密码，点“复制代码”，再点“更改密码”，在 GitHub 里粘贴代码。',
      sPwCodeCopied: '代码已复制。现在点“更改密码”并粘贴。',
      sPwEmpty: '请先输入新密码。',
      sLock: '立即锁定',
      sReset: '恢复默认设置',
      sOn: '开',
      sOff: '关',
      bgRain: '雨窗',
      bgFrost: '黑白磨砂',
      bgAurora: '极光磨砂',
      bgMist: '雾中群山',
      bgNight: '星空夜晚',
      bgSnow: '雪中森林',
      bgOcean: '日落海面',
      cCancel: '取消',
      cDelete: '删除',
      cReset: '恢复',
      cDismiss: '要删除只存在这个浏览器里的 {n} 个链接吗？删除后无法恢复。',
      cResetMsg: '要把所有设置恢复成默认吗？'
    }
  };

  let lang = 'en';

  const t = (key, vars) => {
    let s = (DICT[lang] && DICT[lang][key]) ?? DICT.en[key] ?? key;
    if (vars) for (const k in vars) s = s.replace('{' + k + '}', vars[k]);
    return s;
  };

  const apply = (l) => {
    if (DICT[l]) lang = l;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.dispatchEvent(new CustomEvent('meow:lang', { detail: lang }));
  };

  window.MEOW_I18N = { t, apply, get lang() { return lang; } };
  window.t = t;
})();
