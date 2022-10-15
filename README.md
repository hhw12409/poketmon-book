# Poketmon book

```bash
└─ src
   ├─ apis
   ├─ atoms
   ├─ components
   │   ├─ ErrorMessage
   │   ├─ GetForm
   │   ├─ Header
   │   ├─ Loading
   │   ├─ PokeInfo
   ├─ pages
   │   ├─ Home.tsx
   │   ├─ NotFound.tsx
```

## 사용된 스택 및 라이브러리

- typescript
  - interface를 이용하여서 타입을 체크 하였습니다.
  - strict모드를 활성화하여서 타입 검사를 엄격하게 하였습니다.
- axios
  - axios를 이용하여 비동기적으로 api를 호출해주었습니다.
  - 동기식으로 표현하기 위해서 async/await을 사용해주었습니다.
- react-query
  - react-query를 이용하여서 api를 사용하였습니다.
  - unique key를 활용하여서 특정 id에 맞는 api를 사용하였습니다.
  - enabled를 이용해 해당 값의 변화를 감지해도록 하였습니다.
  - onSuccess, onError를 이용해 쿼리에 대한 성공, 실패 전처리를 하였습니다.
- recoil
  - recoil을 이용해 전역상태관리를 하였습니다.
  - atom을 이용하여서 전역변수를 만들어 주었습니다.
  - useRecoilState를 이용한 전역변수호출과 상태 변경을 해주었습니다.
- styled-components
  - 재사용가능한 컴포넌트를 만들어서 생산성있는 스타일링을 하였습니다.
  - SASS의 중첩 스코프를 이용하여서 하위 컴포넌트에 스타일을 적용해주었습니다. 해당 방법으로 불필요한 컴포넌트 생성을 방지 하였습니다.
  - createGlobalStyle를 이용하여서 글로벌 스타일을 만들어주었으며 글로벌 스타일안에 reset를 넣어 기본 스타일을 제거해주었습니다.
- styled-reset
  - 브라우저마다 기본적으로 설치되어 있는 스타일을 제거해주었습니다.
- eslint
  - eslint를 이용하여서 코드를 분석해 문법적인 오류나 안티 패턴을 찾아주고 일관된 코드 스타일을 유지할 수 있도록 하였습니다.
  - eslint-config-prettier를 이용하여서 prettier와의 충돌을 막았습니다.
  - eslint-plugin-prettier를 이용하여서 prettier의 규칠을 eslint에 적용하게끔 구현하였습니다.
- prettier
  - prettier를 이용하여서 코드 스타일을 관리하였습니다.

## 페이지 동작 영상

https://user-images.githubusercontent.com/85764782/195992750-032f7c2a-43d1-4c01-9948-f8b8c5c235ae.mov
