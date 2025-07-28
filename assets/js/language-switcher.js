// 中英文翻译对照表
const translations = {
    zh: {
        // 导航菜单
        'nav_home': '首页',
        'nav_about': '关于我们',
        'nav_contact': '联系我们',
        'nav_blog': '博客',
        'nav_portfolio': '产品',
        
        // Hero Section
        'hero_title': '加勝',
        'hero_subtitle': '北美移民身份定制机构',
        'hero_description': '专注留学生快速转身份与陪读家庭绿卡规划',
        'hero_btn_usa': '美国',
        'hero_btn_canada': '加拿大',
        
        // 关于加勝 Section
        'about_title': '关于加勝',
        'about_desc1': '加胜是一家专注于北美移民的高端定制化服务机构，精通北美移民政策、深刻理解北美商业环境，致力于为华人客户提供全链条移民服务。尤其擅长为在美留学生、高净值家庭定制高效、安全的绿卡解决方案，助力客户实现长期身份规划。',
        'about_desc2': '加胜在EB-5投资移民领域尤为突出，凭借超过28年的经验积累，始终保持100%的绿卡获批率，多个项目更实现提前还款。从前端移民咨询到递件申请，再到绿卡获批的每一环节，加勝提供专业、定制化、贴合华人需求的支持，帮助客户在复杂的移民流程中高效达成目标。',
        
        // 数据统计
        'stats_years': '年经历沉淀',
        'stats_families': '移民家庭',
        'stats_approval': '获批率',
        'stats_projects': 'EB-5项目资产量',
        
        // 加勝服务 Section
        'service_title': '加勝服务',
        'service_subtitle': '提供美国职业移民途径',
        'service_eb5_title': 'EB-5投资移民',
        'service_eb5_desc': '置业又移民\n一份投资，双重回报',
        'service_eb1a_title': 'EB-1和NIW\n人才类移民',
        'service_eb1a_desc': '成就卓越人才的移民捷径',
        'service_eb3_title': 'EB-1C\n跨国高管移民',
        'service_eb3_desc': '排期短，迅速实现绿卡梦',
        
        // 留学生专区
        'student_problem': 'F-1被撤销？OPT要到期？留美身份没着落？',
        'student_solution_title': '留学生专属绿卡通道',
        'student_solution_desc1': '不用抽签、不拼运气',
        'student_solution_desc2': '3个月快速拿工卡，解决留美身份危机',
        'student_btn': '立即匹配方案',
        'student_phone': '+1-647-839-7501',

        //成功案例
        'success_case_title': '成功案例',
        'success_case_desc': '身份转换案例',
        'success_case_01_desc': 'Lucy同学初中赴美，父母办理EB-5提前获绿卡，高中以本地生身份录取加州大学心理学系。',
        'success_case_01_title': '提前布局\n低龄留学直通名校',
        'success_case_02_desc': '陪读妈妈通过EB-5快速拿到绿卡，既合法留美陪读，也为孩子毕业后自由择业提前铺好身份通道。',
        'success_case_02_title': '陪读办身份\n利己利子女',
        'success_case_03_desc': 'Jason的OPT即将到期，通过EB-5双递交方案，3个月获工卡，顺利入职旧金山科技公司。',
        'success_case_03_title': '抽签未中?\n3个月合法留美工作',
        
        
        // 项目展示
        'project_cases_title': 'EB-5项目案例',
        'project_cases_subtitle': 'EB-5项目类别',
        'project_residential': '住宅地产类',
        'project_next': 'NEXT豪华出租公寓',
        'project_chicago': '芝加哥',
        'project_next_result': '100%获批永久绿卡，提前还款',
        'project_commercial': '商业地产类',
        'project_crossings': '希尔顿双品牌酒店',
        'project_mountain_view': '芝加哥',
        'project_crossings_result': '保障绿卡和资金安全下，追求更高收益',
        'project_other': '其他类别',
        'project_lake_point': 'Lake Point 湖泊地矿项目',
        'project_okeechobee': '奥基乔比湖',
        'project_lake_result': '100%获批永久绿卡,已全额还款',
        'project_learn_more': '了解更多',
        
        // 加勝优势 Section
        'advantage_title': '加勝优势',
        'advantage_subtitle': '28+定制化全链服务',
        'advantage_experience_title': '高成功率\n保障身份与资金安全',
        'advantage_experience_desc': '凭借28年的行业经验和严格筛选项目，我们在移民领域始终保持100%的成功率，确保客户的身份和资金安全。',
        'advantage_custom_title': '定制化服务\n贴合华人需求',
        'advantage_custom_desc': '加勝提供量身定制的移民方案，深入了解华人客户的文化和需求，帮助他们高效准备申请资料，简化移民流程。',
        'advantage_service_title': '全链服务\n一站式无忧体验',
        'advantage_service_desc': '从移民咨询、投资选择到绿卡申请，加勝提供全程无忧服务，确保每个环节都顺畅执行，让客户享受便捷、高效的移民体验。',
        
        // 加勝理念 Section
        'philosophy_title': '加勝理念',
        'philosophy_subtitle': '只做真实可行的移民方案',
        'philosophy_investment': '投资类移民-我们坚持：绿卡为本，还款为重',
        'philosophy_talent': '人才类移民-我们坚持：评估真实，方案靠谱',
        'philosophy_essence': '让移民回归本质，把复杂做到简单',
        
        // 联系我们 Section
        'contact_title': '欢迎沟通',
        'contact_region': '北美',
        'contact_phone': '+1-647-839-7501',
        'contact_email': 'maggie@canwinca.com',
        'contact_china_title': '联系我们',
        'contact_china_region': '中国',
        'contact_china_phone': '+852-5165-5663',
        'contact_china_email': 'ray@canwinca.com',

        // 关于我们 - 为什么选加勝
        'why_choose_jia': '为什么选\n加勝',
        'project_variety': '项目多样化，匹配不同投资偏好：',
        'project_variety_desc': '从回报型投资项目，到稳健型移民项目，加勝的EB-5项目覆盖多样投资需求，为不同阶段客户量身定制。',
        'professional_team': '专业团队全程支持：',
        'professional_team_desc': '加勝拥有北美律师、财务顾问、商业分析师及文案专员构成的全链服务团队，确保每一环节顺利推进。',
        'identity_planning': '身份规划与财富管理同步实现：',
        'identity_planning_desc': '我们不仅帮助您实现美国身份的合法转换，更关注资产布局与子女教育的长远规划，助力家庭在美国实现真正的长期落地与价值延伸。',
        //关于我们-项目核心优势
        'project_core_advantage': 'EB-5项目核心优势',
        'project_core_advantage_01_title': '成功率与资金安全记录卓越',
        'project_core_advantage_01_desc': 'EB-5项目100%绿卡获批率；\n投资期满项目大部分全额还款，部分项目甚至提前还款，历史资金安全记录优异。',
        'project_core_advantage_02_title': '项目设计能力强，契合华人客户需求',
        'project_core_advantage_02_desc': '熟悉北美地产及商业运营逻辑，具备独立开发和设计EB-5项目的能力，擅长定制“安全+高效+匹配度高”的商业投资移民方案。',
        'project_core_advantage_03_title': '"身份+资产"双重回报模式',
        'project_core_advantage_03_desc': '加勝倡导“移民即投资”的理念，通过项目筛选及结构优化，实现身份转换与资产保值增值的双重目标。',

        //关于我们项目发展
        'project_development_path': '加勝EB-5项目发展路径',
        'project_development_path_01_title': '加勝 EB-5 1.0阶段：安全为先，保障绿卡与本金',
        'project_development_path_01_desc': '代表项目：NEXT系列豪华/精品出租公寓',
        'project_development_path_02_title': '加勝 EB-5 2.0阶段：保障绿卡资金安全上，追求额外收益',
        'project_development_path_02_desc': '代表项目：芝加哥希尔顿双品牌酒店项目',
        'project_development_path_03_title': '加勝 EB-5 3.0阶段：新法红利期，快速转身份',
        'project_development_path_03_desc': '代表项目：2040小体量出租公寓',
        'project_development_path_04_title': '加勝 EB-5 4.0阶段：移民又置业，一份投资，双重回报',
        'project_development_path_04_desc': '代表项目：芝加哥郊区别墅项目',

        //联系我们表单字段
        'contact_form_name': '称呼',
        'contact_form_email': '手机号',
        'contact_form_location': '当前所在地',
        'contact_form_focus': '主要关注（多选）',
        'contact_form_message': '留言（选填）',
        'contact_form_btn': '获取专属身份方案',
        'contact_form_location_us': '美国',
        'contact_form_location_ca': '加拿大',
        'contact_form_location_cn': '中国',
        'contact_form_location_other': '其他',
        'contact_form_focus_01': '快速合法留美',
        'contact_form_focus_02': '解决工作身份',
        'contact_form_focus_03': '子女教育',
        'contact_form_focus_04': '项目安全',
        'contact_form_focus_05': '投资回报',
        'contact_form_btn': '获取专属身份方案',
        
        // 地图相关
        'map_title': '我们的位置',
        'map_address': '26 York Valley Crescent, North York, Ontario, Canada M2P 1A7',
        'map_click_hint': '点击查看详细位置',
    },
    
    en: {
        // 导航菜单
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_contact': 'Contact',
        'nav_blog': 'Blog',
        'nav_portfolio': 'Portfolio',
        
        // Hero Section
        'hero_title': 'CanWin',
        'hero_subtitle': 'North American Immigration Customization Agency',
        'hero_description': 'Specializing in rapid Adjustment of Status for international students and Green Card planning for the accompanying families',
        'hero_btn_usa': 'United States',
        'hero_btn_canada': 'Canada',
        
        // 关于加勝 Section
        'about_title': 'About CanWin',
        'about_desc1': 'CanWin is a premium customized immigration service agency specializing in North America, with expertise in immigration policies and a deep understanding of the regional business environment. Our mission is to deliver end-to-end immigration services for Chinese clients. We are particularly adept at designing efficient and secure Green Card solutions for U.S. international students and high-net-worth families, empowering clients to achieve long-term status planning.',
        'about_desc2': 'CanWin excels notably in the EB-5 investment immigration. With over 28 years of experience, we maintain a 100% approval rate, and many projects achieve early repayment. From consultation to application and approval, CanWin provides professional, personalized support tailored to Chinese clients, helping them achieve their immigration goals efficiently and confidently.',
        
        // 数据统计
        'stats_years': 'Years of experience',
        'stats_families': 'Immigrant Families Served',
        'stats_approval': 'Approval Rate',
        'stats_projects': 'EB-5 Program Asset Volume',
        
        // 加勝服务 Section
        'service_title': 'Our Services',
        'service_subtitle': 'Providing U.S. employment-based immigration solutions',
        'service_eb5_title': 'EB-5 Investment Immigration',
        'service_eb5_desc': 'Invest in property\ngain the U.S. residency',
        'service_eb1a_title': 'EB-1 and NIW\nTalent-based immigration',
        'service_eb1a_desc': 'Fast- track for exceptional talents',
        'service_eb3_title': 'EB-1C\nImmigration for multinational executive',
        'service_eb3_desc': 'Short waiting time quickly getting the Green Card',
        
        // 留学生专区
        'student_problem': 'F-1 revoked? OPT expiring? Uncertain  Status?',
        'student_solution_title': 'Exclusive Green Card pathway for international students',
        'student_solution_desc1': 'No lottery, no luck required',
        'student_solution_desc2': 'Obtain the EAD in 3 months, and secure your legal status in the U.S.',
        'student_btn': 'Match Your Solution Now',
        'student_phone': '+1-647-839-7501',

        // 成功案例
        'success_case_title': 'Success Stories',
        'success_case_desc': 'Status Adjustment Cases',
        'success_case_01_desc': 'Lucy began studying in the U.S. in middle school. Her parents secured Green Cards via EB-5 , enabling her to enroll as a domestic student in the Psychology Department at the University of California as a local student during high school.',
        'success_case_01_title': 'Early Planning\nEarly-age study abroad paves the way to top universities',
        'success_case_02_desc':'A mother accompanying her child quickly obtained a Green Card through EB-5, allowing her legally staying in the U.S. to support her child’s education while paving the way for the child’s flexible career choices after graduation.',
        'success_case_02_title': 'Accompanying children while securing legal status\nBeneficial for both parents and students.',
        'success_case_03_desc': "Jason's OPT is about to expire. Through the EB-5 dual filing strategy, he obtained the EAD in 3 months and successfully joined a tech company in San Francisco.",
        'success_case_03_title': 'OPT Expiring?\nWork legally in 3 months',
        
        // 项目展示
        'project_cases_title': 'Programs',
        'project_cases_subtitle': 'EB-5 Program Categories',
        'project_residential': 'Residential Real Estate',
        'project_next': 'NEXT Luxury Rental Apartments',
        'project_chicago': 'Chicago',
        'project_next_result': '100% approval rate for Green Cards, Early repayment',
        'project_commercial': 'Commercial Real Estate',
        'project_crossings': 'Canopy & Garden Inn by Hilton Chicago Central Loop',
        'project_mountain_view': 'Chicago',
        'project_crossings_result': 'Ensuring Green Card and fund security, Pursuing higher returns',
        'project_other': 'Other Categories',
        'project_lake_point': 'Lake Point Lakeside Mineral Project',
        'project_okeechobee': 'Lake Okeechobee',
        'project_lake_result': '100% approval rate for Green Cards, Fully repaid',
        'project_learn_more': 'Learn More',
        
        // 加勝优势 Section
        'advantage_title': 'Advantages',
        'advantage_subtitle': '28+ Years of Tailored End-to-End Services',
        'advantage_experience_title': 'High Success Rate\nEnsuring Identity and Financial Security',
        'advantage_experience_desc': "With 28 years of industry experience and strict project screening, we’ve maintained a 100% success rate in immigration, safeguarding our clients' immigration status and financial security.",
        'advantage_custom_title': 'Customized Services\nAligned with Chinese Needs',
        'advantage_custom_desc': 'CanWin understands the culture and needs of Chinese clients. Our tailored immigration solutions simplify documentation and streamline the immigration process.',
        'advantage_service_title': 'End-to-End Services\nA One-Stop Hassle-Free Experience',
        'advantage_service_desc': 'From immigration consultation and investment selection to Green Card applications, CanWin provides seamless end-to-end services, ensuring smooth execution at every stage and offering clients a convenient and efficient immigration experience.',
        
        // 加勝理念 Section
        'philosophy_title': 'Our Philosophy',
        'philosophy_subtitle': 'Only realistic and feasible immigration solutions',
        'philosophy_investment': 'EB-5: Green Card First,Repayment Prioritized',
        'philosophy_talent': 'Talent-based:Genuine assessment.Reliable Plans',
        'philosophy_essence': 'Simplifying Immigration: Back to Basics',
        
        // 联系我们 Section
        'contact_title': 'Let\'s Talk',
        'contact_region': 'North America',
        'contact_phone': '+1-647-839-7501',
        'contact_email': 'maggie@canwinca.com',
        'contact_china_title': 'Contact Us',
        'contact_china_region': 'China',
        'contact_china_phone': '+852-5165-5663',
        'contact_china_email': 'ray@canwinca.com',

        // 为什么选加勝
        'why_choose_jia': 'Why\nCanWin',
        'project_variety': 'Diverse projects for varied investment preferences:',
        'project_variety_desc': "From return-focused investment projects to risk-averse immigration programs, CanWin's EB-5 projects caters to varied investment needs, offering tailored solutions for clients at different stages.",
        'professional_team': 'Professional end-to-end team support:',
        'professional_team_desc': 'CanWin boasts a full-chain service team comprising North American lawyers, financial advisors, business analysts, and documentation specialists, ensuring seamless progress at every stage.',
        'identity_planning': 'Integrated planning for status and wealth management:',
        'identity_planning_desc': "We not only assist you in achieving lawful U.S. status conversion but also prioritize long-term asset allocation and children's education planning to support long-term family settlement and value growth in the United States.",
        //关于我们-项目核心优势
        'project_core_advantage': 'CanWin EB-5 Program Core Advantages',
        'project_core_advantage_01_title': 'Outstanding success rate and capital safety record',
        'project_core_advantage_01_desc': '100% Green Card approval rate for EB-5 projects;\nMost projects fully repaid investments upon maturity, with some even repaid early, demonstrating an excellent capital safety record.',
        'project_core_advantage_02_title': "Strong project design capability tailored to Chinese clients' needs",
        'project_core_advantage_02_desc': "Well-versed in North American real estate and business operations, with independent EB-5 project development and design expertise.Specialized in 'safe + efficient + well-matched' commercial investment immigration solutions.",
        'project_core_advantage_03_title': "Dual-Return Model of 'Status + Assets'",
        'project_core_advantage_03_desc': "CanWin advocates the concept of 'Immigration as Investment.' Through project screening and structural optimization, we achieve the dual objectives of status conversion and asset preservation/appreciation.",

        //关于我们项目发展
        'project_development_path': 'CanWin EB-5 Program Development Path',
        'project_development_path_01_title': 'CanWin EB-5 1.0 stage: Safety First:, Securing Green Cards and Principal',
        'project_development_path_01_desc': 'Featured Project: NEXT Luxury/Boutique Rental Apartments',
        'project_development_path_02_title': 'CanWin EB-5 2.0 stage: Prioritizing Green Card and Fund Security While Pursuing Additional Returns',
        'project_development_path_02_desc': 'Featured Project: Chicago Hilton Dual-Brand Hotel Project',
        'project_development_path_03_title': 'CanWin EB-5 3.0 stage: Fast-track status adjustment with policy window',
        'project_development_path_03_desc': 'Featured Project: 2040 Small-Scale Rental Apartments',
        'project_development_path_04_title': 'CanWin EB-5 4.0 stage: Immigration + Property Ownership, One Investment, Dual Returns',
        'project_development_path_04_desc': 'Featured Project: Suburban Chicago Villa Project',

        
        // 地图相关
        'map_title': 'Our Location',
        'map_address': '26 York Valley Crescent, North York, Ontario, Canada M2P 1A7',
        'map_click_hint': 'Click to view detailed location',
        'identity_planning': 'Simultaneous achievement of status planning and wealth management:',
        'identity_planning_desc': "We not only assist you in achieving lawful U.S. status conversion but also prioritize long-term asset allocation and children's education planning, helping families achieve genuine long-term settlement and value expansion in the United States.",


         //联系我们表单字段
         'contact_form_name': 'Name',
         'contact_form_email': 'Phone Number',
         'contact_form_location': 'Current Location',
         'contact_form_focus': 'Primary Concerns(Multiple Choice)',
         'contact_form_message': 'Message(Optional)',
         'contact_form_btn': 'Get Your Customized Immigration Plan',
         'contact_form_location_us': 'USA',
         'contact_form_location_ca': 'Canada',
         'contact_form_location_cn': 'China',
         'contact_form_location_other': 'Other',
         'contact_form_focus_01': 'Fast & Legal U.S. Stay',
         'contact_form_focus_02': 'Work Authorization',
         'contact_form_focus_03': "Children's Education",
         'contact_form_focus_04': 'Project Safety',
         'contact_form_focus_05': 'Investment Returns',
    }
};

