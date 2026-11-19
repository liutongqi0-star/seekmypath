// 极简 i18n：文案都在下面两张表里，加一门语言只需要再加一张表 + 一个按钮。
(function () {
  'use strict';

  var DICT = {
    zh: {
      'hero.eyebrow': '免费 · 无需注册 · 答案只留在你的设备上',
      'hero.title': '问径',
      'hero.tagline': '在进组与实习之间，先认识自己',
      'hero.lede': '写给大一大二、还在犹豫的你。49 道生活情境题看你怎么做事，再在 16 个学科、164 个研究方向、20 种公司岗位里，找到和你最合拍的那几个 —— 也提前看清它们辛苦的一面。',
      'hero.cta': '开始测评',
      'hero.more': '它怎么用',
      'hero.fineprint': 'seekmypath.cn · 完全免费，答完即走，不上传答案',

      'facts.q': '道生活情境题',
      'facts.fields': '个学科 · 164 个研究方向',
      'facts.jobs': '种公司岗位',

      'shots.home': '问径首页截图',
      'shots.home.cap': '第一部分：从日常小事看你怎样做事',
      'shots.result': '问径结果页截图',
      'shots.result.cap': '第二部分：每个方向都有兴趣分和现实分',

      'about.no': '一',
      'about.title': '它和一般的性格测试不一样',
      'about.a.title': '不问你「喜不喜欢科研」',
      'about.a.body': '所有题都从游戏、学习、周末、做作业这些场景切入。少了宏大叙事，你就不容易按「理想中的自己」作答。',
      'about.b.title': '既看兴趣，也看「受得了」',
      'about.b.body': '每个方向都配了现实题：连续三个月做不出结果、凌晨三点去取样、跟科考船出海几周。喜欢和受得了，是两回事。',
      'about.c.title': '结果能带走',
      'about.c.body': '就业/科研倾向、八个维度的做事风格、方向排名，都能整理成一份 PDF 报告，方便慢慢看或给家人看。',

      'how.no': '二',
      'how.title': '怎么用',
      'how.a.title': '先做第一部分',
      'how.a.body': '49 道题，10–15 分钟。不显示分数，只告诉你更接近科研的节奏，还是实践的节奏。',
      'how.b.title': '再挑 1–3 个方向',
      'how.b.body': '感兴趣的学科或岗位，每项 3–8 分钟。可以测多项，每项测一次。',
      'how.c.title': '看排名，去验证',
      'how.c.body': '排名靠前的两三个，挑一个去实验室或实习里待一段。问卷只能缩小范围，答案还得你自己试出来。',

      'privacy.no': '三',
      'privacy.title': '关于你的答案',
      'privacy.body': '进度只存在你自己浏览器的 localStorage 里，换设备不会同步，清除浏览器数据就没了 —— 服务器只负责发题目，不存任何答案。',

      'band.kicker': '大约 15 分钟',
      'band.title': '现在开始，给自己一个参照',
      'band.cta': '打开 seekmypath.cn',
      'band.fineprint': '手机、平板、电脑都能用；不需要注册，也不用留邮箱。',

      'foot.line': '问径 · seekmypath.cn',
      'foot.note': '本测评仅供自我探索参考，不构成专业心理测评或升学、就业建议。',
      'foot.repo': '这个页面在 GitHub 上'
    },

    en: {
      'hero.eyebrow': 'Free · No sign-up · Answers stay on your device',
      'hero.title': '问径',
      'hero.tagline': 'Know how you work before you pick a path',
      'hero.lede': 'For first- and second-year students who are still deciding. 49 everyday questions show how you work; then 16 disciplines, 164 research areas and 20 job tracks show which ones fit you — including the parts that are hard.',
      'hero.cta': 'Take the assessment',
      'hero.more': 'How it works',
      'hero.fineprint': 'seekmypath.cn · Free, no account, nothing uploaded',

      'facts.q': 'everyday questions',
      'facts.fields': 'disciplines · 164 research areas',
      'facts.jobs': 'job tracks',

      'shots.home': 'The assessment home screen',
      'shots.home.cap': 'Part one: how you work, read from everyday situations',
      'shots.result': 'A ranking screen',
      'shots.result.cap': 'Part two: every direction gets an interest score and a reality score',

      'about.no': '01',
      'about.title': 'Not another personality quiz',
      'about.a.title': 'It never asks “do you like research?”',
      'about.a.body': 'Every question starts from games, study, weekends, homework. Without the grand narrative, it is harder to answer as the person you wish you were.',
      'about.b.title': 'Interest matters — so does living with it',
      'about.b.body': 'Each direction comes with the real work: three months without a result, sampling at 3 a.m., weeks on a research vessel. Liking something and being able to live with it are different things.',
      'about.c.title': 'The result is yours to keep',
      'about.c.body': 'Your research-or-practice lean, eight dimensions of working style, and the rankings can be exported as a PDF to read later or show your family.',

      'how.no': '02',
      'how.title': 'How it works',
      'how.a.title': 'Start with part one',
      'how.a.body': '49 questions, 10–15 minutes. No score — just whether you are closer to a research rhythm or a practical one.',
      'how.b.title': 'Then pick one to three directions',
      'how.b.body': 'A discipline or a job track, 3–8 minutes each. Take as many as you like.',
      'how.c.title': 'Read the ranking, then test it',
      'how.c.body': 'Take the top two or three and spend real time in a lab or an internship. A questionnaire narrows the field; the answer comes from trying.',

      'privacy.no': '03',
      'privacy.title': 'What happens to your answers',
      'privacy.body': 'Progress lives only in your browser’s localStorage. It does not sync across devices and disappears if you clear browser data — the server only sends questions and stores nothing.',

      'band.kicker': 'About 15 minutes',
      'band.title': 'Start now, and give yourself a reference point',
      'band.cta': 'Open seekmypath.cn',
      'band.fineprint': 'Works on phone, tablet and desktop. No account, no email.',

      'foot.line': 'SeekMyPath · seekmypath.cn',
      'foot.note': 'This assessment is for self-reflection only. It is not a psychological evaluation, nor admission or career advice.',
      'foot.repo': 'This page on GitHub'
    }
  };

  var META = {
    zh: {
      lang: 'zh-CN',
      title: '问径 SeekMyPath · 大学生科研与就业方向测评',
      desc: '问径是一个免费的测评：49 道生活情境题看你怎么做事，再在 16 个学科、164 个研究方向、20 种公司岗位里，找到和你最合拍的那几个。答案只存在你自己的浏览器里。'
    },
    en: {
      lang: 'en',
      title: 'SeekMyPath · A free assessment for research or industry',
      desc: 'A free assessment for students deciding between research and industry: 49 everyday questions, then 16 disciplines, 164 research areas and 20 job tracks. Answers stay in your browser.'
    }
  };

  var KEY = 'smp_lang';
  var supported = Object.keys(DICT);

  function readSaved() {
    try {
      var v = localStorage.getItem(KEY);
      return supported.indexOf(v) >= 0 ? v : null;
    } catch (e) {
      return null;
    }
  }

  function detect() {
    var saved = readSaved();
    if (saved) return saved;
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh\b/i.test(langs[i])) return 'zh';
    }
    return 'en';
  }

  function apply(lang) {
    var dict = DICT[lang] || DICT.zh;
    var meta = META[lang] || META.zh;

    document.documentElement.lang = meta.lang;
    document.title = meta.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.desc);

    var targets = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < targets.length; i++) {
      var text = dict[targets[i].getAttribute('data-i18n')];
      if (typeof text === 'string') targets[i].textContent = text;
    }

    var alts = document.querySelectorAll('[data-i18n-alt]');
    for (var j = 0; j < alts.length; j++) {
      var alt = dict[alts[j].getAttribute('data-i18n-alt')];
      if (typeof alt === 'string') alts[j].setAttribute('alt', alt);
    }

    var buttons = document.querySelectorAll('.lang button');
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].setAttribute('aria-pressed', String(buttons[k].getAttribute('data-lang') === lang));
    }

    try { localStorage.setItem(KEY, lang); } catch (e) { /* 隐私模式忽略 */ }
  }

  document.querySelectorAll('.lang button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-lang'));
    });
  });

  apply(detect());
})();
