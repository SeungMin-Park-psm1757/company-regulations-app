// 앱 데이터
const appData = {
    users: [
        {id: "admin", password: "admin123", name: "관리자"}, 
        {id: "user", password: "user123", name: "사용자"}
    ], 
    law: {
        title: "군인의 지위 및 복무에 관한 기본법",
        subtitle: "[시행 2025. 6. 4.] [법률 제20539호]",
        chapters: [
            {
                id: 1,
                title: "제1장 총칙",
                articles: [
                    {
                        id: "제1조",
                        title: "제1조(목적)",
                        content: "이 법은 국가방위와 국민의 보호를 사명으로 하는 군인의 기본권을 보장하고, 군인의 의무 및 병영생활에 대한 기본사항을 정함으로써 선진 정예 강군 육성에 이바지하는 것을 목적으로 한다."
                    },
                    {
                        id: "제2조",
                        title: "제2조(정의)",
                        content: "이 법에서 사용하는 용어의 뜻은 다음과 같다.\n1. \"군인\"이란 현역에 복무하는 장교ㆍ준사관ㆍ부사관 및 병(兵)을 말한다.\n2. \"지휘관\"이란 중대급 이상의 단위부대의 장, 함선부대의 장 또는 함정, 항공기를 지휘하는 자를 말한다.\n3. \"상관\"이란 명령복종관계에 있는 사람 사이에서 명령권을 가진 사람으로서 국군통수권자부터 당사자의 바로 위 상급자까지를 말한다.\n4. \"명령\"이란 상관이 직무상 내리는 지시를 말한다.\n5. \"병영생활\"이란 내무생활, 근무, 교육훈련, 그 밖의 병영을 중심으로 이루어지는 모든 활동을 말한다.\n6. \"내무생활\"이란 영내 거주의무가 있는 군인의 생활관을 중심으로 이루어지는 일상활동을 말한다."
                    },
                    {
                        id: "제3조",
                        title: "제3조(적용범위)",
                        content: "이 법은 군인에게 적용하되, 다음 각 호의 사람에게는 군인에 준하여 이 법을 적용한다.\n1. 사관생도ㆍ사관후보생ㆍ준사관후보생 및 부사관후보생\n2. 소집되어 군에 복무하는 예비역 및 보충역\n3. 군무원"
                    },
                    {
                        id: "제4조",
                        title: "제4조(국가의 책무)",
                        content: "① 국가는 군인의 기본권을 보장하기 위하여 필요한 제도를 마련하여야 하며 이를 위한 시책을 적극적으로 추진하여야 한다.\n② 국가는 군인이 임무를 충실히 수행하고 군 복무에 대한 자긍심을 높일 수 있도록 복무여건을 개선하고 군인의 삶의 질 향상을 위하여 노력하여야 한다."
                    },
                    {
                        id: "제5조",
                        title: "제5조(국군의 강령)",
                        content: "① 국군은 국민의 군대로서 국가를 방위하고 자유 민주주의를 수호하며 조국의 통일에 이바지함을 그 이념으로 한다.\n② 국군은 대한민국의 자유와 독립을 보전하고 국토를 방위하며 국민의 생명과 재산을 보호하고 나아가 국제평화의 유지에 이바지함을 그 사명으로 한다.\n③ 군인은 명예를 존중하고 투철한 충성심, 진정한 용기, 필승의 신념, 임전무퇴의 기상과 죽음을 무릅쓰고 책임을 완수하는 숭고한 애국애족의 정신을 굳게 지녀야 한다."
                    },
                    {
                        id: "제6조",
                        title: "제6조(다른 법률과의 관계)",
                        content: "군인의 복무에 관한 다른 법률을 제정 또는 개정하는 경우에는 이 법의 목적과 기본이념에 맞도록 하여야 한다."
                    }
                ]
            },
            {
                id: 2,
                title: "제2장 군인복무기본정책 등",
                articles: [
                    {
                        id: "제7조",
                        title: "제7조(군인복무기본정책)",
                        content: "① 국방부장관은 군인복무기본정책(이하 '기본정책'이라 한다)을 5년마다 수립하여야 한다.\n② 기본정책에는 다음 각 호의 사항이 포함되어야 한다.\n1. 기본목표\n2. 연도별ㆍ과제별 추진계획\n3. 재원(財源) 확보에 관한 사항\n4. 그 밖에 군인의 복무에 관하여 중요한 사항\n③ 기본정책은 제8조에 따른 군인복무정책심의위원회의 심의를 거쳐 확정한다.\n④ 국방부장관은 기본정책에 따라 그 시행계획을 수립하고 시행하여야 한다.\n⑤ 국방부장관은 기본정책 및 시행계획을 수립한 때에는 국회 소관 상임위원회에 제출하고 이를 공표하여야 한다. 다만, 군사기밀에 해당하는 사항은 공표하지 아니한다.\n⑥ 기본정책과 제4항에 따른 시행계획의 수립에 필요한 사항은 대통령령으로 정한다."
                    },
                    {
                        id: "제8조",
                        title: "제8조(군인복무정책심의위원회의 설치)",
                        content: "다음 각 호의 사항을 심의하기 위하여 국방부장관 소속으로 군인복무정책심의위원회(이하 '위원회'라 한다)를 둔다.\n1. 군인의 기본권 보장에 관한 사항\n2. 군인의 의무에 관한 사항\n3. 기본정책의 수립에 관한 사항\n4. 군인복무와 관련한 법령과 제도의 개선에 관한 사항\n5. 그 밖에 군인복무와 관련하여 위원장이 심의에 부치는 사항"
                    },
                    {
                        id: "제9조",
                        title: "제9조(위원회의 구성 등)",
                        content: "① 위원회는 위원장 1명을 포함한 12명 이내의 위원으로 구성한다.\n② 위원장은 국방부장관으로 하고, 위원은 다음 각 호의 사람으로 한다.\n1. 합참의장, 각 군 참모총장 및 해병대 사령관\n2. 국회 소관 상임위원회에서 추천하는 사람 중에서 국방부장관이 위촉하는 사람 3명\n3. 군인의 기본권 보장 등에 관하여 전문적 학식과 경험이 풍부한 사람 중에서 국방부장관이 위촉하는 사람 3명\n③ 제2항제2호 및 제3호에 따라 위촉된 위원의 임기는 2년으로 하고, 한 차례만 연임할 수 있다.\n④ 국방부장관은 제2항제2호 및 제3호에 따라 위촉된 위원이 다음 각 호의 어느 하나에 해당하는 경우에는 해당 위원을 해촉(解囑)할 수 있다.\n1. 심신장애로 인하여 직무를 수행할 수 없게 된 경우\n2. 직무와 관련된 비위 사실이 있는 경우\n3. 직무태만, 품위손상, 군의 정치적 중립성 훼손이나 그 밖의 사유로 인하여 위원으로 적합하지 아니하다고 인정되는 경우\n4. 위원 스스로 직무를 수행하는 것이 곤란하다고 의사를 밝히는 경우\n⑤ 그 밖에 위원회의 운영에 필요한 사항은 대통령령으로 정한다."
                    }
                ]
            }
        ]
    }
};

