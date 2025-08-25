// 애플리케이션 데이터
const APP_DATA = {
  regulations: {
    title: "Military Program Greenbook AY 2024",
    subtitle: "United States Military Academy West Point",
    categories: [
      {
        id: "overview",
        title: "제1장 - 군사 프로그램 개요",
        icon: "📋",
        sections: [
          {
            id: "1.01",
            title: "주관부서",
            content: "생도 지휘관은 10 U.S.C. § 7434c, DoDI 1322.22, AR 150-1에 따라 군사 프로그램을 담당하고 군사 개발의 지원 지휘관입니다. 군사교육부(DMI)는 군사 프로그램의 주관부서이며 DMI 책임자는 군사 프로그램 및 개발을 지원하는 모든 학업, 체육, 품성 수업, 프로젝트 및 활동에 대한 조정 권한을 담당합니다.",
            keywords: ["주관부서", "생도지휘관", "군사교육부", "DMI", "조정권한"]
          },
          {
            id: "1.02", 
            title: "전략적 배경",
            content: "10 U.S.C. § 7431에 따르면, 미국 육군사관학교의 목적은 '생도들의 군복무를 위한 교육 및 준비'입니다. 군사 프로그램은 미국 육군사관학교의 임무와 USMA 전략에 명시된 전략 목표를 지원하는 중심적 역할을 합니다.",
            keywords: ["전략적배경", "육군사관학교", "군복무", "교육", "준비", "전략목표"]
          },
          {
            id: "1.03",
            title: "군사 프로그램 목적", 
            content: "군사 프로그램의 목적은 생도들에게 미 육군에서 승리하는 데 필요한 기초 군사 역량을 부여하고, 국가에 대한 직업적 우수성과 봉사에 영감을 주는 것입니다.",
            keywords: ["목적", "기초군사역량", "직업적우수성", "봉사", "영감"]
          },
          {
            id: "1.04",
            title: "생도 성과 목표",
            content: "군사 프로그램은 생도들이 7가지 성과를 달성하도록 보장합니다: 1) 기초 군사 역량에서 숙련도와 자신감 입증, 2) 병사를 준비시키고 팀을 구축하는 방법에 대한 이해 입증, 3) 교리와 전투의 개념과 원칙을 문제 해결에 적용, 4) 전쟁과 전투에 대해 비판적으로 사고하고 이해하는 방법 입증, 5) 할당된 임무 수행에서 육군 리더십 요구사항 모델의 핵심 속성과 역량 입증, 6) 부대 지휘 절차, 사격술, 지상 항법에서 우수한 성과 입증, 7) 육군 전문가로서 품격, 헌신, 역량 입증",
            keywords: ["성과목표", "7가지성과", "숙련도", "자신감", "팀구축", "교리", "전투", "리더십", "사격술", "지상항법", "품격", "헌신", "역량"]
          }
        ]
      },
      {
        id: "requirements",
        title: "제2장 - 기본 요구사항 및 평가",
        icon: "📊",
        sections: [
          {
            id: "2.01",
            title: "개요",
            content: "이 장은 군사 프로그램 기본 요구사항을 설명합니다. 이는 생도들이 군사 프로그램의 기준을 충족하고 USMA에서 임관을 받기 위해 성공적으로 완료해야 하는 필수 이벤트 및 활동입니다. 이러한 요구사항을 완료하지 못하면 군사 프로그램에서 결함으로 간주됩니다.",
            keywords: ["기본요구사항", "필수이벤트", "활동", "임관", "결함"]
          },
          {
            id: "2.02",
            title: "군사 프로그램 진행",
            content: "생도들은 군사 프로그램 점수 - 누적(MPSC)의 최소 기준을 유지해야 합니다. 최소 기준은 다음과 같습니다: 4학년 말: 1.70, 생도 야전훈련 종료: 1.80, 3학년 1학기 말: 1.85, 3학년 말 이후: 2.00. 필요 수준 이하로 떨어지는 생도들은 학사위원회에 MPSC 결함으로 보고될 것입니다.",
            keywords: ["진행기준", "MPSC", "최소기준", "4학년", "3학년", "야전훈련", "학사위원회", "결함"]
          },
          {
            id: "2.03",
            title: "평가 및 추적 책임",
            content: "시기적절하고 정확한 군사훈련 기록 관리는 모든 육군 부대에서와 마찬가지로 USCC 내에서 가장 중요합니다. 군사훈련 기록은 개인과 부대의 준비상태, 인증, 진급을 반영하므로 생도 훈련 기록 업데이트 책임을 할당하고 명확히 하는 것이 중요합니다.",
            keywords: ["평가", "추적책임", "군사훈련기록", "준비상태", "인증", "진급"]
          }
        ]
      },
      {
        id: "fourth_class",
        title: "제3장 - 4학년 과정",
        icon: "🎯",
        sections: [
          {
            id: "3.01",
            title: "4학년 군사 프로그램의 목적",
            content: "웨스트포인트는 육군의 미래 훈련자와 지도자를 모집합니다. 이러한 훈련자와 지도자를 양성하려면 개인 기술의 견고한 기초가 필요하며, 4학년 프로그램이 바로 그 기초입니다. 군사 개발은 군사 부대에서 추종자(생도 이등병)로서의 성공적인 성과와 기초 군사 역량 습득으로 표시됩니다.",
            keywords: ["4학년목적", "미래훈련자", "지도자", "기초", "군사개발", "추종자", "생도이등병", "기초군사역량"]
          },
          {
            id: "3.02",
            title: "군사 훈련",
            content: "생도 기초 훈련(CBT). 신입 생도들은 MD100과 ML100에 등록됩니다. CBT는 USMA의 모든 향후 교육을 위한 기초를 형성하는 까다로운 훈련 요구사항의 진행 과정입니다. 이는 민간인과 기존 군복무자를 생도와 미래 장교로 교육, 훈련, 영감을 주고 전환시킵니다.",
            keywords: ["군사훈련", "CBT", "신입생도", "MD100", "ML100", "기초", "까다로운훈련", "민간인", "군복무자", "미래장교"]
          },
          {
            id: "3.03",
            title: "군사 과학 및 장교직",
            content: "4학년 생도들은 가을 또는 봄 학기에 MS100(전투 입문)에 등록됩니다. 이전 여름 ML100 완료로 얻은 지식이 확장되며, 일부 주제는 강화되고 다른 주제는 처음 소개됩니다. MS100에서 생도들은 병역화, 사격, 이동, 소통, 치료의 기초 군사 역량을 바탕으로 견고한 기반을 개발합니다.",
            keywords: ["군사과학", "장교직", "MS100", "전투입문", "지식확장", "병역화", "사격", "이동", "소통", "치료"]
          }
        ]
      },
      {
        id: "scoring",
        title: "제7장 - 군사 프로그램 점수",
        icon: "📈",
        sections: [
          {
            id: "7.01",
            title: "일반 원칙",
            content: "생도들은 군사, 체육, 학업의 세 프로그램에서 평가됩니다. 각 프로그램에는 관련 프로그램 점수(군사 프로그램 점수(MPS), 체육 프로그램 점수(PPS), 학업 프로그램 점수(APS))가 있습니다. 이 점수들은 각 프로그램에서 설정된 성과 측정에 대한 생도의 성과를 반영하며 각 생도가 동료들과 비교 측정되는 기준을 형성합니다.",
            keywords: ["일반원칙", "세프로그램", "군사", "체육", "학업", "프로그램점수", "MPS", "PPS", "APS", "성과측정", "동료비교"]
          },
          {
            id: "7.02",
            title: "점수 구성",
            content: "생도 프로그램 점수(CPS)는 누적 프로그램 점수의 가중 평균을 기반으로 합니다. APSC는 55%, MPSC는 30%, PPSC는 15%를 기여합니다. 공식: CPS = .55(APS*) +.30(MPS*) + .15(PPS*). MPS는 각 활동에서 성적의 가중 평균을 나타냅니다. 이러한 가중치는 점진적이며, 더 높은 책임 수준에서 완료된 활동이 일반적으로 더 큰 가중치를 갖습니다.",
            keywords: ["점수구성", "CPS", "가중평균", "APSC", "MPSC", "PPSC", "55%", "30%", "15%", "가중치", "책임수준"]
          }
        ]
      },
      {
        id: "appendices",
        title: "부록 - 참고 자료",
        icon: "📚",
        sections: [
          {
            id: "annex_a",
            title: "부록 A - BOLC-A 공통 핵심 과제 목록",
            content: "생도 지휘관은 군사 프로그램의 책임자이며 생도의 군사 개발을 위한 지원 지휘관입니다. 지원 지휘관으로서 학장은 공통 핵심 과제 목록(CCTL) 임관 요구사항이 관련 교과과정에서 제거되지 않도록 할 책임이 있습니다. 이 목록에는 병역화, 리더십 및 육군 전문직, 임무 지휘, 작전, 훈련, 전술 및 전사 과제와 전투 훈련이 포함됩니다.",
            keywords: ["부록A", "BOLC-A", "공통핵심과제", "CCTL", "임관요구사항", "병역화", "리더십", "육군전문직", "임무지휘", "작전", "훈련", "전술", "전사과제", "전투훈련"]
          },
          {
            id: "annex_b",
            title: "부록 B - 군사 개별 고급 개발 기회",
            content: "군사 개별 고급 개발(MIAD) 경험에는 제도적 육군에서 병사와 지도자에게 제공되는 미 육군 학교 및 훈련 기회가 포함됩니다. 이러한 학교들은 우리 육군의 병사와 지도자에게 필요한 군사 기술 개발에 중점을 둡니다. MIAD는 생도들에게 육군이 어떻게 훈련하는지에 대한 관점과 맥락을 제공하고 뛰어난 자신감 구축 경험을 제공하는 뛰어난 도구입니다.",
            keywords: ["부록B", "MIAD", "개별고급개발", "육군학교", "훈련기회", "군사기술", "자신감구축"]
          },
          {
            id: "references",
            title: "참고 문헌",
            content: "주요 참고 문헌에는 다음이 포함됩니다: 10 U.S.C. § 702, 10 U.S.C. § 7431, 10 U.S.C. § 7434, ADP 6-22 육군 리더십과 전문직, AR 150-1, AR 350-1, ATP 3-21.8 보병 소대와 분대, FM 3-0 작전, 그리고 기타 군사 교리 및 정책 문서들입니다.",
            keywords: ["참고문헌", "USC", "ADP", "AR", "ATP", "FM", "육군리더십", "군사교리", "정책문서"]
          }
        ]
      }
    ]
  },
  users: [
    {"id": "admin", "password": "admin123", "name": "관리자", "department": "관리부", "role": "admin"},
    {"id": "user01", "password": "pass123", "name": "홍길동", "department": "인사팀", "role": "user"},
    {"id": "user02", "password": "pass456", "name": "김철수", "department": "총무팀", "role": "user"},
    {"id": "user03", "password": "pass789", "name": "이영희", "department": "법무팀", "role": "user"},
    {"id": "user04", "password": "user2024", "name": "박민수", "department": "기획팀", "role": "user"},
    {"id": "user05", "password": "secure456", "name": "최지원", "department": "IT팀", "role": "user"}
  ]
};

