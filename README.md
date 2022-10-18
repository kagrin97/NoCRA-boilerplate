## 기술 스택

<div style='display:flex'> 
  <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white" />
  <img src="https://img.shields.io/badge/RTL-E9113B.svg?style=for-the-badge&logo=RTL&logoColor=white" />
  <img src="https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white" />
  <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## 프로젝트 설명

- React를 `CRA없이` typescript로 구현합니다. 

- webpack으로 `dev, prod`로 나누어서 실행가능합니다.

- `eslint, prettier`로 코드에 통일성을 주며 `husky`로 커밋전 prettier를 적용하고 푸쉬전 eslint를 포맷팅합니다.

- jest가 돌아갈수 있도록 초기 설정을 구현했습니다. `Home.test.js 기본 테스트 코드 작성완료`
  - https://github.com/kagrin97/NoCRA-configKit/blob/45adc546ca411d20ce460e303d26ff51ec20dd1b/src/pages/Home/Home.test.js#L1-L13
  
- storybook이 `styled-components를 인식할수 있도록` 초기 설정을 완료했습니다.