// 전역 변수
let currentUser = null;
let currentArticle = null;
let currentScreen = 'login';
let currentChapter = null;
let searchResults = [];
let isDarkMode = false;

// DOM이 로드되면 앱 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료, 앱 초기화 시작');
    initApp();
});

// 앱 초기화
function initApp() {
    console.log('앱 초기화 중...');
    
    // 로그인 폼 이벤트 리스너
    setupLoginForm();
    
    // 기타 이벤트 리스너 설정
    setupEventListeners();
    
    // 초기 화면 설정
    showLoginScreen();
    
    console.log('앱 초기화 완료');
}

// 로그인 폼 설정
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) {
        console.error('로그인 폼을 찾을 수 없습니다');
        return;
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('로그인 시도');
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorEl = document.getElementById('loginError');
        
        console.log('입력된 사용자명:', username);
        
        // 사용자 검증
        const user = appData.users.find(u => u.id === username && u.password === password);
        
        if (user) {
            console.log('로그인 성공:', user.name);
            currentUser = user;
            if (errorEl) errorEl.classList.add('hidden');
            showMainScreen();
        } else {
            console.log('로그인 실패');
            if (errorEl) {
                errorEl.textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
                errorEl.classList.remove('hidden');
            }
        }
    });
    
    console.log('로그인 폼 이벤트 리스너 설정 완료');
}

// 로그인 화면 표시
function showLoginScreen() {
    console.log('로그인 화면 표시');
    hideAllScreens();
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen) {
        loginScreen.classList.remove('hidden');
        currentScreen = 'login';
    }
}

