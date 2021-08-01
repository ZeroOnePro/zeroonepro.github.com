var store = [{
        "title": "할 일 목록",
        "excerpt":"   notion에서 블로그로 이전 중 Notion   Running      React   Rails   NestJs   Jeklly github.io notion 연동   PS   Wait      Crawling   Ready      CS review   CI / CD   notion webhook 하나 만들까? 일일이 하는거 귀찮   New   Terminal  ","categories": ["To do"],
        "tags": ["To do","Road map"],
        "url": "/to%20do/%ED%95%A0-%EC%9D%BC-%EB%AA%A9%EB%A1%9D/",
        "teaser": null
      },{
        "title": "Jekyll 블로그 세팅하기",
        "excerpt":"How to Run? 1 $ jekyll serve --livereload # hot-reload option step by step 최상위는 index.html _data 디렉토리의 navigation.yml에서 네비게이션 바를 설정할 수 있다. # main links main: - title: \"연도별 포스트\" url: /posts/ - title: \"카테고리\" url: /categories/ - title: \"태그\" url: /tags/ _pages 디렉토리에서 위에서 설정한 navigation url...","categories": ["Blog"],
        "tags": ["blog","jekyll"],
        "url": "/blog/Jekyll-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "개발 환경 설정",
        "excerpt":"1.4 개발 환경 설정하기 Node 설치 # mac $ brew install node # linux $ sudo apt-get update $ sudo apt-get install -y build-essential $ sudo apt-get intall curl $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -- $ sudo apt-get install -y nodejs 설치 확인 $ node -v v16.4.1...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95/",
        "teaser": null
      },{
        "title": "서버 외의 노드",
        "excerpt":"1.3 서버 외의 노드 처음에는 노드를 대부분 서버로 사용했지만, 노드는 자바스크립트 런타임이므로 용도가 서버에만 한정 되지 않는다. 사용범위가 점점 늘어나서 노드는 웹, 모바일, 데스크톱 애플리케이션 개발에도 사용되기 시작하였다. 노드 기반으로 돌아가는 대표적인 웹 프레임워크로는 앵귤러, 리액트, 리액트 네이티브, 뷰 등이 있다. 데스크톱 개발 도구로는 일렉트론이 대표적인데, 이걸로 만들어진 프로그램으로는 vscode,...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%EC%84%9C%EB%B2%84-%EC%99%B8%EC%9D%98-%EB%85%B8%EB%93%9C/",
        "teaser": null
      },{
        "title": "서버로서의 노드",
        "excerpt":"1.2 서버로서의 노드 노드는 기본적으로 싱글 스레드, 논 블로킹 모델을 사용한다.(js의 특성이기도 하다) 노드 서버 또한 동일한 모델일 수 밖에 없다. 따라서 노드 서버의 장단점은 싱글 스레드, 논 블로킹 모델의 장단점과 크게 다르지 않다. 서버에는 기본적으로 I / O 요청이 많이 발생하므로, I / O 처리를 잘하는 노드를 서버로 사용하면...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%EC%84%9C%EB%B2%84%EB%A1%9C%EC%84%9C%EC%9D%98-%EB%85%B8%EB%93%9C/",
        "teaser": null
      },{
        "title": "참고할 만한 사이트 모음",
        "excerpt":"1.5 참고할 만한 사이트 모음      노드 공식 사이트: https://nodejs.org/ko   노드 공식 사이트의 가이드: https://nodejs.org/ko/docs/guides/   노드에 대한 전반적인 설명: https://nodejs.dev/   이벤트 루프 설명: https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/   이벤트 루프에 대한 시각적 설명: http://latentflip.com/loupe  ","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%EC%B0%B8%EA%B3%A0%ED%95%A0-%EB%A7%8C%ED%95%9C-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%AA%A8%EC%9D%8C/",
        "teaser": null
      },{
        "title": "핵심 개념 이해하기",
        "excerpt":"1.1 핵심 개념 이해하기 1.1.1 정의 Node.js는 chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다. Node.js는 이벤트 기반, 논 블로킹 I / O 모델을 사용해 가볍고 효율적이다. 자바스크립트 엔진 자바스크립트 엔진(JavaScript engine)은 자바스크립트 코드를 실행하는 프로그램 또는 인터프리터이다. 자바스크립트 엔진은 전통적인 인터프리터일 수도 있고, 특정한 방식으로 바이트코드로 JIT 컴파일을 할 수...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "async await",
        "excerpt":"2.1.8 async / await promise가 콜백 지옥을 해결해줬지만 여전히 코드는 장황하다. then과 catch가 계속 반복되기 때문이다. async / await 문법은 프로미스를 사용한 코드를 한 번 더 깔끔하게 줄여줄 수 있다. const findAndSaveUser = (Users) =&gt; { Users.findOne({}) .then((user) =&gt; { user.name = 'you'; return user.save(); // 이는 프로미스 객체를 리턴해야...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/aysnc-await/",
        "teaser": null
      },{
        "title": "프로미스",
        "excerpt":"2.1.7 프로미스 자바스크립트와 노드에서는 주로 비동기를 접한다. 특히 이벤트 리스너를 사용할 때 콜백 함수를 자주 사용한다. ES6 부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스기반으로 재구성되며, 악명 높은 콜백지옥현상을 극복했다는 평가를 받고 있다. 프로미스는 반드시 알아두자. 프로미스는 다음과 같은 규칙이 있다. 먼저 프로미스 객체를 생성해야 한다. const condition = true; const...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4/",
        "teaser": null
      },{
        "title": "프론트엔드 자바스크립트",
        "excerpt":"2.2 프론트엔드 자바스크립트 2.2.1 AJAX Asynchronous Javascript And Xml는 비동기적 웹 서비스를 개발할 때 사용하는 기법이다. 이름에 XML이 들어 있지만 꼭 이것을 사용해야 하는 것은 아니며, 요즘에는 JSON을 많이 사용한다. 쉽게 말해 페이지 이동 없이 서버에 요청을 보내고 응답을 받는 기술이다. 웹 사이트 중 페이지 전환 없이 새로운 데이터를 불러오는...","categories": ["Node.js"],
        "tags": ["Node.js","theory"],
        "url": "/node.js/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/",
        "teaser": null
      }]
