import { useEffect, useState } from "react";
import profileImage from "./assets/profile.png";

const DOC = (f) => `${import.meta.env.BASE_URL}docs/${f}`;
const LINKS = {
  teacherguard: "https://github.com/yeahisme0527/teacherguard",
  teacherguardApp: "https://teacherguard-fvbmbnmh4wij5lqulq8unt.streamlit.app/",
  esg: "https://github.com/yeahisme0527/esg-dart-kcgs-analysis",
  movie: "https://github.com/yeahisme0527/korean-movie-review-sentiment",
  sgcc: "https://github.com/yeahisme0527/sgcc",
  sgccSite: "https://yeahisme0527.github.io/sgcc/",
  oss: "https://github.com/yeahisme0527/opensource-term-project-team45",
  regression: "https://github.com/yeahisme0527/data_mining_analysis_Regression",
  classification: "https://github.com/yeahisme0527/data_mining_analysis_Classification",
  wine: "https://github.com/yeahisme0527/ai_datascience",
  karrot: "https://github.com/yeahisme0527/karrot-market-global-strategy-project",
  finds: "https://findslab.github.io/site/",
  kai: "https://www.koreaaero.com/KO/Sustainability/AerospaceJournalPrizeInfo.aspx",
  ahpDoi: "http://dx.doi.org/10.17703/JCCT.2026.12.5.191",
  ahpPdf: DOC("ahp-paper-jcct-2026.pdf"),
  fxPdf: DOC("fx-volatility-yield-curve.pdf"),
  tgPdf: DOC("teacherguard-overview.pdf"),
};

const profile = {
  name: "황예은",
  school: "가천대학교 빅데이터경영전공 3학년",
  tagline: "데이터를 해석하고, 결과를 지표와 제품으로 만듭니다.",
  github: "https://github.com/yeahisme0527",
  blog: "https://blog.naver.com/oh_yeahisme",
  instagram: "https://www.instagram.com/informa.pick",
  email: "yeahisme@gachon.ac.kr",
  personalEmail: "yeahisme0527@gmail.com",
};

const gpa = [
  { term: "1-1", v: 4.13 },
  { term: "1-2", v: 4.34 },
  { term: "2-1", v: 4.39 },
  { term: "2-2", v: 4.5 },
  { term: "3-1", v: 4.41 },
  { term: "계절", v: 4.5 },
];

const sectionStars = [
  { id: "about", cls: "r s1", x: 22, y: 30, title: "소개", sub: "성적, 도구, 관심 분야" },
  { id: "projects", cls: "s2", x: 78, y: 26, title: "프로젝트 · 9", sub: "분석과 개발" },
  { id: "research", cls: "s3", x: 82, y: 68, title: "논문 · 2", sub: "KCI 등재" },
  { id: "awards", cls: "s4", x: 56, y: 88, title: "기록", sub: "공모전, 인턴, 학회" },
  { id: "goals", cls: "r s5 dim", x: 20, y: 74, title: "다음 탐사", sub: "2026 겨울, 공개 전" },
  { id: "contact", cls: "s6", x: 42, y: 13, title: "연락", sub: "이메일, 블로그" },
];