// 전역 변수
let appState = {
  currentUser: null,
  currentCategory: null,
  currentSection: null,
  bookmarks: [],
  history: [],
  isDarkMode: false,
  sessionTimeout: null,
  warningTimeout: null,
  isWarningActive: false,
  lastActivity: Date.now()
};

let countdownInterval = null;

// 유틸리티 함수들
function logAccess(action, details) {
  const timestamp = new Date().toLocaleString();
  const logEntry = {
    timestamp,
    action,
    details,
    userAgent: navigator.userAgent,
    ip: 'N/A'
  };
  console.log('접속 로그:', logEntry);
}

function updateActivity() {
  appState.lastActivity = Date.now();
}

function clearTimeouts() {
  if (appState.sessionTimeout) {
    clearTimeout(appState.sessionTimeout);
    appState.sessionTimeout = null;
  }
  if (appState.warningTimeout) {
    clearTimeout(appState.warningTimeout);
    appState.warningTimeout = null;
  }
}

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 로드 완료 - 앱 초기화 시작');
  
  // 보안 설정
  setupSecurity();
  
  // 테마 초기화
  loadTheme();
  
  // 이벤트 리스너 설정
  setupAllEventListeners();
  
  // 로그인 화면 표시
  showLoginScreen();
  
  console.log('앱 초기화 완료');
});

