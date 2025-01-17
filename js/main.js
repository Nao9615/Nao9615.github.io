// 高さをデバイスの画面ピッタリに
const fullHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', fullHeight);
fullHeight();

// モードに応じてテーマを更新する関数
function updateTheme(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode-settings', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('dark-mode-settings', 'light');
  }
}

const themeBtn = document.querySelector("#color-theme-btn");
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// 初期設定をチェックして適用
const savedMode = localStorage.getItem('dark-mode-settings');
if (savedMode === 'dark' || (savedMode === null && darkModeMediaQuery.matches)) {
  updateTheme(true);
  themeBtn.checked = true; // チェックボックスを使用している場合、チェックを入れる
} else {
  updateTheme(false);
  themeBtn.checked = false;
}

// ユーザーの設定変更をリッスン
darkModeMediaQuery.addEventListener('change', (e) => {
  updateTheme(e.matches);
});

// チェックボックスの変更イベント
themeBtn.addEventListener("change", () => {
  updateTheme(themeBtn.checked);
});

// 言語を切り替える
document.getElementById("Lang-En-Ja").addEventListener("change", function() {
  var en = document.querySelectorAll(".is-en");
  var ja = document.querySelectorAll(".is-ja");

  if (this.checked) {
    // グループ1を非表示にし、グループ2を表示
    en.forEach(function(element) {
        element.classList.add("hidden");
    });
    ja.forEach(function(element) {
        element.classList.remove("hidden");
    });
  } else {
    // グループ1を表示し、グループ2を非表示
    en.forEach(function(element) {
        element.classList.remove("hidden");
    });
    ja.forEach(function(element) {
        element.classList.add("hidden");
    });
  }
});