const milestones = [
  { x: 5, y: 62, when: "2024", what: "아르테크네 우수상", big: true, detail: "가천대학교 아르테크네 2024 공모전. CSO 역할로 참가해 우수상을 받았습니다." },
  { x: 16, y: 30, when: "2024", what: "Global AI Ambassador 우수 활동자", detail: "VANK 글로벌 AI 앰배서더. 홍보 및 정책 제안 활동으로 우수 활동자에 선정됐습니다." },
  { x: 27, y: 64, when: "2025", what: "오픈소스 팀프로젝트 팀장", detail: "Open Source SW 텀프로젝트. HuggingFace 기반 한국어 감정 분석을 개발하며 팀장으로 저장소 관리와 결과물 통합을 맡았습니다." },
  { x: 38, y: 28, when: "2026.02", what: "ADsP 취득", detail: "데이터분석 준전문가(ADsP) 자격 취득. 한국데이터산업진흥원, 제48회." },
  { x: 49, y: 62, when: "2026 상반기", what: "AHP 논문 KCI 등재", big: true, detail: "「경영대학 대학생의 취업 시 기업 선택 요인에 관한 우선순위 분석: AHP 기법을 중심으로」. 지도교수님·수강생과 공동 집필, KCI 등재." },
  { x: 60, y: 26, when: "2026 여름", what: "FINDS Lab 연구인턴 · KCI 논문", big: true, detail: "FINDS Lab 학부 연구인턴 3기(6/28~8/31) 수료. 「환율변동성의 수익률곡선 전달과 경기 예측력의 분리」 작성, KCI 게재 예정." },
  { x: 71, y: 60, when: "2026", what: "기업메이커 SGCC 우수상", big: true, detail: "꿈꾸는 기업메이커 SGCC, CEO. SSG 배송 경로 최적화로 이동거리 34% 감소·연 CO₂ 9.13톤 절감을 정량화하고 ESG 전략을 수립해 우수상." },
  { x: 82, y: 28, when: "2026.09", what: "BDAI 실전반 수료", detail: "AI 빅데이터 학회 B.D.A.I 12기. 데이터 분석 실전반(지표설계 및 고객분석) 수료, 2026.03~08." },
  { x: 94, y: 60, when: "2026", what: "KAI 항공우주논문상 심사 중", dim: true, detail: "KAI(한국항공우주산업) 항공우주논문상 2026. 논문을 제출했고 현재 심사 중입니다." },
];

const projects = [
  { year: "2026", title: "TeacherGuard 티쳐가드", desc: "교사를 학부모 갑질로부터 보호하는 AI 플랫폼. 7유형 실시간 탐지, 증거 보관, 신고서 자동 생성. Streamlit 배포.", links: [["GitHub", LINKS.teacherguard], ["배포 앱", LINKS.teacherguardApp], ["정리 문서 PDF", LINKS.tgPdf]] },
  { year: "2026", title: "ESG-DART 텍스트 분석", desc: "Kiwi·SBERT로 공시 텍스트를 정량화하고 KCGS 등급과의 연관성을 회귀로 8개 가설 검증.", links: [["GitHub", LINKS.esg]] },
  { year: "2026", title: "한국어 영화 리뷰 감성 분석", desc: "PeCab + TF-IDF 듀얼 피처, LR·ComplementNB 앙상블, MCC 기준 threshold 최적화.", links: [["GitHub", LINKS.movie]] },
  { year: "2026", title: "SSG 배송 경로 최적화", tag: "우수상", desc: "OR-Tools로 이동거리 34% 감소, 연 CO₂ 9.13톤 절감 정량화. ESG 마케팅 전략, 웹 배포. CEO.", links: [["사이트", LINKS.sgccSite], ["GitHub", LINKS.sgcc]] },
  { year: "2025", title: "Korean Sentiment Analysis, 오픈소스", desc: "HuggingFace 기반 한국어 감정 분석. 팀장.", links: [["GitHub", LINKS.oss]] },
  { year: "2025", title: "Regression · Classification", desc: "데이터마이닝 수업 회귀·분류 모델 비교와 해석.", links: [["GitHub · Regression", LINKS.regression], ["GitHub · Classification", LINKS.classification]] },
  { year: "2025", title: "Wine Quality Data Analysis", desc: "전처리·EDA·상관관계 분석.", links: [["GitHub", LINKS.wine]] },
  { year: "2024", title: "당근마켓 해외 진출 전략", desc: "교내 기업메이커 공모전. 시장 분석과 플랫폼 전략.", links: [["GitHub", LINKS.karrot]] },
];

