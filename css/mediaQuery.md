
# 미디어쿼리

###미디어 쿼리를 사용해서 css에 적용하는 방법

1. HTML의 HEAD의 link태그의 media속성에 지정하기
```angular2html
<link href="css/common.css" rel="stylesheet" type="text/css" media="screen and (min-width:0px) and (max-width:480px)">
```

2. css파일내에서 @media 지정하기
```css
@media all and (min-width:480px) { ... }
```
3.  media query를 설정한 파일을 css파일 내에서 import 해서 적용시켜주는 방법

```css
/* common.css */

@import "../media.css";
/* media file */
@media screen and (min-width:768px) { ... }
```
## 미디어 타입 ( medai type )

1. all : 전부
2. screen : 스크린 화면
3. print : 프린터
4. tv : 텔레비전


## 미디어 쿼리 기본적 설정 및 지정 방법

```css
@media (min-width:480px) { ... }

/* 또는 */
@media screen and (max-width:480px) { ... }

```
@media라고 먼저 기술을 해주고 타입 혹은 넓이를 and를 사용해서 연결을 시켜주면 됩니다. 

그리고 넓이를 지정해 줄 때 괄호 안에 min-width 혹은 max-width를 해주게 됩니다.


#### 🧩 480px에서 768px까지 넓이의 미디어 타입
```css
@media screen and (min-width:480px) and (max-width:768px) [ ... }
```

## 미디어 쿼리 속성
- max-width : 뷰 영역에서의 최대넓이. 즉 지정한 사이즈보다 작을 경우 적용
- min-width : 뷰영역에서의 최소 넓이. 즉 지정한 사이즈보다 넓은 경우 적용
- max-device-width : 디바이스 사이즈의 최대 넓이. 이 사이즈보다 작은 경우 적용
- min-device-width : 디바이스 사이즈의 최소 넓이. 이 사이즈보다 넓을 경우 적용
- orientation : 세로 길이 혹은 가로길이의 둘 중 하나로 기준을 적용
- device-pixel-ratio : 디바이스의 해상도를 기준으로 적용