// 보안 설정
function setupSecurity() {
  // 우클릭 방지
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // 개발자 도구 단축키 방지
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) { // F12
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) { // Ctrl+Shift+I,J
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
      e.preventDefault();
      return false;
    }
  });

  // 드래그 방지
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });
}

// 모든 이벤트 리스너 설정
function setupAllEventListeners() {
  console.log('이벤트 리스너 설정 시작');
  
  // 로그인 폼 이벤트
  setupLoginEvents();
  
  // 네비게이션 이벤트
  setupNavigationEvents();
  
  // 헤더 버튼 이벤트
  setupHeaderEvents();
  
  // 검색 모달 이벤트
  setupSearchEvents();
  
  // 기타 이벤트
  setupMiscEvents();
  
  // 활동 추적
  setupActivityTracking();
  
  console.log('이벤트 리스너 설정 완료');
}

function setupLoginEvents() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('로그인 폼 제출됨');
      handleLogin(e);
    });
    console.log('로그인 폼 이벤트 리스너 등록됨');
  } else {
    console.error('로그인 폼을 찾을 수 없음');
  }
}

function setupNavigationEvents() {
  const navHome = document.getElementById('nav-home');
  const navBookmarks = document.getElementById('nav-bookmarks');
  const navHistory = document.getElementById('nav-history');
  
  if (navHome) navHome.addEventListener('click', () => showScreen('home'));
  if (navBookmarks) navBookmarks.addEventListener('click', () => showScreen('bookmarks'));
  if (navHistory) navHistory.addEventListener('click', () => showScreen('history'));
}