const papers = [
  { year: "2026 여름 · FINDS Lab 연구인턴", title: "환율변동성의 수익률곡선 전달과 경기 예측력의 분리", tag: "KCI 게재 예정", desc: "원/달러 환율변동성이 국채 수익률곡선에 전달되는지, 그 전달이 장단기 금리차를 통제한 뒤에도 경기 수축 국면의 표본외 예측력으로 이어지는지를 2006~2026년 월별 자료로 검증. 표본내 전달과 표본외 예측력이 분리될 수 있음을 보였습니다.", links: [["논문 PDF", LINKS.fxPdf], ["FINDS Lab 연구실", LINKS.finds]] },
  { year: "2026.09 · The Journal of the Convergence on Culture Technology (JCCT) Vol.12 No.5, pp.191–199", title: "경영대학 대학생의 취업 시 기업 선택 요인에 관한 우선순위 분석: AHP 기법을 중심으로", tag: "KCI 등재", desc: "지도교수님·수강생과 공동 집필(공저). 기업 선택 요인을 재무 상태·기업 이미지 및 규모·복리후생·임금 4개 상위요인으로 구성하고 AHP로 상대적 중요도를 분석. 임금이 가장 높고, 하위요인은 급여체계·신입사원 초임·4대 보험 순으로 나타났습니다.", links: [["논문 PDF", LINKS.ahpPdf], ["DOI", LINKS.ahpDoi]] },
];

const goals = [
  "신구장·신생구단의 지역 상권 효과 연구 (DID) — 구장 반경 1km 상권 효과를 이중차분으로 추정하고 울산 웨일즈 효과를 예측",
  "KBO 데이터 기반 신규 야구 지표 — 세이버메트릭스를 응용한 평가 지표 설계·검증",
  "음성 인식 AI 비서 — 음성 인식, 자연어 이해, 음성 응답 흐름 구현",
];

// [제목, 연도, 링크들?]
const awards = {
  "공모전·수상": [
    ["꿈꾸는 기업메이커 SGCC — 우수상", "2026", [["사이트", LINKS.sgccSite], ["GitHub", LINKS.sgcc]]],
    ["KAI 항공우주논문상 — 심사중", "2026", [["공모전 안내", LINKS.kai]]],
    ["티쳐가드 — 교육부·KERIS, 미수상", "2026", [["GitHub", LINKS.teacherguard], ["배포 앱", LINKS.teacherguardApp]]],
    ["창원시 BI 프로젝트 공모전", "2025"],
    ["아르테크네 — 우수상", "2024"],
  ],
  "인턴·수료·자격": [
    ["FINDS Lab 학부 연구인턴 3기 수료", "2026", [["연구실", LINKS.finds], ["논문 PDF", LINKS.fxPdf]]],
    ["BDAI 데이터 분석 실전반 수료", "2026"],
    ["ADsP 데이터분석 준전문가", "2026"],
    ["Codeit 데이터 분석 과정 수료", "2024"],
  ],
  대외활동: [["Global AI Ambassador — 우수 활동자", ""], ["다문화·탈북 학생 멘토링 — 국어·수학", ""], ["주3만 프로그램 관리자 — 6개월", ""]],
  "학회·스터디": [["BDAI 12기 — 지표설계·고객분석", ""], ["퍼널 분석 스터디", ""]],
};

