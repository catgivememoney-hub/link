/* MEOW — English / 中文 text for the whole site.
   Elements use data-i18n="key" (text), data-i18n-ph="key" (placeholder),
   data-i18n-aria="key" (aria-label) or data-i18n-html="key" (trusted text with <strong>). */
(() => {
  'use strict';

  const DICT = {
    en: {
      saved: 'Saved meows',
      search: 'Search',
      empty: 'Empty',
      all: 'All',
      copy: 'Copy',
      moveBtn: 'Move',
      dismiss: 'Delete',
      olderLinks: '{n} only in this browser',
      heroTitle: 'All your meows. One place.',
      heroHint: '+ copies a line → paste into links.js',
      phTitle: 'Title',
      phTag: '#tag',
      meowIt: 'Add',
      editLinks: 'Edit links.js',
      exportJson: 'Export JSON',
      note: 'All meows live in <strong>links.js</strong> in the GitHub repo, so everyone sees the same list. “Meow it” copies the new line and opens links.js for you to paste and commit.',
      loadingPreview: '…',
      noPreview: 'No preview',
      invalidLink: 'Title and a valid link',
      dupLink: 'Already here',
      lineCopied: 'Copied → paste into links.js',
      linesCopied: 'Copied → paste into links.js',
      copied: 'Copied',
      openSidebar: 'Open sidebar',
      closeSidebar: 'Close sidebar',
      toggleTheme: 'Toggle light/dark theme',
      settings: 'Settings',
      gallery: 'Gallery',
      close: 'Close',
      // settings panel
      sLanguage: 'Language',
      sBackground: 'Scene',
      sSound: 'Sound',
      sSoundOn: 'Sound',
      sSoundHint: 'Starts on first click',
      sVolume: 'Volume',
      sHints: 'Hints',
      sHintsOn: 'Hints',
      sMotion: 'Motion',
      sMotionFull: 'Full',
      sMotionReduced: 'Less',
      sPassword: 'Password',
      sNewPw: 'New password',
      sCopyCode: 'Code',
      sChangePw: 'Change password',
      sPwHint: 'Code → Change password → paste',
      sPwCodeCopied: 'Code copied',
      sPwEmpty: 'Type a password',
      sLock: 'Lock',
      sReset: 'Reset',
      sOn: 'On',
      sOff: 'Off',
      // backgrounds
      bgRain: 'Rain',
      bgFrost: 'Frost',
      bgAurora: 'Aurora',
      bgMist: 'Mist',
      bgNight: 'Night',
      bgSnow: 'Snow',
      bgOcean: 'Sea',
      // confirm
      cCancel: 'Cancel',
      cDelete: 'Delete',
      cReset: 'Reset',
      cDismiss: 'Delete {n} local link(s)?',
      cResetMsg: 'Reset settings?'
    },
    zh: {
      saved: '已存的喵',
      search: '搜索',
      empty: '空',
      all: '全部',
      copy: '复制',
      moveBtn: '移入',
      dismiss: '删除',
      olderLinks: '{n} 个只在本浏览器',
      heroTitle: '所有的喵，都在这里。',
      heroHint: '+ 复制一行 → 粘贴进 links.js',
      phTitle: '标题',
      phTag: '#标签',
      meowIt: '添加',
      editLinks: '编辑 links.js',
      exportJson: '导出 JSON',
      note: '所有的喵都保存在 GitHub 仓库的 <strong>links.js</strong> 里，所以每个人看到的列表都一样。“喵一下”会复制新的一行并打开 links.js，你粘贴后提交即可。',
      loadingPreview: '…',
      noPreview: '无预览',
      invalidLink: '需要标题和有效链接',
      dupLink: '已经有了',
      lineCopied: '已复制 → 粘贴进 links.js',
      linesCopied: '已复制 → 粘贴进 links.js',
      copied: '已复制',
      openSidebar: '打开侧边栏',
      closeSidebar: '关闭侧边栏',
      toggleTheme: '切换深色/浅色',
      settings: '设置',
      gallery: '画廊',
      close: '关闭',
      sLanguage: '语言',
      sBackground: '场景',
      sSound: '声音',
      sSoundOn: '音效',
      sSoundHint: '点击页面后开始',
      sVolume: '音量',
      sHints: '提示',
      sHintsOn: '提示',
      sMotion: '动效',
      sMotionFull: '完整',
      sMotionReduced: '减少',
      sPassword: '密码',
      sNewPw: '新密码',
      sCopyCode: '代码',
      sChangePw: '更改密码',
      sPwHint: '代码 → 更改密码 → 粘贴',
      sPwCodeCopied: '代码已复制',
      sPwEmpty: '请输入密码',
      sLock: '锁定',
      sReset: '重置',
      sOn: '开',
      sOff: '关',
      bgRain: '雨',
      bgFrost: '霜',
      bgAurora: '极光',
      bgMist: '雾',
      bgNight: '夜',
      bgSnow: '雪',
      bgOcean: '海',
      cCancel: '取消',
      cDelete: '删除',
      cReset: '恢复',
      cDismiss: '删除 {n} 个本地链接？',
      cResetMsg: '重置设置？'
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
    document.querySelectorAll('[data-i18n-title]').forEach((el) => { el.title = t(el.dataset.i18nTitle); });
    document.dispatchEvent(new CustomEvent('meow:lang', { detail: lang }));
  };

  window.MEOW_I18N = { t, apply, get lang() { return lang; } };
  window.t = t;
})();