function setupHeaderEvents() {
  const searchBtn = document.getElementById('search-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const logoutBtn = document.getElementById('logout-btn');
  
  if (searchBtn) searchBtn.addEventListener('click', openSearchModal);
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
}

function setupSearchEvents() {
  const closeSearch = document.getElementById('close-search');
  const searchExecute = document.getElementById('search-execute');
  const searchInput = document.getElementById('search-input');
  const searchModal = document.getElementById('search-modal');
  
  if (closeSearch) closeSearch.addEventListener('click', closeSearchModal);
  if (searchExecute) searchExecute.addEventListener('click', executeSearch);
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') executeSearch();
    });
  }
  
  if (searchModal) {
    searchModal.addEventListener('click', function(e) {
      if (e.target === this) closeSearchModal();
    });
  }
}

function setupMiscEvents() {
  const backToHome = document.getElementById('back-to-home');
  const backToCategory = document.getElementById('back-to-category');
  const bookmarkToggle = document.getElementById('bookmark-toggle');
  const clearHistoryBtn = document.getElementById('clear-history');
  const extendSessionBtn = document.getElementById('extend-session');
  
  if (backToHome) backToHome.addEventListener('click', () => showScreen('home'));
  if (backToCategory) backToCategory.addEventListener('click', () => showScreen('category'));
  if (bookmarkToggle) bookmarkToggle.addEventListener('click', toggleBookmark);
  if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', clearHistory);
  if (extendSessionBtn) extendSessionBtn.addEventListener('click', extendSession);
}

function setupActivityTracking() {
  ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, updateActivity);
  });
}