// 사진 주위에 흩뿌리는 작은 별: 활동·논문·수료·수상·연락 전부
const activityItems = [
  ...projects.map((p) => ({ cat: "프로젝트", name: p.title, detail: p.desc, links: p.links })),
  ...papers.map((p) => ({ cat: "논문", name: p.title, detail: `${p.tag} · ${p.year}`, links: p.links })),
  { cat: "인턴", name: "FINDS Lab 학부 연구인턴 3기", detail: "2026.06.28 ~ 08.31 수료 · 금융데이터인텔리전스 연구실", links: [["연구실", LINKS.finds]] },
  { cat: "수료", name: "BDAI 데이터 분석 실전반", detail: "지표설계 및 고객분석 · 2026.03 ~ 08 · AI 빅데이터 학회 B.D.A.I 12기" },
  { cat: "자격", name: "ADsP 데이터분석 준전문가", detail: "한국데이터산업진흥원 · 2026.02 취득" },
  { cat: "수료", name: "Codeit 데이터 분석 과정", detail: "코딩캠프 15기 · 7개 토픽 · 2024" },
  { cat: "수료", name: "NSI Global Leadership Challenge", detail: "2024" },
  { cat: "수료", name: "산림 빅데이터 교육", detail: "2024" },
  { cat: "수상", name: "아르테크네 2024 우수상", detail: "가천대학교 아르테크네 공모전 · CSO" },
  { cat: "수상", name: "꿈꾸는 기업메이커 SGCC 우수상", detail: "SSG 배송 경로 최적화·ESG 전략 · CEO · 2026", links: [["사이트", LINKS.sgccSite], ["GitHub", LINKS.sgcc]] },
  { cat: "공모전", name: "KAI 항공우주논문상 2026", detail: "논문 제출 · 심사 중", links: [["공모전 안내", LINKS.kai]] },
  { cat: "공모전", name: "티쳐가드 (교육부·KERIS)", detail: "기획·구현 · 미수상 · 2026", links: [["GitHub", LINKS.teacherguard], ["배포 앱", LINKS.teacherguardApp]] },
  { cat: "공모전", name: "창원시 BI 프로젝트 공모전", detail: "참여 · 2025" },
  { cat: "활동", name: "Global AI Ambassador", detail: "VANK · 홍보 및 정책 제안 · 우수 활동자" },
  { cat: "활동", name: "다문화·탈북 학생 멘토링", detail: "국어·수학 멘토" },
  { cat: "활동", name: "주3만 프로그램 관리자", detail: "참여자 20명 보고서 취합·주간 보고 · 6개월" },
  { cat: "활동", name: "캐치드림 진로탐색 프로젝트", detail: "참여" },
  { cat: "학회", name: "BDAI 12기", detail: "지표 설계 및 고객 분석 학습" },
  { cat: "스터디", name: "퍼널 분석 스터디", detail: "조원들과 퍼널 분석 학습" },
  { cat: "목표", name: "신구장·신생구단 상권 효과 연구 (DID)", detail: "2026 겨울 예정" },
  { cat: "목표", name: "KBO 신규 야구 지표 개발", detail: "2026 겨울 예정" },
  { cat: "목표", name: "음성 인식 AI 비서", detail: "2026 겨울 예정" },
  { cat: "연락", name: "yeahisme@gachon.ac.kr", detail: "학교 이메일", links: [["메일 보내기", "mailto:yeahisme@gachon.ac.kr"]] },
  { cat: "연락", name: "yeahisme0527@gmail.com", detail: "개인 이메일", links: [["메일 보내기", "mailto:yeahisme0527@gmail.com"]] },
  { cat: "연락", name: "github.com/yeahisme0527", detail: "GitHub", links: [["열기", "https://github.com/yeahisme0527"]] },
  { cat: "연락", name: "blog.naver.com/oh_yeahisme", detail: "블로그", links: [["열기", "https://blog.naver.com/oh_yeahisme"]] },
];

// 황금각으로 흩뿌리되, 가운데 사진과 섹션 별 근처는 비워둔다
const activityStars = (() => {
  const out = [];
  let i = 0;
  while (out.length < activityItems.length && i < 400) {
    const a = (i * 137.508 * Math.PI) / 180;
    const r = 17 + (i % 6) * 5.2;
    const x = 50 + r * Math.cos(a) * 1.05;
    const y = 50 + r * Math.sin(a) * 0.95;
    i += 1;
    if (x < 5 || x > 95 || y < 7 || y > 93) continue;
    const nearSection = sectionStars.some((s) => Math.hypot(s.x - x, s.y - y) < 11);
    const nearOther = out.some((o) => Math.hypot(o.x - x, o.y - y) < 6);
    if (nearSection || nearOther) continue;
    out.push({ ...activityItems[out.length], x: +x.toFixed(1), y: +y.toFixed(1) });
  }
  return out;
})();

