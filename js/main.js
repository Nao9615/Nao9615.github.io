// 高さをデバイスの画面ピッタリに
const fullHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("resize", fullHeight);
fullHeight();

// カラーテーマ
const themeBtn = document.querySelector("#color-theme-btn");
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// モードに応じてテーマを更新
function updateTheme(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode-settings", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("dark-mode-settings", "light");
  }
}

const savedMode = localStorage.getItem("dark-mode-settings");
if (
  savedMode === "dark" ||
  (savedMode === null && darkModeMediaQuery.matches)
) {
  updateTheme(true);
  themeBtn.checked = true;
} else {
  updateTheme(false);
  themeBtn.checked = false;
}

// ユーザーの設定変更
darkModeMediaQuery.addEventListener("change", (e) => {
  updateTheme(e.matches);
});

// チェックボックス
themeBtn.addEventListener("change", () => {
  updateTheme(themeBtn.checked);
});