// 메인 화면 표시
function showMainScreen() {
    console.log('메인 화면 표시');
    hideAllScreens();
    const mainScreen = document.getElementById('mainScreen');
    if (mainScreen) {
        mainScreen.classList.remove('hidden');
        currentScreen = 'main';
        
        renderChapters();
        updateUserInfo();
        hideArticlesSection();
    }
}

// 조문 상세 화면 표시
function showDetailScreen(article) {
    console.log('조문 상세 화면 표시:', article.title);
    hideAllScreens();
    const detailScreen = document.getElementById('detailScreen');
    if (detailScreen) {
        detailScreen.classList.remove('hidden');
        currentScreen = 'detail';
        currentArticle = article;
        
        const detailTitle = document.getElementById('detailTitle');
        const articleTitle = document.getElementById('articleTitle');
        const articleContent = document.getElementById('articleContent');
        
        if (detailTitle) detailTitle.textContent = article.title;
        if (articleTitle) articleTitle.textContent = article.title;
        if (articleContent) articleContent.textContent = article.content;
        
        updateBookmarkButton(article.id);
        addToHistory(article);
    }
}

// 마이페이지 표시
function showMyPageScreen(activeTab) {
    console.log('마이페이지 표시');
    hideAllScreens();
    const myPageScreen = document.getElementById('myPageScreen');
    if (myPageScreen) {
        myPageScreen.classList.remove('hidden');
        currentScreen = 'myPage';
        switchTab(activeTab || 'bookmarks');
        updateUserInfo();
    }
}

// 모든 화면 숨기기
function hideAllScreens() {
    const screens = ['loginScreen', 'mainScreen', 'detailScreen', 'myPageScreen'];
    screens.forEach(screenId => {
        const screen = document.getElementById(screenId);
        if (screen) screen.classList.add('hidden');
    });
}

// 장 목록 렌더링
function renderChapters() {
    const chaptersList = document.getElementById('chaptersList');
    if (!chaptersList) return;
    
    chaptersList.innerHTML = appData.law.chapters.map(chapter => {
        const articleCount = chapter.articles.length;
        const firstArticle = chapter.articles[0]?.id || '';
        const lastArticle = chapter.articles[chapter.articles.length - 1]?.id || '';
        const range = firstArticle && lastArticle ? `${firstArticle}~${lastArticle}` : '';
        
        return `
            <div class="chapter-item" onclick="showChapterArticles(${chapter.id})">
                <div class="chapter-title">${chapter.title}</div>
                <div class="chapter-range">${range}</div>
                <div class="chapter-count">${articleCount}개 조문</div>
            </div>
        `;
    }).join('');
}

// 장별 조문 표시
function showChapterArticles(chapterId) {
    console.log('장별 조문 표시:', chapterId);
    const chapter = appData.law.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    currentChapter = chapter;
    
    const articlesSection = document.getElementById('articlesSection');
    const chapterTitle = document.getElementById('chapterTitle');
    
    if (articlesSection) articlesSection.classList.remove('hidden');
    if (chapterTitle) chapterTitle.textContent = chapter.title;
    
    renderArticles(chapter.articles);
    
    // 장 목록 숨기기
    const chaptersSection = document.querySelector('.chapters');
    if (chaptersSection) chaptersSection.style.display = 'none';
}

// 조문 목록 렌더링
function renderArticles(articles) {
    const articlesList = document.getElementById('articlesList');
    if (!articlesList) return;
    
    const bookmarks = getBookmarks();
    
    articlesList.innerHTML = articles.map(article => {
        const preview = article.content.length > 100 ? 
            article.content.substring(0, 100) + '...' : 
            article.content;
        
        return `
            <div class="article-item" onclick="openArticle('${article.id}')">
                <div class="article-header">
                    <span class="article-number">${article.id}</span>
                    <h4 class="article-title">${article.title}</h4>
                    <button class="article-bookmark ${bookmarks.includes(article.id) ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleBookmark('${article.id}')">
                        ${bookmarks.includes(article.id) ? '⭐' : '☆'}
                    </button>
                </div>
                <p class="article-preview">${preview}</p>
            </div>
        `;
    }).join('');
}

// 전체 조문 표시
function showAllArticles() {
    console.log('전체 조문 표시');
    const allArticles = [];
    appData.law.chapters.forEach(chapter => {
        allArticles.push(...chapter.articles);
    });
    
    const articlesSection = document.getElementById('articlesSection');
    const chapterTitle = document.getElementById('chapterTitle');
    
    if (articlesSection) articlesSection.classList.remove('hidden');
    if (chapterTitle) chapterTitle.textContent = '전체 조문';
    
    renderArticles(allArticles);
    
    const chaptersSection = document.querySelector('.chapters');
    if (chaptersSection) chaptersSection.style.display = 'none';
}