// 전체 배경의 반짝이는 흰 별 (고정 위치, 서로 다른 속도로 반짝임)
const bgStars = Array.from({ length: 120 }, (_, i) => {
  const left = ((i * 37.7) % 100) + ((i * 13) % 7) * 0.13;
  const top = ((i * 53.3) % 100) + ((i * 11) % 5) * 0.17;
  const size = i % 9 === 0 ? 3 : i % 4 === 0 ? 2.2 : 1.3;
  return {
    left: +left.toFixed(2),
    top: +top.toFixed(2),
    size,
    big: size >= 2.2,
    sparkle: i % 17 === 0,
    d: 2.6 + ((i * 7) % 9) * 0.55,
    dl: ((i * 5) % 11) * 0.45,
  };
});

function BackButton({ onClick }) {
  return (
    <button className="back" onClick={onClick}>
      유니버스로 돌아가기
    </button>
  );
}

function Home({ go }) {
  const [open, setOpen] = useState(null);
  const pts = milestones.filter((m) => !m.dim).map((m) => `${m.x},${m.y}`).join(" ");
  const last = milestones[milestones.length - 2];
  const dimStar = milestones[milestones.length - 1];
  return (
    <>
      <div className="hero">
        <p className="eyebrow">Yeeun's cosmos</p>
        <h1>예은의 유니버스</h1>
        <p>{profile.tagline} 별을 선택해 들어가세요.</p>
      </div>

      <div className="map">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="rgba(255,255,255,.07)" strokeWidth=".25">
            <ellipse cx="50" cy="50" rx="18" ry="22" />
            <ellipse cx="50" cy="50" rx="34" ry="40" />
            <ellipse cx="50" cy="50" rx="50" ry="58" />
            <line x1="50" y1="0" x2="50" y2="100" />
            <line x1="0" y1="50" x2="100" y2="50" />
          </g>
          <g fill="none" stroke="rgba(255,255,255,.28)" strokeWidth=".35">
            {sectionStars.map((s) => (
              <line key={s.id} x1="50" y1="50" x2={s.x} y2={s.y} strokeDasharray={s.cls.includes("dim") ? "1 1" : undefined} stroke={s.cls.includes("dim") ? "rgba(255,255,255,.16)" : undefined} />
            ))}
            <line x1="22" y1="30" x2="42" y2="13" />
            <line x1="78" y1="26" x2="82" y2="68" />
          </g>
        </svg>
        <div className="me">
          <img src={profileImage} alt="" />
          <b>{profile.name}</b>
        </div>
        <div className="minis">
        {activityStars.map((s, i) => {
          const key = `a${i}`;
          return (
            <div
              key={key}
              className={`star mini${s.y < 40 ? " below" : ""}${s.x > 82 ? " edge-r" : s.x < 18 ? " edge-l" : ""}${open === key ? " open" : ""}`}
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              tabIndex={0}
              role="button"
              aria-expanded={open === key}
              aria-label={`${s.cat}: ${s.name}`}
              onClick={() => setOpen(open === key ? null : key)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === key ? null : key); } if (e.key === "Escape") setOpen(null); }}
              onBlur={() => setOpen((o) => (o === key ? null : o))}
            >
              <i />
              <div className="tip" role="tooltip">
                <em>{s.cat}</em>
                <b>{s.name}</b>
                {s.detail}
                {s.links && s.links.length > 0 && (
                  <div className="tip-links" onClick={(e) => e.stopPropagation()}>
                    {s.links.map(([label, href]) => (
                      <a key={href} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{label}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        </div>
        {sectionStars.map((s) => (
          <button key={s.id} className={`st ${s.cls}`} style={{ left: `${s.x}%`, top: `${s.y}%` }} onClick={() => go(s.id)}>
            <i />
            <span>
              <b>{s.title}</b>
              <small>{s.sub}</small>
            </span>
          </button>
        ))}
      </div>
      <p className="hint">큰 별은 섹션으로 들어가는 문, 작은 별은 올리거나 눌러보면 무엇인지 알려줍니다. 흐린 별은 아직 공개 전인 계획입니다.</p>

      <div className="const">
        <h4>예은 별자리</h4>
        <p>주요 활동과 수상을 시간순으로 이었어요. 큰 별은 수상과 논문, 흐린 별은 심사 중</p>
        <div className="sky">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline points={pts} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth=".5" />
            <line x1={last.x} y1={last.y} x2={dimStar.x} y2={dimStar.y} stroke="rgba(255,255,255,.18)" strokeWidth=".5" strokeDasharray="1.2 1.2" />
          </svg>
          {milestones.map((m, i) => (
            <div
              key={m.what}
              className={`star${m.big ? " big" : ""}${m.dim ? " dim" : ""}${m.y < 45 ? " below" : ""}${m.x > 80 ? " edge-r" : m.x < 20 ? " edge-l" : ""}${open === i ? " open" : ""}`}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              tabIndex={0}
              role="button"
              aria-expanded={open === i}
              aria-label={`${m.when} ${m.what}. ${m.detail}`}
              onClick={() => setOpen(open === i ? null : i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === i ? null : i); } if (e.key === "Escape") setOpen(null); }}
              onBlur={() => setOpen((o) => (o === i ? null : o))}
            >
              <i />
              <span>
                <em>{m.when}</em>
                {m.what}
              </span>
              <div className="tip" role="tooltip">
                <b>{m.what}</b>
                <em>{m.when}</em>
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="log">
        <div><div className="n">4.37<small>/ 4.5</small></div><div className="l">전체 평점, 최고 4.5</div></div>
        <div><div className="n">2<small>편</small></div><div className="l">KCI 등재 논문</div></div>
        <div><div className="n">9<small>개</small></div><div className="l">프로젝트</div></div>
        <div><div className="n">2<small>회</small></div><div className="l">공모전 우수상</div></div>
      </div>
    </>
  );
}

function About({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>소개</h2>
      <p className="lead">Python·SQL 분석 프로젝트, 공모전, 금융 연구인턴을 거치며 전처리부터 모델링·해석·배포까지 직접 수행했습니다. 팀장·CEO로 프로젝트를 이끈 경험이 있습니다.</p>
      <div className="stats">
        <div><div className="n">4.37</div><div className="l">전체 평점 / 4.5</div></div>
        <div><div className="n">2</div><div className="l">KCI 등재 논문</div></div>
        <div><div className="n">9</div><div className="l">프로젝트</div></div>
      </div>
      <div className="bars">
        {gpa.map((g) => (
          <div key={g.term}>
            <b>{g.v.toFixed(2)}</b>
            <i style={{ height: `${((g.v - 3.5) / 1) * 100}%` }} />
            {g.term}
          </div>
        ))}
      </div>
      <div className="two">
        <div>
          <h4>다루는 도구</h4>
          <ul className="ls"><li>Python (Pandas, scikit-learn)</li><li>SQL</li><li>Streamlit, HTML</li><li>HuggingFace, Google Colab</li></ul>
        </div>
        <div>
          <h4>관심 분야</h4>
          <ul className="ls"><li>데이터 기반 지표 설계</li><li>금융 시계열, 인과추론</li><li>비즈니스 애널리틱스</li><li>백엔드 개발</li></ul>
        </div>
      </div>
    </div>
  );
}

function Cards({ items }) {
  return (
    <div className="cards">
      {items.map((p) => (
        <div key={p.title} className={`card${p.wide ? " wide" : ""}`}>
          <div className="y">{p.year}</div>
          <h3>
            {p.title}
            {p.tag && <span className="tag">{p.tag}</span>}
          </h3>
          <p>{p.desc}</p>
          {p.links && p.links.length > 0 && (
            <div className="links">
              {p.links.map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Projects({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>프로젝트</h2>
      <p className="lead">분석에서 끝내지 않고 결과물을 만듭니다.</p>
      <Cards items={projects} />
    </div>
  );
}

function Research({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>논문</h2>
      <p className="lead">KCI 등재 논문 2편.</p>
      <Cards items={papers.map((p) => ({ ...p, wide: true }))} />
    </div>
  );
}

function Goals({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>다음 탐사</h2>
      <p className="lead">2026 겨울에 진행할 연구와 개발입니다.</p>
      <ul className="ls" style={{ marginTop: 18 }}>
        {goals.map((g) => (
          <li key={g} className="todo">{g}<span>예정</span></li>
        ))}
      </ul>
    </div>
  );
}

function Awards({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>기록</h2>
      <p className="lead">공모전, 인턴, 학회, 대외활동.</p>
      <div className="two">
        {Object.entries(awards).map(([group, rows]) => (
          <div key={group}>
            <h4>{group}</h4>
            <ul className="ls">
              {rows.map(([t, y, links]) => (
                <li key={t}>
                  <div>
                    {t}
                    {links && links.length > 0 && (
                      <div className="mini-links">
                        {links.map(([label, href]) => (
                          <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                  {y && <span>{y}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact({ go }) {
  return (
    <div className="landed">
      <BackButton onClick={() => go("home")} />
      <h2>연락</h2>
      <p className="lead">편하게 연락 주세요.</p>
      <div className="cards">
        <div className="card"><div className="y">학교 이메일</div><h3>{profile.email}</h3><div className="links"><a href={`mailto:${profile.email}`}>메일 보내기</a></div></div>
        <div className="card"><div className="y">개인 이메일</div><h3>{profile.personalEmail}</h3><div className="links"><a href={`mailto:${profile.personalEmail}`}>메일 보내기</a></div></div>
        <div className="card"><div className="y">GitHub</div><h3>github.com/yeahisme0527</h3><div className="links"><a href={profile.github} target="_blank" rel="noreferrer">열기</a></div></div>
        <div className="card"><div className="y">블로그</div><h3>blog.naver.com/oh_yeahisme</h3><div className="links"><a href={profile.blog} target="_blank" rel="noreferrer">열기</a><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a></div></div>
      </div>
    </div>
  );
}

const PAGES = { home: Home, about: About, projects: Projects, research: Research, goals: Goals, awards: Awards, contact: Contact };

export default function App() {
  const [page, setPage] = useState(() => {
    const h = window.location.hash.replace("#", "");
    return PAGES[h] ? h : "home";
  });

  const go = (id) => {
    setPage(id);
    window.location.hash = id === "home" ? "" : id;
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = page === "home" ? "Yeeun universe — 황예은" : `${page} — Yeeun universe`;
  }, [page]);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      setPage(PAGES[h] ? h : "home");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = PAGES[page];

  return (
    <>
      <div className="bg" aria-hidden="true">
        {bgStars.map((s, i) => (
          <i
            key={i}
            className={`${s.big ? "b" : ""}${s.sparkle ? " x" : ""}`}
            style={{ left: `${s.left}%`, top: `${s.top}%`, "--s": `${s.size}px`, "--d": `${s.d}s`, "--dl": `${s.dl}s` }}
          />
        ))}
      </div>
      <div className="wrap">
        <div className="top">
          <div className="who">
            <button onClick={() => go("home")} aria-label="홈으로">
              <img src={profileImage} alt="황예은 프로필" />
              <div>
                <b>{profile.name}</b>
                <span>{profile.school}</span>
              </div>
            </button>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <Page go={go} />

        <p className="foot">© 2026 황예은 · Yeeun universe</p>
      </div>
    </>
  );
}
