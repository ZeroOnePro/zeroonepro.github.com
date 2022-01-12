---
title: Jekyll wide-page
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
popular: true
categories:
  - Blog
toc: true
toc_sticky: true
toc_label: 목차
description: Jekyll blog setting
tags: [blog, jekyll]
meta_keywords: 깃블로그, GitBlog, GitHub블로그, minimal-mistakes, Jekyll
---

## wide-page

+ minimal mistakes를 사용하다보니 콘텐츠가 보여지는 영역의 너비가 너무 좁다고 느낌
+ minimal mistakes 자체에서 wide page를 지원해줍니다.
+ [공식 문서](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#wide-page)
+ 하지만 이런 경우 toc이 상단에 고정되므로 이것을 쓰기에는 문제가 있다.

## width 조절

+ github.io/_sass 폴더/minimal-mistakes/_variables.scss
+ 기본 세팅 값 주석 처리

```css
/*
   Grid
   ========================================================================== */

  $right-sidebar-width-narrow: 100px !default;    // default 200px
  $right-sidebar-width: 200px !default;           // default 300px
  $right-sidebar-width-wide: 250px !default;      // default 400px
```

## font 사이즈 조절

+ font사이즈도 너무 크다고 생각되어 크기를 줄였습니다.
+ github.io/_sass/minimal-mistakes/_reset.scss

```css

  font-size: 16px;                    // Default 16px;

  @include breakpoint($medium) {
    font-size: 16px;                  // Default 18px;
  }

  @include breakpoint($large) {
    font-size: 16px;                  // Default 20px;
  }

  @include breakpoint($x-large) {
    font-size: 16px;                  // Default 22px;
  }

```

끄읏!