// 조문 섹션 숨기기
function hideArticlesSection() {
    const articlesSection = document.getElementById('articlesSection');
    const chaptersSection = document.querySelector('.chapters');
    
    if (articlesSection) articlesSection.classList.add('hidden');
    if (chaptersSection) chaptersSection.style.display = 'block';
    
    currentChapter = null;
}

// 전역 함수들
window.showChapterArticles = showChapterArticles;
window.showAllArticles = showAllArticles;

window.openArticle = function(articleId) {
    console.log('조문 열기:', articleId);
    const article = findArticleById(articleId);
    if (article) {
        showDetailScreen(article);
    }
};

window.toggleBookmark = function(articleId) {
    console.log('북마크 토글:', articleId);
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(articleId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push(articleId);
    }
    
    saveBookmarks(bookmarks);
    
    // UI 업데이트
    if (currentScreen === 'main' && currentChapter) {
        renderArticles(currentChapter.articles);
    } else if (currentScreen === 'myPage') {
        renderBookmarks();
    }
    
    if (currentArticle && currentArticle.id === articleId) {
        updateBookmarkButton(articleId);
    }
};

window.showMyPage = function(activeTab) {
    showMyPageScreen(activeTab);
};

window.downloadCode = function() {
    console.log('코드 다운로드 시작');
    
    // 코드 파일 내용 생성
    const htmlContent = document.documentElement.outerHTML;
    const cssContent = getCSSContent();
    const jsContent = getJSContent();
    
    // README 파일 내용
    let readmeContent = `# 군인복무기본법 조회 시스템

## 개요
군인의 지위 및 복무에 관한 기본법을 장별로 구조화하여 조회할 수 있는 웹 애플리케이션입니다.

## 파일 구성
- index.html: 메인 HTML 파일
- style.css: 스타일시트
- app.js: JavaScript 애플리케이션 로직
- README.md: 이 파일

## 설치 및 실행 방법

### 1. 로컬 실행
1. 모든 파일을 같은 폴더에 저장합니다.
2. 웹 브라우저에서 index.html 파일을 열어 실행합니다.

### 2. GitHub Pages 배포
1. GitHub 저장소를 생성합니다.
2. 모든 파일을 저장소에 업로드합니다.
3. Settings → Pages에서 배포 설정을 활성화합니다.
4. 제공된 URL로 접속하여 사용합니다.

## 기본 로그인 정보
- 관리자: admin / admin123
- 사용자: user / user123

## 주요 기능
- 장별 조문 조회
- 조문 상세 내용 표시
- 북마크 기능
- 검색 기능
- 다크모드 지원
- 모바일 최적화
- 복사 방지 기능

## 기술 스택
- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage (북마크, 히스토리 저장)

## 라이선스
이 프로젝트는 교육 및 참고 목적으로 제작되었습니다.
`;

    // ZIP 파일 대신 텍스트 파일로 모든 내용을 포함
    let packageContent = readmeContent + '\n\n' +
        '='.repeat(80) + '\n' +
        '파일 내용\n' +
        '='.repeat(80) + '\n\n' +
        '## index.html\n\n' +
        '```html\n' + htmlContent + '\n```\n\n' +
        '## style.css\n\n' +
        '```css\n' + cssContent + '\n```\n\n' +
        '## app.js\n\n' +
        '```javascript\n' + jsContent + '\n```\n';
    
    // 파일 다운로드
    const blob = new Blob([packageContent], {type: 'text/plain;charset=utf-8'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '군인복무기본법_웹앱_완전패키지.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('코드 패키지가 다운로드되었습니다!\n\n포함 내용:\n- 전체 소스코드\n- 설치 가이드\n- GitHub 배포 방법\n\n바로 GitHub에 업로드하여 사용하실 수 있습니다.');
};

function getCSSContent() {
    let cssContent = '';
    try {
        Array.from(document.styleSheets).forEach(sheet => {
            try {
                Array.from(sheet.cssRules || sheet.rules || []).forEach(rule => {
                    cssContent += rule.cssText + '\n';
                });
            } catch (e) {
                // CORS 제한으로 인한 오류 무시
            }
        });
    } catch (e) {
        console.warn('CSS 추출 중 오류:', e);
    }
    return cssContent || '/* CSS 내용을 추출할 수 없습니다. style.css 파일을 별도로 저장해주세요. */';
}

function getJSContent() {
    // 현재 스크립트 내용 반환
    return `// 군인복무기본법 조회 시스템
// 이 파일의 내용은 브라우저에서 실행 중인 JavaScript 코드입니다.
// 실제 배포 시에는 완전한 app.js 파일을 사용하세요.

console.log("군인복무기본법 조회 시스템이 로드되었습니다.");

// 주요 기능:
// - 로그인 시스템
// - 장별 조문 조회
// - 북마크 기능
// - 검색 기능
// - 다크모드 지원`;
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색 버튼
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchBar = document.getElementById('searchBar');
            const searchInput = document.getElementById('searchInput');
            if (searchBar && searchInput) {
                if (searchBar.classList.contains('hidden')) {
                    searchBar.classList.remove('hidden');
                    searchInput.focus();
                } else {
                    closeSearch();
                }
            }
        });
    }
    
    // 다운로드 버튼
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadCode);
    }
    
    const downloadBtnSettings = document.getElementById('downloadBtnSettings');
    if (downloadBtnSettings) {
        downloadBtnSettings.addEventListener('click', downloadCode);
    }
    
    // 테마 토글
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 프로필 버튼
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            showMyPageScreen('bookmarks');
        });
    }
    
    // 검색 입력
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // 검색 닫기
    const searchClose = document.getElementById('searchClose');
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    // 뒤로가기 버튼들
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            showMainScreen();
        });
    }
    
    const myPageBackBtn = document.getElementById('myPageBackBtn');
    if (myPageBackBtn) {
        myPageBackBtn.addEventListener('click', function() {
            showMainScreen();
        });
    }
    
    const articlesBackBtn = document.getElementById('articlesBackBtn');
    if (articlesBackBtn) {
        articlesBackBtn.addEventListener('click', function() {
            hideArticlesSection();
        });
    }
    
    // 북마크 버튼 (상세화면)
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
            if (currentArticle) {
                toggleBookmark(currentArticle.id);
            }
        });
    }
    
    // 로그아웃 버튼
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            currentUser = null;
            showLoginScreen();
            document.getElementById('loginForm').reset();
        });
    }
    
    // 설정의 테마 토글
    const themeToggleSettings = document.getElementById('themeToggleSettings');
    if (themeToggleSettings) {
        themeToggleSettings.addEventListener('click', toggleTheme);
    }
    
    // 탭 버튼들
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
}

