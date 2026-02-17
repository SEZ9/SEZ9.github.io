/* ============================================
   Xin Zhang's Portfolio - Main JavaScript
   i18n, Animations, Interactions
   ============================================ */

const translations = {
  en: {
    'nav.blog': 'Publications',
    'nav.artwork': 'Artwork',
    'nav.resume': 'Resume',
    'hero.greeting': "Hey! I'm",
    'hero.title1': 'Senior Cloud Architect',
    'hero.title2': 'Open Source Contributor',
    'hero.title3': 'Tech Blogger',
    'hero.title4': 'Hand-drawn Art Enthusiast',
    'hero.desc': 'AWS Senior Cloud Architect specializing in data & AI, active Apache open-source contributor, tech blogger, and hand-drawn art enthusiast. Bridging cloud architecture, open source, and art.',
    'hero.cta1': 'Publications',
    'hero.cta2': 'View Art',
    'hero.scroll': 'Scroll Down',
    'blog.title': 'Publications & Talks',
    'blog.subtitle': 'Blogs, conference sessions, workshops, meetups, and open-source contributions',
    'blog.filter.all': 'All',
    'blog.filter.conference': 'Conference',
    'blog.filter.blog': 'Blog',
    'blog.filter.workshop': 'Workshop',
    'blog.filter.meetup': 'Meetup',
    'blog.filter.opensource': 'Open Source',
    'blog.filter.elearning': 'E-Learning',
    // Publications
    'pub.conf1': 'OpenSearchCon China 2026',
    'pub.conf2': 'Apache Community over Code Asia 2025',
    'pub.blog1': 'Dive Deep into Security Management: The Data on EKS Platform',
    'pub.blog2': 'Cisco Builds Big Data Systems on AWS with Apache DolphinScheduler',
    'pub.blog3': 'Build a Data Lake from Scratch in One Minute: The Magic of S3 Tables',
    'pub.blog4': 'Apache SeaTunnel & Amazon Bedrock: Scaling GenAI Apps to Production',
    'pub.blog5': 'Deep Dive: Data Task Scheduling with Apache DolphinScheduler on AWS',
    'pub.blog6': 'Deploying Serverless DolphinScheduler on AWS',
    'pub.blog7': 'Amazon Q in QuickSight: Generate Data Reports with Natural Language',
    'pub.blog8': 'Amazon DynamoDB Flink SQL Real-time Computing in Practice',
    'pub.blog9': 'Optimizing Kafka Cost & Efficiency at Scale with AutoMQ',
    'pub.blog10': 'Processing CDC Streams with Flink Hudi & Data Analysis via Redshift Spectrum',
    'pub.blog11': 'Simplifying MWAA (Airflow) Task Scheduling with DynamoDB',
    'pub.blog12': 'Simplifying Data Ingestion Pipelines with Kafka Connect',
    'pub.blog13': 'Building an E-commerce Review Analysis (VOC) System with Amazon Bedrock',
    'pub.blog14': 'E-commerce Image Retrieval Solution Based on Amazon Bedrock',
    'pub.blog15': 'Getting Started with Strands Agents: dbt on Amazon Redshift Data Quality Agent',
    'pub.ws1': 'Intelligent E-commerce Search & Recommendation Workshop',
    'pub.ws2': 'E-commerce Review VOC Analysis Workshop',
    'pub.ws3': 'E-commerce Multi-modal Image Search Workshop',
    'pub.ws4': 'AWS Open Source Data Software Lab Workshop',
    'pub.mu1': 'Apache Celeborn & AWS TechTalk',
    'pub.mu2': 'Data For AI Tech Talk',
    'pub.mu3': 'Data Warehouse & Data Modeling Tech Talk',
    'pub.mu4': 'Streaming Data Lake Tech Talk',
    'pub.mu5': 'dbt Meetup',
    'pub.mu6': 'Apache DolphinScheduler & AWS Meetup',
    'pub.mu7': 'Apache SeaTunnel & AWS Meetup',
    'pub.pr1': 'Apache SeaTunnel - OpenSearch/Elasticsearch Vector Support',
    'pub.pr2': 'Apache SeaTunnel - Amazon Bedrock Integration',
    'pub.pr3': 'Apache SeaTunnel - S3 Tables Integration',
    'pub.oss1': 'Apache Iceberg',
    'pub.oss2': 'Apache DolphinScheduler',
    'pub.oss3': 'Apache SeaTunnel',
    'pub.oss4': 'Apache Hudi',
    'pub.oss5': 'Apache Zeppelin & Airflow',
    'pub.oss6': 'Apache SeaTunnel & Bedrock',
    'pub.el1': 'SeaTunnel & Amazon Bedrock',
    'pub.el2': 'Amazon S3 Tables',
    'pub.blog16': 'Real-Time ASR: Business Scenarios, Platform Choices & Benchmarking on SageMaker AI',
    'pub.blog17': 'Using Kiro\'s Spec-Driven Development to Accelerate Data Quality Initiatives',
    'pub.blog18': 'Build Text Vector ETL Pipelines with Apache SeaTunnel and Amazon OpenSearch',
    'pub.blog19': 'Using Apache SeaTunnel for Fast Data Integration into S3 Tables',
    'pub.blog20': 'dbt on Amazon Redshift Data Quality Agent',
    'blog.filter.lang.en': 'English',
    'blog.filter.lang.cn': 'Chinese',
    'blog.loadmore': 'Load More',
    'art.title': 'Hand-drawn Artwork',
    'art.subtitle': 'Dragon Ball fan art, anime characters, and original hand drawings',
    'art.item1.title': 'Drawing Process',
    'art.item1.desc': 'Work in progress',
    'art.item2.title': 'Dodecahedron Sketch',
    'art.item2.desc': 'Pencil shading practice',
    'art.item3.title': 'Dragon Ball - Goku',
    'art.item3.desc': 'Ink illustration',
    'art.item4.title': 'Dragon Ball - Adventure',
    'art.item4.desc': 'Ink and pencil illustration',
    'art.item5.title': 'Dragon Ball - Kame House',
    'art.item5.desc': 'Ink landscape illustration',
    'resume.title': 'Resume',
    'resume.subtitle': 'Professional journey, certifications, and skill set',
    'resume.skills': 'Core Skills',
    'resume.certs': 'Certifications (14+)',
    'resume.contact': 'Contact',
    'resume.experience': 'Experience',
    'resume.highlights': 'Highlights',
    'resume.education': 'Education',
    'resume.download': 'View Full Profile on LinkedIn',
    'resume.exp1.title': 'Senior Solutions Architect',
    'resume.exp1.company': 'Amazon Web Services (AWS) | Shenzhen',
    'resume.exp1.desc': 'Specializing in Data & AI solutions for enterprise clients. Architecting cloud-native big data platforms, GenAI/LLM applications, and GPU-accelerated inference. Led open-source integration with Apache SeaTunnel, DolphinScheduler & OpenSearch. Published 22+ blogs, hosted events attracting 9,000+ developers. Recognized as Top SA 2025.',
    'resume.exp2.title': 'Senior Manager, Data',
    'resume.exp2.company': 'Klook | Shenzhen',
    'resume.exp2.desc': 'Led architecture design and team building for all data engineering. Managed real-time data warehouse and risk control systems. Designed multi-cloud data platform (GCP, AWS, Alibaba Cloud).',
    'resume.exp3.title': 'Senior Software Engineer',
    'resume.exp3.company': 'Huawei | Shenzhen',
    'resume.exp3.desc': 'Architecture design of FusionInsight big data hybrid cloud platform including RTD engine. Implemented real-time big data for financial anti-fraud systems. Maintained Flink, Redis, Kafka, ClickHouse.',
    'resume.exp4.title': 'Senior Software Engineer',
    'resume.exp4.company': 'Evergrande Group | Shenzhen',
    'resume.exp4.desc': 'Early member of big data department. Designed comprehensive big data platform integrating real estate, insurance, wealth management, and IoT into unified BI. Hadoop ecosystem & hybrid IDC/Cloud architecture.',
    'resume.exp5.title': 'Software Engineer',
    'resume.exp5.company': 'Ruijie Networks | Xi\'an',
    'resume.exp5.desc': 'Development of Ruijie\'s Wireless Network Management System.',
    'resume.edu1.title': 'M.Eng. Engineering Management (Big Data)',
    'resume.edu1.school': 'Xi\'an Jiaotong University',
    'resume.edu2.title': 'B.S. Computer Science and Technology',
    'resume.edu2.school': 'Xi\'an University of Science and Technology',
    'resume.hl.blogs': 'Published Blogs',
    'resume.hl.certs': 'Certifications',
    'resume.hl.meetups': 'Meetups & Talks',
    'resume.hl.oss': 'Apache OSS Projects',
    'resume.hl.workshops': 'Workshops',
    'resume.hl.prs': 'GitHub PRs (Apache)',
    'footer.text': 'Senior Cloud Architect | Open Source Contributor | Hand-drawn Art Enthusiast | Tech Blogger'
  },
  zh: {
    'nav.blog': '技术发表',
    'nav.artwork': '手绘作品',
    'nav.resume': '个人简历',
    'hero.greeting': '嘿！我是',
    'hero.title1': '资深云架构师',
    'hero.title2': '开源贡献者',
    'hero.title3': '科技博主',
    'hero.title4': '手绘艺术爱好者',
    'hero.desc': 'AWS 资深云架构师，专注数据与 AI 领域，Apache 开源项目活跃贡献者，科技博主，同时也是一名热爱手绘日本动漫的艺术爱好者。在云架构、开源与艺术之间架起桥梁。',
    'hero.cta1': '技术发表',
    'hero.cta2': '查看画作',
    'hero.scroll': '向下滚动',
    'blog.title': '技术发表 & 演讲',
    'blog.subtitle': '博客文章、会议演讲、动手实验、开发者活动与开源贡献',
    'blog.filter.all': '全部',
    'blog.filter.conference': '会议演讲',
    'blog.filter.blog': '博客',
    'blog.filter.workshop': '动手实验',
    'blog.filter.meetup': '开发者活动',
    'blog.filter.opensource': '开源贡献',
    'blog.filter.elearning': '在线课程',
    // Publications
    'pub.conf1': 'OpenSearchCon 中国 2026',
    'pub.conf2': 'Apache Community over Code 亚洲 2025',
    'pub.blog1': '深入安全管理：Data on EKS 平台',
    'pub.blog2': 'Cisco 使用 Apache DolphinScheduler 在 AWS 构建大数据系统实践',
    'pub.blog3': '一分钟从零构建数据湖，S3 Tables 究竟有啥魔力？',
    'pub.blog4': 'Apache SeaTunnel & Amazon Bedrock 助力生成式 AI 应用规模化生产实践',
    'pub.blog5': '深度剖析 – 基于亚马逊云科技使用 Apache DolphinScheduler 进行数据任务调度',
    'pub.blog6': 'AWS 部署无服务器 DolphinScheduler',
    'pub.blog7': 'Amazon Q in QuickSight 实战：利用自然语言快速生成数据报表与洞察',
    'pub.blog8': 'Amazon DynamoDB Flink SQL 实时计算实践',
    'pub.blog9': '使用 AutoMQ 实现 Kafka 大规模成本及效率优化',
    'pub.blog10': '使用 Flink Hudi 处理变更数据流并通过 Redshift Spectrum 进行数据分析实践',
    'pub.blog11': '使用 DynamoDB 简化 MWAA（Airflow）任务调度开发',
    'pub.blog12': '使用 Kafka Connect 简化数据采集管道',
    'pub.blog13': '如何基于 Amazon Bedrock 构建电商评论分析（VOC）系统？',
    'pub.blog14': '基于 Amazon Bedrock 的电商行业图片检索解决方案',
    'pub.blog15': 'Strands Agents 快速上手 – dbt on Amazon Redshift 数据质量智能体',
    'pub.ws1': '智能电商搜索推荐系统 Workshop',
    'pub.ws2': '电商评论 VOC 分析系统 Workshop',
    'pub.ws3': '电商多模态搜图解决方案 Workshop',
    'pub.ws4': '亚马逊云开源数据软件实验工作坊',
    'pub.mu1': 'Apache Celeborn & AWS 技术分享',
    'pub.mu2': '数据赋能 AI 技术分享',
    'pub.mu3': '数据仓库与数据建模 Tech Talk',
    'pub.mu4': '流式数据湖 Tech Talk',
    'pub.mu5': 'dbt 技术交流会',
    'pub.mu6': 'Apache DolphinScheduler & AWS 技术交流会',
    'pub.mu7': 'Apache SeaTunnel & AWS 技术交流会',
    'pub.pr1': 'Apache SeaTunnel - OpenSearch/Elasticsearch 向量支持',
    'pub.pr2': 'Apache SeaTunnel - Amazon Bedrock 集成',
    'pub.pr3': 'Apache SeaTunnel - S3 Tables 集成',
    'pub.oss1': 'Apache Iceberg',
    'pub.oss2': 'Apache DolphinScheduler',
    'pub.oss3': 'Apache SeaTunnel',
    'pub.oss4': 'Apache Hudi',
    'pub.oss5': 'Apache Zeppelin & Airflow',
    'pub.oss6': 'Apache SeaTunnel & Bedrock',
    'pub.blog16': '实时 ASR：业务场景、平台选型与 SageMaker AI 基准测试',
    'pub.blog17': '使用 Kiro 的规范驱动开发加速数据质量建设',
    'pub.blog18': '使用 Apache SeaTunnel 与 Amazon OpenSearch 构建文本向量 ETL 管道',
    'pub.blog19': '使用 Apache SeaTunnel 快速集成数据到 S3 Tables',
    'pub.blog20': 'dbt on Amazon Redshift 数据质量智能体',
    'pub.el1': 'SeaTunnel & Amazon Bedrock',
    'pub.el2': 'Amazon S3 Tables',
    'blog.filter.lang.en': '英文',
    'blog.filter.lang.cn': '中文',
    'blog.loadmore': '加载更多',
    'art.title': '手绘作品集',
    'art.subtitle': '龙珠同人画、动漫角色与原创手绘作品',
    'art.item1.title': '绘画过程',
    'art.item1.desc': '创作进行中',
    'art.item2.title': '正十二面体素描',
    'art.item2.desc': '铅笔明暗练习',
    'art.item3.title': '龙珠 - 悟空',
    'art.item3.desc': '钢笔手绘',
    'art.item4.title': '龙珠 - 冒险',
    'art.item4.desc': '钢笔铅笔手绘',
    'art.item5.title': '龙珠 - 龟仙屋',
    'art.item5.desc': '钢笔风景手绘',
    'resume.title': '个人简历',
    'resume.subtitle': '职业历程、专业认证与技术栈',
    'resume.skills': '核心技能',
    'resume.certs': '专业认证 (14+)',
    'resume.contact': '联系方式',
    'resume.experience': '工作经历',
    'resume.highlights': '亮点数据',
    'resume.education': '教育背景',
    'resume.download': '查看完整 LinkedIn 主页',
    'resume.exp1.title': '高级解决方案架构师',
    'resume.exp1.company': '亚马逊云科技 (AWS) | 深圳',
    'resume.exp1.desc': '专注为企业客户提供数据与 AI 解决方案。设计云原生大数据平台、GenAI/LLM 应用及 GPU 加速推理架构。主导 Apache SeaTunnel、DolphinScheduler 与 OpenSearch 的开源集成。发表 22+ 篇技术博客，举办活动吸引 9000+ 开发者。荣获 2025 年度 Top SA。',
    'resume.exp2.title': '数据高级经理',
    'resume.exp2.company': '客路旅行 (Klook) | 深圳',
    'resume.exp2.desc': '负责全公司数据工程的架构设计与团队组建。管理实时数据仓库与实时风控系统。设计多云数据平台架构（GCP、AWS、阿里云）。',
    'resume.exp3.title': '高级软件工程师',
    'resume.exp3.company': '华为技术 | 深圳',
    'resume.exp3.desc': 'FusionInsight 大数据混合云平台架构设计，包括 RTD 实时决策引擎。为大型金融客户实现实时大数据反欺诈系统。负责 Flink、Redis、Kafka、ClickHouse 等组件维护。',
    'resume.exp4.title': '高级软件工程师',
    'resume.exp4.company': '恒大集团 | 深圳',
    'resume.exp4.desc': '大数据部门早期成员。设计涵盖地产销售、人寿保险、财富管理、智能充电和物联网的综合大数据 BI 平台。Hadoop 生态与 IDC/云混合高可用架构。',
    'resume.exp5.title': '软件工程师',
    'resume.exp5.company': '锐捷网络 | 西安',
    'resume.exp5.desc': '负责锐捷无线网络管理系统的研发工作。',
    'resume.edu1.title': '工程管理硕士（大数据应用方向）',
    'resume.edu1.school': '西安交通大学',
    'resume.edu2.title': '计算机科学与技术学士',
    'resume.edu2.school': '西安科技大学',
    'resume.hl.blogs': '发表博客',
    'resume.hl.certs': '专业认证',
    'resume.hl.meetups': '演讲活动',
    'resume.hl.oss': 'Apache 开源项目',
    'resume.hl.workshops': '动手实验',
    'resume.hl.prs': 'GitHub PR（Apache）',
    'footer.text': '资深云架构师 | 开源贡献者 | 手绘艺术爱好者 | 科技博主'
  }
};

