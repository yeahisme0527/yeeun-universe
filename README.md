# Yeeun universe

황예은 포트폴리오 — 우주 컨셉의 클릭형 사이트.
가운데 예은을 중심으로 섹션이 별로 이어지고, 주요 업적은 "예은 별자리"로 시간순으로 연결됩니다.

- 배포: https://yeahisme0527.github.io/yeeun-universe/
- 스택: React 19 · Vite 7 · 순수 CSS (별 반짝임 애니메이션, 반응형, 키보드 접근성, reduced-motion 대응)

## 실행

```bash
npm install
npm run dev      # 로컬 미리보기
npm run deploy   # 빌드 후 GitHub Pages(gh-pages 브랜치)로 배포
```

## 구조

```
src/
├── App.jsx        ← 모든 내용(소개·프로젝트·논문·기록·목표·연락)과 페이지 전환
├── universe.css   ← 우주 테마 스타일
└── assets/profile.png
```

내용을 수정하려면 `src/App.jsx` 상단의 `profile`, `gpa`, `milestones`, `projects`, `papers`, `goals`, `awards` 배열만 고치면 됩니다.