// 테마 관련 함수
function loadTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeToggle = document.getElementById('theme-toggle');
  
  if (prefersDark) {
    appState.isDarkMode = true;
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    appState.isDarkMode = false;
    document.documentElement.setAttribute('data-color-scheme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

function toggleTheme() {
  appState.isDarkMode = !appState.isDarkMode;
  const themeToggle = document.getElementById('theme-toggle');
  
  if (appState.isDarkMode) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

// 로그인 관련 함수
function showLoginScreen() {
  const loginScreen = document.getElementById('login-screen');
  const mainApp = document.getElementById('main-app');
  
  if (loginScreen) {
    loginScreen.classList.remove('hidden');
    console.log('로그인 화면 표시됨');
  }
  if (mainApp) mainApp.classList.add('hidden');
}

function showMainApp() {
  const loginScreen = document.getElementById('login-screen');
  const mainApp = document.getElementById('main-app');
  
  if (loginScreen) loginScreen.classList.add('hidden');
  if (mainApp) {
    mainApp.classList.remove('hidden');
    console.log('메인 앱 화면 표시됨');
  }
  
  initializeMainApp();
  startSessionTimer();
}

function handleLogin(e) {
  console.log('로그인 처리 시작');
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  if (!usernameInput || !passwordInput) {
    console.error('로그인 입력 필드를 찾을 수 없습니다');
    showLoginError('로그인 폼에 오류가 발생했습니다.');
    return;
  }
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  console.log('로그인 시도 - 사용자:', username);
  
  if (!username || !password) {
    showLoginError('사용자 ID와 비밀번호를 모두 입력해주세요.');
    return;
  }
  
  showLoading();
  
  // 실제 로그인 검증을 시뮬레이션
  setTimeout(() => {
    const user = APP_DATA.users.find(u => u.id === username && u.password === password);
    
    hideLoading();
    
    if (user) {
      console.log('로그인 성공:', user.name);
      appState.currentUser = user;
      logAccess('로그인', `사용자 ${user.name}(${user.id})가 로그인했습니다.`);
      hideLoginError();
      showMainApp();
    } else {
      console.log('로그인 실패 - 잘못된 인증 정보');
      showLoginError('사용자 ID 또는 비밀번호가 올바르지 않습니다.');
    }
  }, 1000);
}

function handleLogout() {
  if (confirm('정말 로그아웃하시겠습니까?')) {
    if (appState.currentUser) {
      logAccess('로그아웃', `사용자 ${appState.currentUser.name}(${appState.currentUser.id})가 로그아웃했습니다.`);
    }
    resetApp();
    showLoginScreen();
  }
}

function showLoading() {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner) {
    loadingSpinner.classList.remove('hidden');
    console.log('로딩 스피너 표시');
  }
}

function hideLoading() {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
    console.log('로딩 스피너 숨김');
  }
}

function showLoginError(message) {
  const loginError = document.getElementById('login-error');
  if (loginError) {
    loginError.textContent = message;
    loginError.classList.remove('hidden');
    console.log('로그인 오류 메시지 표시:', message);
  }
}

function hideLoginError() {
  const loginError = document.getElementById('login-error');
  if (loginError) {
    loginError.classList.add('hidden');
  }
}

// 메인 앱 초기화
function initializeMainApp() {
  console.log('메인 앱 초기화 시작');
  
  const userName = document.getElementById('user-name');
  const userDepartment = document.getElementById('user-department');
  
  if (userName && appState.currentUser) {
    userName.textContent = appState.currentUser.name;
  }
  if (userDepartment && appState.currentUser) {
    userDepartment.textContent = appState.currentUser.department;
  }
  
  renderCategories();
  showScreen('home');
  updateQuickAccess();
  
  console.log('메인 앱 초기화 완료');
}

function renderCategories() {
  const categoriesGrid = document.getElementById('categories-grid');
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = '';
  
  APP_DATA.regulations.categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    
    categoryCard.innerHTML = `
      <div class="category-header">
        <div class="category-icon">${category.icon}</div>
        <h3 class="category-title">${category.title}</h3>
      </div>
      <p class="section-count">${category.sections.length}개 규정</p>
    `;
    
    categoryCard.addEventListener('click', () => openCategory(category));
    categoriesGrid.appendChild(categoryCard);
  });
  
  console.log('카테고리 렌더링 완료');
}

// 화면 네비게이션
function showScreen(screenName) {
  console.log('화면 전환:', screenName);
  
  const screens = ['home', 'category', 'regulation', 'bookmarks', 'history'];
  screens.forEach(screen => {
    const element = document.getElementById(`${screen}-screen`);
    if (element) element.classList.remove('active');
  });
  
  const navButtons = ['nav-home', 'nav-bookmarks', 'nav-history'];
  navButtons.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(`${screenName}-screen`);
  if (targetScreen) targetScreen.classList.add('active');
  
  const targetNavBtn = document.getElementById(`nav-${screenName}`);
  if (targetNavBtn) targetNavBtn.classList.add('active');
  
  switch(screenName) {
    case 'bookmarks':
      renderBookmarks();
      break;
    case 'history':
      renderHistory();
      break;
  }
}