// --- App State ---
let currentLang = localStorage.getItem('lang') || 'en';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavbar();
  initMobileMenu();
  initPubFilters();
  initScrollAnimations();
  initSkillBars();
  initNameHover();
  initLightbox();
});

// --- i18n ---
function initI18n() {
  applyTranslations(currentLang);
  updateLangToggle();

  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
    updateLangToggle();
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // Preserve child elements like <span class="lang-tag">
      const langTag = el.querySelector('.lang-tag');
      if (langTag) {
        // Set text before the lang-tag, keep the tag
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) node.remove();
        });
        el.insertBefore(document.createTextNode(t[key] + ' '), langTag);
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function updateLangToggle() {
  const label = document.getElementById('langLabel');
  label.textContent = currentLang === 'zh' ? 'EN' : '中';
}

// --- Navbar scroll effect ---
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// --- Publication Filters + Load More ---
function initPubFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubItems = document.querySelectorAll('.pub-item');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const INITIAL_COUNT = 10;
  const LOAD_STEP = 5;
  let currentFilter = 'all';
  let visibleCount = INITIAL_COUNT;

  function getMatchedItems() {
    const matched = [];
    pubItems.forEach(item => {
      const category = item.dataset.category;
      const lang = item.dataset.lang;
      const isLangFilter = currentFilter === 'lang-en' || currentFilter === 'lang-cn';
      const match = currentFilter === 'all'
        || (isLangFilter && 'lang-' + lang === currentFilter)
        || (!isLangFilter && category === currentFilter);
      if (match) matched.push(item);
    });
    return matched;
  }

  function renderItems() {
    const matched = getMatchedItems();
    let shownCount = 0;

    pubItems.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('visible');
    });

    matched.forEach((item, i) => {
      if (i < visibleCount) {
        item.style.display = '';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            item.classList.add('visible');
          });
        });
        shownCount++;
      }
    });

    // Update load-more button
    if (shownCount < matched.length) {
      loadMoreBtn.style.display = '';
      const t = translations[currentLang];
      loadMoreBtn.textContent = (t && t['blog.loadmore']) || 'Load More';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      visibleCount = INITIAL_COUNT;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItems();
    });
  });

  // Load more button
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += LOAD_STEP;
    renderItems();
  });

  // Initial render
  renderItems();
}

// --- Scroll Animations (Intersection Observer) ---
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.blog-card, .pub-item, .artwork-item, .resume-card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// --- Skill Bar Animation ---
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.classList.add('animated');
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skills-grid').forEach(grid => {
    observer.observe(grid);
  });
}

// --- Name Hover Animation ---
function initNameHover() {
  document.querySelectorAll('.name-char').forEach(char => {
    char.addEventListener('mouseenter', () => {
      char.style.transform = 'translateY(-8px) rotate(-5deg) scale(1.1)';
    });
    char.addEventListener('mouseleave', () => {
      char.style.transform = '';
    });
  });
}

// --- Artwork Lightbox ---
function initLightbox() {
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxClose');

  document.querySelectorAll('.artwork-item[data-artwork]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.artwork;
      const h3 = item.querySelector('.artwork-overlay h3');
      const p = item.querySelector('.artwork-overlay p');
      img.onerror = () => { img.alt = 'Image not available'; };
      img.src = src;
      img.alt = h3 ? h3.textContent : '';
      title.textContent = h3 ? h3.textContent : '';
      desc.textContent = p ? p.textContent : '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
  });
}
