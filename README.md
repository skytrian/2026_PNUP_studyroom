# MedChem Study - PNUP / PNUP Study Hub

부산대학교 약학대학 학습용 GitHub Pages입니다. 면역학과 의약화학 학습 페이지를 한 곳에서 제공합니다.

## 학습 페이지
- **Study Hub:** https://skytrian.github.io/2026_PNUP_studyroom/
- **면역학:** https://skytrian.github.io/2026_PNUP_studyroom/immunology.html
- **의약화학:** https://skytrian.github.io/2026_PNUP_studyroom/chapters.html

## 주요 기능
- 면역학: Chapter 요약, 단답형 암기 카드, 별표 저장, 복습
- 의약화학: Chapter 18–26 구조 기반 퀴즈, 단계별 학습, 약물 도감·SAR, 약물별 표적·MOA·용도·구조 암기 단서, 챕터별 비교 노트와 기출 핵심 포인트
- 학습 기록은 브라우저의 localStorage에 저장되며 과목별로 분리됩니다.

## 버전 규칙
페이지 버전은 `YYYY.MM.DD.MAJOR.MINOR` 형식을 사용합니다.
- `YYYY.MM.DD`: 마지막 배포 날짜
- `MAJOR`: 호환성이 깨지는 변경 또는 큰 구조 개편
- `MINOR`: 기능 추가·오류 수정 등 일반 업데이트

현재 의약화학 버전은 `2026.10.14.1.5`입니다. Chapter 18–26의 기출 핵심 포인트와 챕터별 비교 노트를 보강했으며, 페이지 코드를 수정해 배포할 때마다 해당 페이지의 버전 상수와 버전 JSON 파일을 함께 갱신합니다. 의약화학은 `version.json`, 면역학은 `immunology-version.json`을 기준으로 버전을 확인합니다. 버전 확인 요청에는 캐시 방지 쿼리를 사용하고, 새 버전이 감지되면 버전이 포함된 URL로 페이지를 다시 엽니다.

## 배포
GitHub Pages는 저장소의 Pages 설정 및 workflow를 통해 배포됩니다. 배포 직후 CDN 반영까지 잠시 시간이 걸릴 수 있습니다.

## 주의
학습용 자료이며 실제 처방·투약 판단의 근거로 사용하지 마세요.