function openCategory(category) {
  console.log('카테고리 열기:', category.title);
  appState.currentCategory = category;
  showScreen('category');
  
  const categoryTitle = document.getElementById('category-title');
  if (categoryTitle) categoryTitle.textContent = category.title;
  
  renderSections(category.sections);
}

function renderSections(sections) {
  const sectionsList = document.getElementById('sections-list');
  if (!sectionsList) return;
  
  sectionsList.innerHTML = '';
  
  sections.forEach(section => {
    const sectionItem = document.createElement('div');
    sectionItem.className = 'section-item';
    
    sectionItem.innerHTML = `
      <div class="section-header">
        <span class="section-id">${section.id}</span>
      </div>
      <h4 class="section-title">${section.title}</h4>
      <p class="section-preview">${section.content.substring(0, 200)}...</p>
      <div class="section-keywords">
        ${section.keywords.slice(0, 3).map(keyword => 
          `<span class="keyword-tag">${keyword}</span>`
        ).join('')}
        ${section.keywords.length > 3 ? '<span class="keyword-tag">...</span>' : ''}
      </div>
    `;
    
    sectionItem.addEventListener('click', () => openRegulation(section));
    sectionsList.appendChild(sectionItem);
  });
}

function openRegulation(section) {
  console.log('규정 열기:', section.title);
  appState.currentSection = section;
  
  addToHistory(section, appState.currentCategory);
  showScreen('regulation');
  
  const regulationTitle = document.getElementById('regulation-title');
  const regulationText = document.getElementById('regulation-text');
  
  if (regulationTitle) regulationTitle.textContent = section.title;
  if (regulationText) regulationText.textContent = section.content;
  
  updateBookmarkButton();
}

// 북마크 관련 함수
function addBookmark(section, category) {
  const bookmark = {
    id: section.id,
    title: section.title,
    categoryTitle: category.title,
    categoryId: category.id,
    addedAt: new Date().toLocaleString()
  };
  
  const exists = appState.bookmarks.find(b => b.id === section.id);
  if (!exists) {
    appState.bookmarks.unshift(bookmark);
    if (appState.bookmarks.length > 50) {
      appState.bookmarks = appState.bookmarks.slice(0, 50);
    }
  }
}

function removeBookmark(sectionId) {
  appState.bookmarks = appState.bookmarks.filter(b => b.id !== sectionId);
}

function isBookmarked(sectionId) {
  return appState.bookmarks.some(b => b.id === sectionId);
}

function updateBookmarkButton() {
  const bookmarkBtn = document.getElementById('bookmark-toggle');
  if (!bookmarkBtn || !appState.currentSection) return;
  
  if (isBookmarked(appState.currentSection.id)) {
    bookmarkBtn.textContent = '⭐ 북마크 제거';
    bookmarkBtn.classList.add('bookmarked');
  } else {
    bookmarkBtn.textContent = '⭐ 북마크 추가';
    bookmarkBtn.classList.remove('bookmarked');
  }
}

function toggleBookmark() {
  if (!appState.currentSection || !appState.currentCategory) return;
  
  if (isBookmarked(appState.currentSection.id)) {
    removeBookmark(appState.currentSection.id);
  } else {
    addBookmark(appState.currentSection, appState.currentCategory);
  }
  
  updateBookmarkButton();
  updateQuickAccess();
}

