## CSS 애니메이션이란

- CSS 애니메이션은 프로세서 및 메모리가 부족한 JavaScript 또는 Flash를 사용하지 않고도 
특정 HTML 요소에 애니메이션을 적용하는 방법입니다. 

- 변경할 수있는 CSS 속성의 수 또는 빈도에는 제한이 없습니다.

- 애니메이션은 애니메이션의 키 프레임을 지정하여 시작됩니다.
이 키 프레임에는 요소에 적용될 스타일이 포함되어 있습니다.

# Animation

`animation` 속성도 `transition`과 유사하게 단일속성과 속기형으로 작성할 수 있다.

animation은 `animation-*` 속성과 애니메이션의 중간상태를 정의할 수 있는 `@keyframes`으로 
구성되어 있다.


🌈 먼저 animation 의 단일 속성에 대해 간단히 살펴봅니다.

`animation-name` : 애니메이션의 중간 상태를 지정하기 위한 이름을 정의합니다. 중간 상태는 `@keyframes` 규칙을 이용하여 기술합니다.
`animation-duration` : 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
`animation-delay` :엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.
`animation-direction` : 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.
`animation-iteration-count` : 애니메이션이 몇 번 반복될지 지정합니다. `infinite` 로 지정하여 무한히 반복할 수 있습니다.
`animation-play-state` : 애니메이션을 멈추거나 다시 시작할 수 있습니다.
`animation-timing-function` : 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.
`animation-fill-mode` : 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

>단일속성 : 
object {  
animation-name: 1s;  
animation-duration: 2s;  
animation-delay: 1s;  
animation-direction: alternate;  
animation-iteration-count: 3;  
animation-play-state: paused;  
animation-timing-function: 1s;  
animation-fill-mode: both;  
}    
/* 속기형 */  
animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state > [, ...]


### `animation-name`     
`name`은 `@keyframes` 속성에서 설정한 애니메이션의 이름이다. 이름을 설정해야 애니메이션을 재생할 수 있습니다.  
즉, 이름을 정의해야 애니메이션을 재생(호출)할 수 있습니다.

> 애니메이션 이름을 `none`으로 작성하면 애니메이션을 재생하지 않는다.  
> `none`이라는 이름의 `@keyframe` 속성이 있어도 에니메이션을 재생하지 않는다.
 
ex) 🌏 예시
```css
.classname {
    animation-name: jaehee;
}

/* 키프레임 이름 = 애니메이션 이름 */
@-webkit-keyframes jaehee {
    0% {
        left:100px;
    }
    100% {
        left:300px;
    }
}
```

### `animation-duration`  
`animation-duration` 은 애니메이션을 한 번 재생하는 데 걸리는 시간을 설정할 수 있으며, `transition-duration` 과 유사합니다  
`animation-duration` 이 0이면 애니메이션은 재생되지 않습니다.

### `animation-delay` 
애니메이션 시작을 지연할 시간을 설정하는것

- `0` : 속성을 적용하자마자 애니메이션을 시작한다(기본값)
- `now` : 속성을 적용하자마자 애니메이션을 시작한다. 0이랑 같다
- `숫자와 단위` : 설정한 시간이 지난 뒤에 애니메이션을 시작한다. 사용할수 있는 단위는 초(s)와 밀리초(ms)이다.
값이 양수면 속성을 적용한 순간부터 시간을 계산해 애니메이션 재생을 지연한다.  
값이 음수면 속성을 적용한 순간바로 애니메이션을 실행하지만, 지정한 시간이 지난뒤의 장면부터 애니메이션을 재생한다.  
예를 들어, 값이 ‘-1s’면 1초가 지난 뒤의 장면부터 애니메이션을 재생한다.

### `animation-direction`
`animation-direction` 은 애니메이션 재생 방향을 정의하는 속성입니다.
>`@keyframes` 속성의 from 에 설정한 스타일에서 to에 설정한 스타일로 재생하는 것이 순방향이고, to에 설정한 스타일에서 from 에 설정한 스타일로 재생하는 것이 역방향입니다.

- `normal` : 순방향 재생(기본값), 재생이 한번 끝나면 첫 번째 프레임부터 다시 시작
- `alternate` : 순방형으로 시작해, 역방향으로 번갈아 재생
- `reverse` : 역방향 재생, 재생이 한번 끝나면 첫 번째 프레임부터 다시 시작
- `alternate-reverse` : 역방향으로 애니메이션 시작해, 순방향으로 번갈아 재생

> ALERT  
애니메이션이 역방향으로 재생될 때는 `animation-timing-function` 속성과 관련된 효과도 반대로 적용된다
예를들어, 서서히 시작했다가 빠르게 종료하는 `animation-timing-function: ease-in`을 적용한 애니메이션을  
역방향으로 재생하면 빠르게 싲가했다가 서서히 종료하게 된다.

### `animation-iteration-count`
`animation-iteration-count`은 애니메이션을 재생하는 횟수를 정의하는 속성

- `숫자` : 기본값은 1이며, 설정한 횟수만큼 애니메이션을 재생
- `infinite : 애니메이션을 무한으로 반복합니다

### `animation-play-state`
`animation-play-state`는 애니메이션 재생 여부를 정의하는 속성입니다.

- `running` : 재생
- `paused` : 정지

### `animation-timing-function`
애니메이션의 키프레임 사이의 재생 속도를 조절하는 속성으로 재생하는 동안 단계별 재생속도를 설정

### `@keyframes과 animation 속기형`
애니메이션을 재생할 각 프레임의 스타일을 정의하는 것으로 from 속성이나 0% 속성에서 설정한
스타일에서 출발해 to속성이나 100% 속성에 설정한 스타일로 점차 바뀌면서 애니메이션이 재생됩니다

🌈 Syntax(문법)
```css
@keyframes animationName { 
    from { 
        css-styles; 
    } 
    to { 
        css-styles; 
    } 
}
```

- 0%와 100% 사이에는 여러개의 중간 값(%)을 설정해 프레임을 작성할 수 있다.
```css
@keyframes animationName { 
    0% { 
        css-styles; 
    }
    25% {
        css-styles;
    }
    50% {
        css-styles;
    }
    100% { 
        css-styles; 
    } 
}
```

> transition vs animation 차이  
양쪽다 플래시의 기술이나 자바스크립트의 도움 없이 요소에서 직접 애니메이션 효과를 적용하는 속성이다  
`transition` 속성은 요소의 상태가 변해야 애니메이션을 실행한다.  
`animation` 속성은 요소의 모양과 동작을 키프레임 단위로 변경할 수 있다. 키프레임 동작은 재생 횟수, 재생 방향등 여러 애니메이션 속성으로 제어할 수 있다.