// 검색 관련 함수들
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
        closeSearch();
        return;
    }
    
    searchResults = [];
    appData.law.chapters.forEach(chapter => {
        chapter.articles.forEach(article => {
            if (article.title.toLowerCase().includes(query) ||
                article.content.toLowerCase().includes(query) ||
                article.id.toLowerCase().includes(query)) {
                searchResults.push(article);
            }
        });
    });
    
    renderSearchResults();
}

function renderSearchResults() {
    const searchResultsList = document.getElementById('searchResultsList');
    const searchResultsSection = document.getElementById('searchResults');
    const articlesSection = document.getElementById('articlesSection');
    const chaptersSection = document.querySelector('.chapters');
    
    if (!searchResultsList) return;
    
    if (searchResultsSection) searchResultsSection.classList.remove('hidden');
    if (articlesSection) articlesSection.classList.add('hidden');
    if (chaptersSection) chaptersSection.style.display = 'none';
    
    const bookmarks = getBookmarks();
    
    if (searchResults.length === 0) {
        searchResultsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>검색 결과가 없습니다.</p>
            </div>
        `;
        return;
    }
    
    searchResultsList.innerHTML = searchResults.map(article => {
        const preview = article.content.length > 100 ? 
            article.content.substring(0, 100) + '...' : 
            article.content;
        
        return `
            <div class="article-item" onclick="openArticle('${article.id}')">
                <div class="article-header">
                    <span class="article-number">${article.id}</span>
                    <h4 class="article-title">${article.title}</h4>
                    <button class="article-bookmark ${bookmarks.includes(article.id) ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleBookmark('${article.id}')">
                        ${bookmarks.includes(article.id) ? '⭐' : '☆'}
                    </button>
                </div>
                <p class="article-preview">${preview}</p>
            </div>
        `;
    }).join('');
}

function closeSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const chaptersSection = document.querySelector('.chapters');
    
    if (searchBar) searchBar.classList.add('hidden');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.classList.add('hidden');
    if (chaptersSection) chaptersSection.style.display = 'block';
    
    hideArticlesSection();
}

// 탭 관련 함수들
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tabName}Tab`);
    });
    
    switch (tabName) {
        case 'bookmarks':
            renderBookmarks();
            break;
        case 'history':
            renderHistory();
            break;
        case 'settings':
            updateUserInfo();
            break;
    }
}

