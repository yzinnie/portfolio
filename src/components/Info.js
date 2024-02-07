import { useState } from 'react';

const Info = () => {
  return (
    <div className="Info">
      <div>
        <ul>
          <li>portfolio</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p>산책 만족도를 위해 항상 체크하는 것들을 한 번에 확인하는 공간</p>
            <a href="https://san-check.web.app/">https://san-check.web.app/</a>
            <br />
            <p>
              프로젝트 소개 <br />
              <br />
              JavaScript와 React, OPEN API, REST API를 사용하여 산책에 필요한
              정보를 제공하는 기능을 구현한 프로젝트
              <br />
              개인 프로젝트로 진행했습니다.
              <br />
              <br />
              카카오의 지도를 사용하기 위한 MAP API와 Geolocation API를
              사용하면서 API에 대해 깊게 탐구하는 경험이 되었습니다. <br />
              openweathermap API와 한국환경공단에서 제공하는 실시간 미세먼지
              정보로 날씨와 미세먼지 데이터를 받아올 수 있었고,
              <br />
              미세먼지를 현재 위치의 데이터로 받아오기 위해 Geolocation API의
              getCurrentPosition 함수와 카카오의 REST API로 좌표를 변환하여
              행정구역의 정보를 받아 사용했습니다.
              <br />
              쿼리 정보로 검색하여 카카오의 블로그 글을 받아오는 REST API로
              반려동물에 대한 글을 제공합니다.
            </p>
            api
            <br />
            kakao <br /> airkorea <br />
            openweathermap
            <br />
            geolocation
            <br />
            javascript
            <br />
            react
            <br />
            npm
            <br />
            <a href="https://github.com/yzinnie/SAN-CHECK">github</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <br />
            How do you feel today
            <br />
            <a href="https://yzinnie-react-project.web.app/">
              url ---- °* emotion diary
            </a>
            <p>
              프로젝트 소개
              <br />
              <br />
              JavaScript와 React를 사용하여 오늘의 기분과 함께 일기를 작성,
              삭제, 수정하는 기능 구현
              <br />
              개인 프로젝트로 진행했습니다.
              <br />
              <br />
              리액트의 hooks를 사용하며 익히기 위해 시작했던 프로젝트입니다.
              <br />
              최적화를 위한 Memoization Hooks인 useMemo와 React.memo,
              useCallback을 적용 해보면서
              <br />
              리렌더링을 최소화하여 성능이 최적화되는 것을..................
            </p>
            localstorage
            <br />
            javascript
            <br />
            react
            <br />
            npm
            <br />
            <a href="https://github.com/yzinnie/Diary-Of-Emotions">github</a>
          </li>
        </ul>
      </div>
      <div>
        {' '}
        <ul>
          <li>
            <br />
            to do list on your dashboard ⁕
            <br />
            <a href="https://yzinnie.github.io/TODOLIST/">
              URL ---- °* todo: write a to-do
            </a>
            <br />
            localstorage
            <br />
            <a href="https://github.com/yzinnie/TODOLIST">github</a>
            <br />
            javascript
            <br />
            openweathermap API
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            For Our Earth
            <br />
            <a href="https://www.figma.com/file/HXwuEztiFI2R5wGor640ul/OH-RECYCLE?type=design&node-id=0%3A1&mode=design&t=tcaLsjj0rkUtao9o-1">
              figma project
            </a>
          </li>
          <li>
            portfolio
            <br />
            <a href="https://portfolio-jj.web.app/">This page</a>
            <br />
            <a href="https://github.com/yzinnie/portfolio">github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Info;
