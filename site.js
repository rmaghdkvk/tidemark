// Tidemark 웹페이지 설정. 아래 두 줄만 바꾸면 모든 페이지에 반영됩니다.
var SUPPORT_EMAIL = "rmaghdkvk123@naver.com";
var APP_STORE_URL = "";  // 출시 후 App Store 링크. 비워 두면 다운로드 버튼이 숨겨집니다.

document.querySelectorAll("a.mail").forEach(function (a) { a.href = "mailto:" + SUPPORT_EMAIL; a.textContent = SUPPORT_EMAIL; });
document.querySelectorAll("a.appstore").forEach(function (a) { if (APP_STORE_URL) { a.href = APP_STORE_URL; a.hidden = false; } });