function renderBookmarks() {
  const bookmarksList = document.getElementById('bookmarks-list');
  if (!bookmarksList) return;
  
  if (appState.bookmarks.length === 0) {
    bookmarksList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⭐</div>
        <p>저장된 북마크가 없습니다.</p>
      </div>
    `;
    return;
  }
  
  bookmarksList.innerHTML = '';
  
  appState.bookmarks.forEach(bookmark => {
    const bookmarkItem = document.createElement('div');
    bookmarkItem.className = 'bookmark-item';
    
    bookmarkItem.innerHTML = `
      <div class="item-header">
        <h4 class="item-title">${bookmark.title}</h4>
        <div class="item-actions">
          <button class="action-btn remove-bookmark" data-id="${bookmark.id}" title="북마크 제거">🗑️</button>
        </div>
      </div>
      <p class="item-meta">${bookmark.categoryTitle} | ${bookmark.addedAt}</p>
    `;
    
    bookmarkItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-bookmark')) return;
      openBookmarkItem(bookmark);
    });
    
    const removeBtn = bookmarkItem.querySelector('.remove-bookmark');
    if (removeBtn) {
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeBookmarkItem(bookmark.id);
      });
    }
    
    bookmarksList.appendChild(bookmarkItem);
  });
}

// 히스토리 관련 함수
function addToHistory(section, category) {
  const historyItem = {
    id: section.id,
    title: section.title,
    categoryTitle: category.title,
    categoryId: category.id,
    viewedAt: new Date().toLocaleString()
  };

  appState.history = appState.history.filter(h => h.id !== section.id);
  appState.history.unshift(historyItem);
  
  if (appState.history.length > 100) {
    appState.history = appState.history.slice(0, 100);
  }
}

function renderHistory() {
  const historyList = document.getElementById('history-list');
  if (!historyList) return;
  
  if (appState.history.length === 0) {
    historyList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📖</div>
        <p>조회 기록이 없습니다.</p>
      </div>
    `;
    return;
  }
  
  historyList.innerHTML = '';
  
  appState.history.forEach(historyItem => {
    const historyElement = document.createElement('div');
    historyElement.className = 'history-item';
    historyElement.addEventListener('click', () => openHistoryItem(historyItem));
    
    historyElement.innerHTML = `
      <div class="item-header">
        <h4 class="item-title">${historyItem.title}</h4>
      </div>
      <p class="item-meta">${historyItem.categoryTitle} | ${historyItem.viewedAt}</p>
    `;
    
    historyList.appendChild(historyElement);
  });
}

function openBookmarkItem(bookmark) {
  const category = APP_DATA.regulations.categories.find(c => c.id === bookmark.categoryId);
  const section = category?.sections.find(s => s.id === bookmark.id);
  
  if (category && section) {
    appState.currentCategory = category;
    openRegulation(section);
  }
}

function openHistoryItem(historyItem) {
  const category = APP_DATA.regulations.categories.find(c => c.id === historyItem.categoryId);
  const section = category?.sections.find(s => s.id === historyItem.id);
  
  if (category && section) {
    appState.currentCategory = category;
    openRegulation(section);
  }
}

function removeBookmarkItem(sectionId) {
  removeBookmark(sectionId);
  renderBookmarks();
  updateQuickAccess();
}

function clearHistory() {
  if (confirm('정말 모든 조회 기록을 삭제하시겠습니까?')) {
    appState.history = [];
    renderHistory();
    updateQuickAccess();
  }
}

function updateQuickAccess() {
  const recentBookmarksList = document.getElementById('recent-bookmarks-list');
  if (recentBookmarksList) {
    const recentBookmarks = appState.bookmarks.slice(0, 3);
    
    if (recentBookmarks.length === 0) {
      recentBookmarksList.innerHTML = '<div class="no-data">저장된 북마크가 없습니다</div>';
    } else {
      recentBookmarksList.innerHTML = recentBookmarks.map(bookmark => 
        `<div class="quick-item" data-bookmark='${JSON.stringify(bookmark)}'>${bookmark.title}</div>`
      ).join('');
      
      recentBookmarksList.querySelectorAll('.quick-item').forEach(item => {
        item.addEventListener('click', () => {
          const bookmark = JSON.parse(item.dataset.bookmark);
          openBookmarkItem(bookmark);
        });
      });
    }
  }
  
  const recentHistoryList = document.getElementById('recent-history-list');
  if (recentHistoryList) {
    const recentHistory = appState.history.slice(0, 3);
    
    if (recentHistory.length === 0) {
      recentHistoryList.innerHTML = '<div class="no-data">조회 기록이 없습니다</div>';
    } else {
      recentHistoryList.innerHTML = recentHistory.map(historyItem => 
        `<div class="quick-item" data-history='${JSON.stringify(historyItem)}'>${historyItem.title}</div>`
      ).join('');
      
      recentHistoryList.querySelectorAll('.quick-item').forEach(item => {
        item.addEventListener('click', () => {
          const historyItem = JSON.parse(item.dataset.history);
          openHistoryItem(historyItem);
        });
      });
    }
  }
}