// 当前语言状态
let currentLanguage = localStorage.getItem('language') || 'zh';

// 语言切换功能
class LanguageSwitcher {
    constructor() {
        this.init();
    }
    
    init() {
        // 绑定语言切换按钮事件
        this.bindLanguageToggle();
        // 应用当前语言
        this.applyLanguage(currentLanguage);
        // 更新语言切换按钮显示
        this.updateLanguageButton();
    }
    
    bindLanguageToggle() {
        const languageBtn = document.querySelector('#menu-item-language a');
        //移动端也绑定这个功能
        const languageBtnMobile = document.querySelector('#menu-item-language-mobile a');
        if (languageBtn) {
            languageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
            });
        }
        if (languageBtnMobile) {
            languageBtnMobile.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
                document.getElementById('zak-mobile-nav-close').click();
            });
        }
    }
    
    toggleLanguage() {
        // 添加切换动画效果
        document.body.classList.add('language-switching');
        
        // 保存旧语言，用于移除旧的类
        const oldLanguage = currentLanguage;
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLanguage);
        
        // 移除旧语言类，添加新语言类
        document.body.classList.remove('lang-'+oldLanguage);
        document.body.classList.add('lang-'+currentLanguage);
        
        // 延迟应用语言，创建平滑的过渡效果
        setTimeout(() => {
            this.applyLanguage(currentLanguage);
            this.updateLanguageButton();
            
            // 移除切换动画类，添加完成动画类
            document.body.classList.remove('language-switching');
            document.body.classList.add('language-switched');
            
            // 短暂延迟后移除完成动画类
            setTimeout(() => {
                document.body.classList.remove('language-switched');
            }, 300);
        }, 150);
    }
    
    updateLanguageButton() {
        const languageBtn = document.querySelector('#menu-item-language a img');
        const languageBtnContainer = document.querySelector('#menu-item-language a');
        
        if (languageBtn && languageBtnContainer) {
            if (currentLanguage === 'zh') {
                // 显示中文模式 - 显示中文国旗
                languageBtn.src = './assets/images/Language_switching.svg';
                languageBtn.alt = '中文';
                languageBtnContainer.title = '切换到英文';
            } else {
                // 显示英文模式 - 创建英文标识
                // 如果没有英文国旗图片，显示文字标识
                languageBtn.style.display = 'none';
                
                // 创建或更新文字标识
                let textIndicator = languageBtnContainer.querySelector('.lang-text');
                if (!textIndicator) {
                    textIndicator = document.createElement('span');
                    textIndicator.className = 'lang-text';
                    textIndicator.style.cssText = `
                        color: white;
                        font-size: 14px;
                        font-weight: 600;
                        padding: 1px 5px;
                        border: 1px solid white;
                        border-radius: 3px;
                        background-color: rgba(255,255,255,0.1);
                    `;
                    languageBtnContainer.appendChild(textIndicator);
                }
                textIndicator.textContent = 'EN';
                languageBtnContainer.title = 'Switch to Chinese';
            }
            
            // 如果是中文模式，移除文字标识，显示图片
            if (currentLanguage === 'zh') {
                const textIndicator = languageBtnContainer.querySelector('.lang-text');
                if (textIndicator) {
                    textIndicator.remove();
                }
                languageBtn.style.display = 'block';
            }
        }
    }
    
    applyLanguage(lang) {
        const t = translations[lang];
        
        // 移除所有可能的语言类
        document.body.classList.remove('lang-zh', 'lang-en');
        document.body.classList.add('lang-'+lang);
        // 通用翻译方法：通过 data-translate 属性更新所有元素
        this.updateAllTranslatableElements(t);
        
        // 特殊处理的元素（如果需要的话）
        this.updateSpecialElements(t);
    }
    
    updateAllTranslatableElements(t) {
        // 查找所有带有 data-translate 属性的元素
        const translatableElements = document.querySelectorAll('[data-translate]');
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                // 如果文本包含换行符，将其转换为<br>标签
                if (t[key].includes('\n')) {
                    element.innerHTML = t[key].replace(/\n/g, '<br>');
                } else {
                    element.textContent = t[key];
                }
            }
        });
    }
    
    updateSpecialElements(t) {
        // 处理一些特殊的元素更新逻辑
        // 比如需要特殊处理的样式或属性
    }
    
    // 旧版本的个别更新方法已被通用翻译系统替代
    // 保留这个注释以便理解代码演进
}

// 页面加载完成后初始化语言切换器
document.addEventListener('DOMContentLoaded', function() {
    new LanguageSwitcher();
});

// 导出供其他文件使用
window.LanguageSwitcher = LanguageSwitcher;
window.translations = translations; 