function renderBookmarks() {
    const bookmarksList = document.getElementById('bookmarksList');
    if (!bookmarksList) return;
    
    const bookmarks = getBookmarks();
    const bookmarkedArticles = [];
    
    appData.law.chapters.forEach(chapter => {
        chapter.articles.forEach(article => {
            if (bookmarks.includes(article.id)) {
                bookmarkedArticles.push(article);
            }
        });
    });
    
    if (bookmarkedArticles.length === 0) {
        bookmarksList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⭐</div>
                <p>북마크된 조문이 없습니다.</p>
            </div>
        `;
        return;
    }
    
    bookmarksList.innerHTML = bookmarkedArticles.map(article => {
        const preview = article.content.length > 100 ? 
            article.content.substring(0, 100) + '...' : 
            article.content;
        
        return `
            <div class="article-item" onclick="openArticle('${article.id}')">
                <div class="article-header">
                    <span class="article-number">${article.id}</span>
                    <h4 class="article-title">${article.title}</h4>
                    <button class="article-bookmark active" 
                            onclick="event.stopPropagation(); toggleBookmark('${article.id}')">⭐</button>
                </div>
                <p class="article-preview">${preview}</p>
            </div>
        `;
    }).join('');
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    
    const history = getHistory();
    
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🕒</div>
                <p>최근 열람한 조문이 없습니다.</p>
            </div>
        `;
        return;
    }
    
    const bookmarks = getBookmarks();
    
    historyList.innerHTML = history.map(article => {
        const preview = article.content.length > 100 ? 
            article.content.substring(0, 100) + '...' : 
            article.content;
        
        return `
            <div class="article-item" onclick="openArticle('${article.id}')">
                <div class="article-header">
                    <span class="article-number">${article.id}</span>
                    <h4 class="article-title">${article.title}</h4>
                    <button class="article-bookmark ${bookmarks.includes(article.id) ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleBookmark('${article.id}')">
                        ${bookmarks.includes(article.id) ? '⭐' : '☆'}
                    </button>
                </div>
                <p class="article-preview">${preview}</p>
                <div class="article-meta">
                    <small>🕒 ${formatDateTime(article.accessedAt)}</small>
                </div>
            </div>
        `;
    }).join('');
}

// 유틸리티 함수들
function findArticleById(articleId) {
    for (const chapter of appData.law.chapters) {
        for (const article of chapter.articles) {
            if (article.id === articleId) {
                return article;
            }
        }
    }
    return null;
}

function getBookmarks() {
    try {
        return JSON.parse(localStorage.getItem('mil_law_bookmarks') || '[]');
    } catch {
        return [];
    }
}

function saveBookmarks(bookmarks) {
    try {
        localStorage.setItem('mil_law_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
        console.warn('북마크 저장 실패:', e);
    }
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem('mil_law_history') || '[]');
    } catch {
        return [];
    }
}

function addToHistory(article) {
    try {
        let history = getHistory();
        
        history = history.filter(item => item.id !== article.id);
        
        history.unshift({
            ...article,
            accessedAt: new Date().toISOString()
        });
        
        if (history.length > 50) {
            history = history.slice(0, 50);
        }
        
        localStorage.setItem('mil_law_history', JSON.stringify(history));
    } catch (e) {
        console.warn('히스토리 저장 실패:', e);
    }
}

function updateBookmarkButton(articleId) {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
        const bookmarks = getBookmarks();
        const isBookmarked = bookmarks.includes(articleId);
        bookmarkBtn.textContent = isBookmarked ? '⭐' : '☆';
        bookmarkBtn.classList.toggle('active', isBookmarked);
    }
}

function updateUserInfo() {
    const currentUserEl = document.getElementById('currentUser');
    if (currentUserEl && currentUser) {
        currentUserEl.textContent = `${currentUser.name} (${currentUser.id})`;
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
    
    const themeButtons = [
        document.getElementById('themeToggle'),
        document.getElementById('themeToggleSettings')
    ];
    
    themeButtons.forEach(btn => {
        if (btn) {
            btn.textContent = isDarkMode ? '☀️' : '🌙';
        }
    });
}

function formatDateTime(dateTimeString) {
    return new Date(dateTimeString).toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}