// 검색 관련 함수
function openSearchModal() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  
  if (searchModal) searchModal.classList.remove('hidden');
  if (searchInput) searchInput.focus();
}

function closeSearchModal() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchModal) searchModal.classList.add('hidden');
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
}

function executeSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  const query = searchInput.value.trim();
  if (!query) return;
  
  const results = [];
  
  APP_DATA.regulations.categories.forEach(category => {
    category.sections.forEach(section => {
      if (section.title.toLowerCase().includes(query.toLowerCase())) {
        results.push({ section, category, matchType: 'title' });
      } else if (section.content.toLowerCase().includes(query.toLowerCase())) {
        results.push({ section, category, matchType: 'content' });
      } else if (section.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))) {
        results.push({ section, category, matchType: 'keywords' });
      }
    });
  });
  
  renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
  const searchResults = document.getElementById('search-results');
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <p>검색어 "${query}"에 대한 결과가 없습니다.</p>
      </div>
    `;
    return;
  }
  
  searchResults.innerHTML = '';
  
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.addEventListener('click', () => {
      closeSearchModal();
      appState.currentCategory = result.category;
      openRegulation(result.section);
    });
    
    const highlightedTitle = highlightText(result.section.title, query);
    const highlightedContent = highlightText(result.section.content.substring(0, 200), query) + '...';
    
    resultItem.innerHTML = `
      <div class="search-result-title">${highlightedTitle}</div>
      <div class="search-result-content">${highlightedContent}</div>
      <div class="item-meta">${result.category.title}</div>
    `;
    
    searchResults.appendChild(resultItem);
  });
}

function highlightText(text, query) {
  if (!query) return text;
  
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 세션 관리
function startSessionTimer() {
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30분
  const WARNING_TIME = 1 * 60 * 1000; // 1분 전 경고
  
  function resetTimer() {
    clearTimeouts();
    
    appState.warningTimeout = setTimeout(() => {
      if (!appState.isWarningActive) {
        showTimeoutWarning();
      }
    }, SESSION_TIMEOUT - WARNING_TIME);
    
    appState.sessionTimeout = setTimeout(() => {
      handleSessionTimeout();
    }, SESSION_TIMEOUT);
  }
  
  const activities = ['mousedown', 'keydown', 'scroll', 'touchstart'];
  activities.forEach(activity => {
    document.addEventListener(activity, resetTimer, true);
  });
  
  resetTimer();
}

function showTimeoutWarning() {
  appState.isWarningActive = true;
  const timeoutWarning = document.getElementById('timeout-warning');
  const countdown = document.getElementById('countdown');
  
  if (timeoutWarning) timeoutWarning.classList.remove('hidden');
  
  let timeLeft = 60;
  if (countdown) countdown.textContent = timeLeft;
  
  countdownInterval = setInterval(() => {
    timeLeft--;
    if (countdown) countdown.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      handleSessionTimeout();
    }
  }, 1000);
  
  setTimeout(() => {
    if (appState.isWarningActive) {
      clearInterval(countdownInterval);
      handleSessionTimeout();
    }
  }, 60000);
}

function extendSession() {
  appState.isWarningActive = false;
  const timeoutWarning = document.getElementById('timeout-warning');
  
  if (timeoutWarning) timeoutWarning.classList.add('hidden');
  if (countdownInterval) clearInterval(countdownInterval);
  
  updateActivity();
}

function handleSessionTimeout() {
  alert('비활성화로 인해 자동으로 로그아웃됩니다.');
  resetApp();
  showLoginScreen();
}

// 앱 리셋
function resetApp() {
  // 상태 초기화
  appState.currentUser = null;
  appState.currentCategory = null;
  appState.currentSection = null;
  appState.bookmarks = [];
  appState.history = [];
  appState.isWarningActive = false;
  
  // 타이머 정리
  clearTimeouts();
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  
  // UI 초기화
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const timeoutWarning = document.getElementById('timeout-warning');
  
  if (loginForm) loginForm.reset();
  if (loginError) loginError.classList.add('hidden');
  if (timeoutWarning) timeoutWarning.classList.add('hidden');
  
  closeSearchModal();
}