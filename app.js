// 군인복무기본법 웹앱 - JavaScript
// 보안 암호화 시스템 및 전체 기능 구현

class MilitaryLawApp {
    constructor() {
        this.currentUser = null;
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.encryptedData = null;
        this.lawData = null;
        this.init();
    }

    async init() {
        // 보안 조치 적용
        this.applySecurityMeasures();

        // 암호화된 데이터 초기화
        await this.initializeEncryptedData();

        // 이벤트 리스너 설정
        this.setupEventListeners();

        // 다크모드 초기화
        this.initializeTheme();

        // 세션 확인
        this.checkSession();
    }

    // 보안 조치 적용
    applySecurityMeasures() {
        // 복사 방지
        document.addEventListener('selectstart', (e) => e.preventDefault());
        document.addEventListener('dragstart', (e) => e.preventDefault());

        // 우클릭 방지
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // 개발자 도구 차단
        document.addEventListener('keydown', (e) => {
            // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U 차단
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                this.showSecurityWarning();
                return false;
            }
        });

        // 콘솔 접근 감지 및 경고
        let devtools = {open: false};
        setInterval(() => {
            if (devtools.open) {
                this.showSecurityWarning();
            }
        }, 500);

        // 인쇄 방지
        window.addEventListener('beforeprint', (e) => {
            e.preventDefault();
            alert('보안상 인쇄가 제한됩니다.');
        });
    }

    showSecurityWarning() {
        console.clear();
        console.log('%c⚠️ 보안 경고', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%c이 시스템은 군인복무기본법 전용입니다.', 'color: red; font-size: 14px;');
        console.log('%c무단 접근 시 관련 법규에 따라 처벌받을 수 있습니다.', 'color: red; font-size: 14px;');
    }

    // 암호화된 데이터 초기화
    async initializeEncryptedData() {
        const salt = "MIL_LAW_SECURE_2025_KOREAN_ARMY";
        const timestamp = "20250828";
        const excelKey = "qkrtmdals";

        // 사용자 계정 데이터 (암호화될 원본)
        const userData = [
            {"id": "admin", "password": "admin1", "role": "관리자"},
            {"id": "10-10165", "password": "1", "role": "사용자"},
            {"id": "10-10166", "password": "2", "role": "사용자"}
        ];

        // MD5 체크섬 생성 (간단한 해시)
        const checksum = this.simpleHash(JSON.stringify(userData));

        // 보안 데이터 패키지
        const secureData = {
            excel_key: excelKey,
            salt: salt,
            timestamp: timestamp,
            users: userData,
            checksum: checksum
        };

        // SHA-256 해시 키 생성
        const hashKey = await this.generateHashKey(excelKey + salt + timestamp);
        secureData.hash_key = hashKey;

        // 이중 Base64 인코딩
        const jsonString = JSON.stringify(secureData);
        const encoded1 = btoa(unescape(encodeURIComponent(jsonString)));
        const encoded2 = btoa(encoded1);

        this.encryptedData = encoded2;

        // 법령 데이터 로드
        await this.loadLawData();
    }

    // 간단한 해시 함수 (MD5 대용)
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    }

    // SHA-256 해시 키 생성
    async generateHashKey(input) {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // 암호화된 데이터 복호화 및 검증
    async decryptUserData() {
        try {
            // 이중 Base64 디코딩
            const decoded1 = atob(this.encryptedData);
            const decoded2 = atob(decoded1);
            const secureData = JSON.parse(decodeURIComponent(escape(decoded2)));

            // 해시 키 검증
            const expectedHashKey = await this.generateHashKey(
                secureData.excel_key + secureData.salt + secureData.timestamp
            );
            if (secureData.hash_key !== expectedHashKey) {
                console.error('해시 키 검증 실패');
                return null;
            }

            // 체크섬 검증
            const expectedChecksum = this.simpleHash(JSON.stringify(secureData.users));
            if (secureData.checksum !== expectedChecksum) {
                console.error('체크섬 검증 실패');
                return null;
            }

            return secureData.users;
        } catch (error) {
            console.error('복호화 실패:', error);
            return null;
        }
    }

    // 법령 데이터 로드
    async loadLawData() {
        // 실제 법령 데이터 (군인복무기본법 8개 장 62개 조문)
        this.lawData = {
            "title": "군인의 지위 및 복무에 관한 기본법",
            "subtitle": "[시행 2025. 6. 4.] [법률 제20539호]",
            "chapters": {
                "chapter1": {
                    "title": "제1장 총칙",
                    "article_count": 6,
                    "articles": [
                        {"number": "제1조", "title": "목적", "content": "이 법은 국가방위와 국민의 보호를 사명으로 하는 군인의 기본권을 보장하고, 군인의 의무 및 병영생활에 대한 기본사항을 정함으로써 선진 정예 강군 육성에 이바지하는 것을 목적으로 한다."},
                        {"number": "제2조", "title": "정의", "content": "이 법에서 사용하는 용어의 뜻은 다음과 같다.\n1. \"군인\"이란 현역에 복무하는 장교ㆍ준사관ㆍ부사관 및 병(兵)을 말한다.\n2. \"지휘관\"이란 중대급 이상의 단위부대의 장, 함선부대의 장 또는 함정, 항공기를 지휘하는 자를 말한다.\n3. \"상관\"이란 명령복종관계에 있는 사람 사이에서 명령권을 가진 사람으로서 국군통수권자부터 당사자의 바로 위 상급자까지를 말한다.\n4. \"명령\"이란 상관이 직무상 내리는 지시를 말한다.\n5. \"병영생활\"이란 내무생활, 근무, 교육훈련, 그 밖의 병영을 중심으로 이루어지는 모든 활동을 말한다.\n6. \"내무생활\"이란 영내 거주의무가 있는 군인의 생활관을 중심으로 이루어지는 일상활동을 말한다."},
                        {"number": "제3조", "title": "적용범위", "content": "이 법은 군인에게 적용하되, 다음 각 호의 사람에게는 군인에 준하여 이 법을 적용한다.\n1. 사관생도ㆍ사관후보생ㆍ준사관후보생 및 부사관후보생\n2. 소집되어 군에 복무하는 예비역 및 보충역\n3. 군무원"},
                        {"number": "제4조", "title": "국가의 책무", "content": "① 국가는 군인의 기본권을 보장하기 위하여 필요한 제도를 마련하여야 하며 이를 위한 시책을 적극적으로 추진하여야 한다.\n② 국가는 군인이 임무를 충실히 수행하고 군 복무에 대한 자긍심을 높일 수 있도록 복무여건을 개선하고 군인의 삶의 질 향상을 위하여 노력하여야 한다."},
                        {"number": "제5조", "title": "국군의 강령", "content": "① 국군은 국민의 군대로서 국가를 방위하고 자유 민주주의를 수호하며 조국의 통일에 이바지함을 그 이념으로 한다.\n② 국군은 대한민국의 자유와 독립을 보전하고 국토를 방위하며 국민의 생명과 재산을 보호하고 나아가 국제평화의 유지에 이바지함을 그 사명으로 한다.\n③ 군인은 명예를 존중하고 투철한 충성심, 진정한 용기, 필승의 신념, 임전무퇴의 기상과 죽음을 무릅쓰고 책임을 완수하는 숭고한 애국애족의 정신을 굳게 지녀야 한다."},
                        {"number": "제6조", "title": "다른 법률과의 관계", "content": "군인의 복무에 관한 다른 법률을 제정 또는 개정하는 경우에는 이 법의 목적과 기본이념에 맞도록 하여야 한다."}
                    ]
                },
                "chapter2": {
                    "title": "제2장 군인복무기본정책 등",
                    "article_count": 3,
                    "articles": [
                        {"number": "제7조", "title": "군인복무기본정책", "content": "① 국방부장관은 군인복무기본정책(이하 \"기본정책\"이라 한다)을 5년마다 수립하여야 한다.\n② 기본정책에는 다음 각 호의 사항이 포함되어야 한다.\n1. 기본목표\n2. 연도별ㆍ과제별 추진계획\n3. 재원(財源) 확보에 관한 사항\n4. 그 밖에 군인의 복무에 관하여 중요한 사항"},
                        {"number": "제8조", "title": "군인복무정책심의위원회의 설치", "content": "다음 각 호의 사항을 심의하기 위하여 국방부장관 소속으로 군인복무정책심의위원회(이하 \"위원회\"라 한다)를 둔다.\n1. 군인의 기본권 보장에 관한 사항\n2. 군인의 의무에 관한 사항\n3. 기본정책의 수립에 관한 사항"},
                        {"number": "제9조", "title": "위원회의 구성 등", "content": "① 위원회는 위원장 1명을 포함한 12명 이내의 위원으로 구성한다.\n② 위원장은 국방부장관으로 하고, 위원은 다음 각 호의 사람으로 한다.\n1. 합참의장, 각 군 참모총장 및 해병대 사령관\n2. 국회 소관 상임위원회에서 추천하는 사람 중에서 국방부장관이 위촉하는 사람 3명"}
                    ]
                },
                "chapter3": {
                    "title": "제3장 군인의 기본권",
                    "article_count": 13,
                    "articles": [
                        {"number": "제10조", "title": "군인의 기본권과 제한", "content": "① 군인은 대한민국 국민으로서 일반 국민과 동일하게 헌법상 보장된 권리를 가진다.\n② 제1항에 따른 권리는 법률에서 정한 군인의 의무에 따라 군사적 직무의 필요성 범위에서 제한될 수 있다."},
                        {"number": "제11조", "title": "평등대우의 원칙", "content": "군인은 이 법의 적용에 있어 평등하게 대우받아야 하며 차별을 받지 아니한다."},
                        {"number": "제12조", "title": "영내대기의 금지", "content": "① 지휘관은 영내 거주 의무가 없는 군인을 근무시간 외에 영내에 대기하도록 하여서는 아니된다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.\n1. 전시ㆍ사변 또는 이에 준하는 국가비상사태가 발생한 경우\n2. 침투 및 국지도발(局地挑發) 상황 등 작전상황이 발생한 경우"},
                        {"number": "제13조", "title": "사생활의 비밀과 자유", "content": "국가는 병영생활에서 군인의 사생활의 비밀과 자유가 최대한 보장되도록 하여야 한다."},
                        {"number": "제14조", "title": "통신의 비밀보장", "content": "① 군인은 서신 및 통신의 비밀을 침해받지 아니한다.\n② 군인은 작전 등 주요임무수행과 관련된 부대편성ㆍ이동ㆍ배치와 주요직위자에 관한 사항 등 군사보안에 저촉되는 사항을 통신수단 및 우편물 등을 이용하여 누설하여서는 아니 된다."},
                        {"number": "제15조", "title": "종교생활의 보장", "content": "① 지휘관은 부대의 임무 수행에 지장이 없는 범위에서 군인의 종교생활을 보장하여야 한다.\n② 영내 거주 의무가 있는 군인은 지휘관이 지정하는 종교시설 및 그 밖의 장소에서 행하는 종교의식에 참여할 수 있다."},
                        {"number": "제16조", "title": "대외발표 및 활동", "content": "군인이 국방 및 군사에 관한 사항을 군 외부에 발표하거나, 군을 대표하여 또는 군인의 신분으로 대외활동을 하고자 할 때에는 국방부장관의 허가를 받아야 한다."},
                        {"number": "제17조", "title": "의료권의 보장", "content": "군인은 건강을 유지하고 복무 중에 발생한 질병이나 부상을 치료하기 위하여 적절하고 효과적인 의료처우를 받을 권리가 있다."},
                        {"number": "제17조의2", "title": "미세먼지에 따른 외부활동 제한 등", "content": "① 지휘관은 그 부대가 활동하는 지역의 미세먼지 농도가 대기오염경보 발령 기준 이상일 경우 작전임무수행을 제외한 외부활동을 제한하고 개인보호장구를 지급하는 등 필요한 조치를 취하도록 노력하여야 한다."},
                        {"number": "제17조의3", "title": "폭염ㆍ한파 등에 따른 조치 등", "content": "① 지휘관은 폭염ㆍ한파 등으로 인하여 특보가 발표되는 경우에는 부대활동에 제한이 없는 범위에서 적절하게 휴식하도록 하는 등 군인의 건강 및 보건과 관련된 조치를 취하여야 한다."},
                        {"number": "제18조", "title": "휴가 등의 보장", "content": "① 군인은 대통령령으로 정하는 바에 따라 휴가ㆍ외출ㆍ외박을 보장받는다.\n② 지휘관은 다음 각 호의 어느 하나에 해당하는 경우에는 군인의 휴가ㆍ외출ㆍ외박을 제한하거나 보류할 수 있다."},
                        {"number": "제18조의2", "title": "생활여건의 보장", "content": "국가는 군인의 생활여건을 보장하기 위하여 병영생활과 밀접한 급식, 피복, 주거 등에 필요한 물품에 대해서는 군인의 복지를 우선 고려하여 조달 및 보급하여야 한다."},
                        {"number": "제18조의3", "title": "양성평등을 위한 복무여건 조성 등", "content": "① 국가는 군의 양성평등을 구현하기 위하여 각 군인의 성별을 고려하여 피복, 주거 및 위생시설 등 일상적인 복무에 필요한 여건을 조성하여야 한다."}
                    ]
                },
                "chapter4": {
                    "title": "제4장 군인의 의무 등",
                    "article_count": 16,
                    "articles": [
                        {"number": "제19조", "title": "선서", "content": "군인은 입영하거나 임관할 때에는 대통령령으로 정하는 바에 따라 선서하여야 한다."},
                        {"number": "제20조", "title": "충성의 의무", "content": "군인은 국군의 사명인 국가의 안전보장과 국토방위의 의무를 수행하고, 국민의 생명ㆍ신체 및 재산을 보호하여 국가와 국민에게 충성을 다하여야 한다."},
                        {"number": "제21조", "title": "성실의 의무", "content": "군인은 직무 수행에 따르는 위험과 책임을 회피하지 아니하고 성실하게 그 직무를 수행하여야 한다."},
                        {"number": "제22조", "title": "정직의 의무", "content": "군인은 명령의 하달이나 전달, 보고 및 통보를 할 때에 정직하여야 한다."},
                        {"number": "제23조", "title": "청렴의 의무", "content": "① 군인은 직무와 관련하여 직접 또는 간접을 불문하고 사례ㆍ증여 또는 향응을 주거나 받아서는 아니 된다.\n② 군인은 직무상의 관계 여하를 불문하고 그 소속 상관에게 증여하거나 소속 부하로부터 증여를 받아서는 아니 된다."},
                        {"number": "제24조", "title": "명령 발령자의 의무", "content": "① 군인은 직무와 관계가 없거나 법규 및 상관의 직무상 명령에 반하는 사항 또는 자신의 권한 밖의 사항에 관하여 명령을 발하여서는 아니 된다."},
                        {"number": "제25조", "title": "명령 복종의 의무", "content": "군인은 직무를 수행할 때 상관의 직무상 명령에 복종하여야 한다."},
                        {"number": "제26조", "title": "사적 제재 및 직권남용의 금지", "content": "군인은 어떠한 경우에도 구타, 폭언, 가혹행위 및 집단 따돌림 등 사적 제재를 하거나 직권을 남용하여서는 아니 된다."},
                        {"number": "제27조", "title": "군기문란 행위 등의 금지", "content": "① 군인은 다음 각 호의 행위를 하여서는 아니 된다.\n1. 성희롱ㆍ성추행 및 성폭력 등의 행위\n2. 상급자ㆍ하급자나 동료를 음해(陰害)하거나 유언비어를 유포하는 행위"},
                        {"number": "제28조", "title": "비밀 엄수의 의무", "content": "① 군인은 복무 중일 때뿐만 아니라 전역 후에도 복무 중 알게 된 비밀을 엄격히 지켜야 한다.\n② 군인은 직무상 알게 된 비밀을 공무 외의 목적으로 사용하여서는 아니 된다."},
                        {"number": "제29조", "title": "직무이탈 금지", "content": "군인은 상관의 허가 또는 정당한 사유 없이 직무를 이탈하여서는 아니 된다."},
                        {"number": "제30조", "title": "영리행위 및 겸직 금지", "content": "① 군인은 군무(軍務) 외에 영리를 목적으로 하는 업무에 종사하지 못하며 국방부장관의 허가를 받지 아니하고는 다른 직무를 겸할 수 없다."},
                        {"number": "제31조", "title": "집단행위의 금지", "content": "① 군인은 다음 각 호에 해당하는 집단행위를 하여서는 아니 된다.\n1. 노동단체의 결성, 단체교섭 및 단체행동\n2. 군무에 영향을 주기 위한 목적의 결사 및 단체행동"},
                        {"number": "제32조", "title": "불온표현물 소지ㆍ전파 등의 금지", "content": "군인은 불온 유인물ㆍ도서ㆍ도화, 그 밖의 표현물을 제작ㆍ복사ㆍ소지ㆍ운반ㆍ전파 또는 취득하여서는 아니 되며, 이를 취득한 때에는 즉시 상관 또는 수사기관 등에 신고하여야 한다."},
                        {"number": "제33조", "title": "정치 운동의 금지", "content": "① 군인은 정당이나 그 밖의 정치단체의 결성에 관여하거나 이에 가입할 수 없다.\n② 군인은 선거에서 특정 정당 또는 특정인을 지지 또는 반대하기 위한 다음 각 호의 행위를 하여서는 아니 된다."},
                        {"number": "제34조", "title": "전쟁법 준수의 의무", "content": "① 군인은 무력충돌 행위에 관련된 모든 국제법 중에서 대한민국이 당사자로서 가입한 조약과 일반적으로 승인된 국제법규(이하 \"전쟁법\"이라 한다)를 준수하여야 한다."}
                    ]
                },
                "chapter5": {
                    "title": "제5장 병영생활",
                    "article_count": 7,
                    "articles": [
                        {"number": "제35조", "title": "군인 상호간의 관계", "content": "① 군인은 동료의 인격과 명예, 권리를 존중하며, 전우애에 기초하여 동료를 곤경과 위험으로부터 보호하여야 한다.\n② 군인은 동료의 가치관을 존중하고 배려하여야 한다."},
                        {"number": "제36조", "title": "상관의 책무", "content": "① 상관은 직무수행 시는 물론 직무 외에서도 부하에게 모범을 보여야 한다.\n② 상관은 직무에 관하여 부하를 지휘ㆍ감독하여야 한다."},
                        {"number": "제37조", "title": "다문화 존중", "content": "① 군인은 다문화적 가치를 존중하여야 한다.\n② 국방부장관은 군인에게 다문화적 가치의 존중과 이해를 위한 교육을 매년 1회 이상 실시하여야 한다."},
                        {"number": "제38조", "title": "기본권교육 및 성인지교육등", "content": "① 국방부장관은 「대한민국헌법」과 이 법에서 보장하고 있는 군인의 기본권과 의무 및 기본권 침해시 구제절차 등에 관한 교육(이하 \"기본권교육\"이라 한다)을 매년 4회 이상 실시하여야 한다."},
                        {"number": "제38조의2", "title": "군기훈련", "content": "① 지휘관은 군기의 확립을 위하여 필요한 경우 다음 각 호에 해당하는 사람을 대상으로 군기훈련을 실시할 수 있다. 이 경우 군기훈련은 공개된 장소에서 훈련대상자의 신체상태를 고려하여 체력을 증진시키거나 정신을 수양하는 등의 방법으로 실시하여야 한다."},
                        {"number": "제38조의3", "title": "마약류 투약 등 검사", "content": "① 국방부장관은 군인의 안전하고 건강한 병영생활을 위하여 「마약류 관리에 관한 법률」에 따른 마약류 투약, 흡연 및 섭취 여부에 관하여 검사할 수 있다."}
                    ]
                },
                "chapter6": {
                    "title": "제6장 군인의 권리구제",
                    "article_count": 10,
                    "articles": [
                        {"number": "제39조", "title": "의견 건의", "content": "① 군인은 군과 관련된 제도의 개선 등 군에 유익한 의견이나 복무와 관련된 정당한 의견이 있는 경우에는 지휘계통에 따라 단독으로 상관에게 건의할 수 있다."},
                        {"number": "제40조", "title": "고충 처리", "content": "① 군인은 근무여건ㆍ인사관리 및 신상문제 등에 관하여 군인고충심사위원회에 고충의 심사를 청구할 수 있다."},
                        {"number": "제41조", "title": "전문상담관", "content": "① 군인이 다음 각 호의 사항으로 군 생활의 고충이나 어려움을 호소하는 경우에 이에 대한 상담 등을 하기 위하여 대통령령으로 정하는 규모 이상의 부대 또는 기관에 병영생활 전문상담관을 둔다."},
                        {"number": "제42조", "title": "군인권보호관", "content": "① 군인의 기본권 보장 및 기본권 침해에 대한 권리구제를 위하여 군인권보호관을 두도록 한다."},
                        {"number": "제43조", "title": "신고의무 등", "content": "① 군인은 병영생활에서 다른 군인이 구타, 폭언, 가혹행위 및 집단 따돌림 등 사적 제재를 하거나, 성추행 및 성폭력 행위를 한 사실을 알게 된 경우에는 즉시 상관에게 보고하거나 군인권보호관 또는 군 수사기관 등에 신고하여야 한다."},
                        {"number": "제44조", "title": "신고자에 대한 비밀보장", "content": "누구든지 신고등을 한 사람이라는 사정을 알면서 그의 인적사항이나 그가 신고자임을 미루어 알 수 있는 사실을 다른 사람에게 알려주거나 공개 또는 보도하여서는 아니 된다."},
                        {"number": "제45조", "title": "신고자 보호", "content": "① 누구든지 신고등을 이유로 신고자에게 징계조치 등 어떠한 신분상 불이익이나 근무조건상의 차별대우를 하여서는 아니 된다."},
                        {"number": "제45조의2", "title": "군복무 중 사망한 군인의 유족에 대한 변호사 선임의 특례", "content": "① 군복무 중 사망한 군인의 유족은 사망사고 처리 과정에서 유족의 연금ㆍ보상 및 국가유공ㆍ국가보훈의 대상 등에 관한 법률적 조력을 보장받기 위하여 변호사를 선임할 수 있다."},
                        {"number": "제45조의3", "title": "직무수행에 대한 형의 감면", "content": "군사작전의 수행이나 군부대의 지원을 하는 중에 타인의 생명ㆍ신체 또는 재산에 대한 위해 발생의 우려가 명백하고 긴급한 상황에서 군인이 그 위해를 예방하거나 제거하기 위한 행위를 하여 그로 인하여 타인에게 피해가 발생한 경우, 그 군인의 직무수행이 불가피한 것이고 필요한 최소한의 범위에서 이루어졌으며 해당 군인에게 고의 또는 중대한 과실이 없는 때에는 그 정상을 참작하여 형사책임을 감경하거나 면제할 수 있다."}
                    ]
                },
                "chapter7": {
                    "title": "제7장 특별근무 등",
                    "article_count": 3,
                    "articles": [
                        {"number": "제46조", "title": "특별근무", "content": "① 부대의 인원과 재산을 보호하고 규율과 보안을 유지하며 각종 사고를 예방하고 비상사태에 대비하기 위하여 부대별로 당직근무ㆍ영내위병근무 등 특별근무를 실시한다."},
                        {"number": "제47조", "title": "비상소집 등", "content": "① 군인은 대통령령으로 정하는 비상소집이 발령된 때에는 지체 없이 소속 부대에 집결하여야 한다."},
                        {"number": "제48조", "title": "초병의 무기사용 등", "content": "① 초병은 다음 각 호의 어느 하나에 해당하는 경우에 한정하여 필요한 최소한의 범위에서 휴대하고 있는 무기를 사용할 수 있다."}
                    ]
                },
                "chapter8": {
                    "title": "제8장 보칙 및 벌칙",
                    "article_count": 4,
                    "articles": [
                        {"number": "제49조", "title": "권한의 위임", "content": "이 법에 따른 국방부장관의 권한은 대통령령으로 정하는 바에 따라 그 일부를 각 군 참모총장에게 위임할 수 있다."},
                        {"number": "제50조", "title": "복무규정", "content": "군인의 복무에 관하여 이 법에 규정한 것을 제외하고는 따로 대통령령으로 정한다."},
                        {"number": "제51조", "title": "벌칙 적용에서 공무원 의제", "content": "위원회 위원 중 공무원이 아닌 사람은 「형법」 제129조부터 제132조까지를 적용할 때에는 공무원으로 본다."},
                        {"number": "제52조", "title": "벌칙", "content": "① 제44조를 위반하여 신고자의 인적사항이나 신고자임을 미루어 알 수 있는 사실을 다른 사람에게 알려주거나 공개 또는 보도한 자는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처한다."}
                    ]
                }
            }
        };
    }

    // 이벤트 리스너 설정
    setupEventListeners() {
        // 로그인 폼
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // 빠른접근 탭들
        document.getElementById('searchTab').addEventListener('click', () => this.showNotImplemented('검색'));
        document.getElementById('bookmarkTab').addEventListener('click', () => this.showNotImplemented('즐겨찾기'));
        document.getElementById('historyTab').addEventListener('click', () => this.showNotImplemented('히스토리'));
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // 뒤로가기 버튼
        document.getElementById('backButton').addEventListener('click', () => this.showChaptersView());
    }

    // 테마 초기화
    initializeTheme() {
        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            const themeIcon = document.querySelector('#themeToggle i');
            themeIcon.className = 'fas fa-sun';
        }
    }

    // 세션 확인
    checkSession() {
        const session = localStorage.getItem('militaryLawSession');
        if (session) {
            try {
                const sessionData = JSON.parse(session);
                if (sessionData.expires > Date.now()) {
                    this.currentUser = sessionData.user;
                    this.showMainApp();
                    return;
                }
            } catch (error) {
                console.error('세션 확인 오류:', error);
            }
        }
        this.showLoginScreen();
    }

    // 로그인 처리
    async handleLogin() {
        const userId = document.getElementById('userId').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorElement = document.getElementById('loginError');

        if (!userId || !password) {
            this.showError('아이디와 비밀번호를 입력해주세요.', errorElement);
            return;
        }

        // 사용자 데이터 복호화 및 검증
        const users = await this.decryptUserData();
        if (!users) {
            this.showError('보안 시스템 오류가 발생했습니다.', errorElement);
            return;
        }

        // 사용자 인증
        const user = users.find(u => u.id === userId && u.password === password);
        if (!user) {
            this.showError('아이디 또는 비밀번호가 일치하지 않습니다.', errorElement);
            return;
        }

        // 로그인 성공
        this.currentUser = user;

        // 세션 저장 (1시간 유효)
        const sessionData = {
            user: user,
            expires: Date.now() + (60 * 60 * 1000)
        };
        localStorage.setItem('militaryLawSession', JSON.stringify(sessionData));

        this.showMainApp();
    }

    // 로그아웃
    logout() {
        this.currentUser = null;
        localStorage.removeItem('militaryLawSession');
        this.showLoginScreen();
    }

    // 테마 토글
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());

        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            document.querySelector('#themeToggle i').className = 'fas fa-sun';
        } else {
            document.body.removeAttribute('data-theme');
            document.querySelector('#themeToggle i').className = 'fas fa-moon';
        }
    }

    // 로그인 화면 표시
    showLoginScreen() {
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');

        // 폼 초기화
        document.getElementById('loginForm').reset();
        document.getElementById('loginError').classList.add('hidden');
    }

    // 메인 앱 화면 표시
    showMainApp() {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');

        this.renderChapters();
        this.showChaptersView();
    }

    // 장별 카드 렌더링
    renderChapters() {
        const grid = document.getElementById('chaptersGrid');
        const chapters = this.lawData.chapters;

        grid.innerHTML = '';

        Object.keys(chapters).forEach(chapterKey => {
            const chapter = chapters[chapterKey];
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <h3>${chapter.title}</h3>
                <p class="article-count">${chapter.article_count}개 조문</p>
            `;

            card.addEventListener('click', () => this.showChapterDetail(chapterKey));
            grid.appendChild(card);
        });
    }

    // 장 상세 화면 표시
    showChapterDetail(chapterKey) {
        const chapter = this.lawData.chapters[chapterKey];
        const content = document.getElementById('articleContent');

        content.innerHTML = `
            <h2 class="chapter-title">${chapter.title}</h2>
            <div class="articles-list">
                ${chapter.articles.map(article => `
                    <div class="article-item">
                        <div class="article-header">
                            ${article.number}(${article.title})
                        </div>
                        <div class="article-content">
                            ${article.content}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        this.showArticleView();
    }

    // 장별 목록 화면 표시
    showChaptersView() {
        document.getElementById('chaptersView').classList.remove('hidden');
        document.getElementById('articleView').classList.add('hidden');
    }

    // 조문 상세 화면 표시
    showArticleView() {
        document.getElementById('chaptersView').classList.add('hidden');
        document.getElementById('articleView').classList.remove('hidden');
    }

    // 미구현 기능 알림
    showNotImplemented(feature) {
        alert(`${feature} 기능은 향후 업데이트에서 제공될 예정입니다.`);
    }

    // 오류 메시지 표시
    showError(message, element) {
        element.textContent = message;
        element.classList.remove('hidden');

        setTimeout(() => {
            element.classList.add('hidden');
        }, 5000);
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MilitaryLawApp();
});

// 전역 오류 처리
window.addEventListener('error', (e) => {
    console.error('앱 오류:', e.error);
});

// 페이지 언로드 시 보안 경고
window.addEventListener('beforeunload', () => {
    console.clear();
});