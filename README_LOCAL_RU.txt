ТРЕНАЖЁР ПЕРВОЙ ПОМОЩИ — ГОТОВАЯ ЗАГОТОВКА ДЛЯ ANDROID

В папке www/index.html находится текущая версия тренажёра:
- 2D-военные;
- увеличенная область клика;
- один вопрос за раз;
- следующий вопрос открывается отдельно.

Что установить на Windows:
1. Node.js LTS
2. Android Studio

Дальше открой PowerShell/Terminal в этой папке и выполни:

npm install
npx cap add android
npx cap sync android
npx cap open android

После открытия Android Studio:
- подключи Android-телефон с включённой отладкой USB или запусти эмулятор;
- нажми Run ▶.

Для получения APK:
Android Studio → Build → Generate Bundle(s) / APK(s) → Generate APK(s)

Для Google Play нужен подписанный Android App Bundle (AAB), а не обычный APK.

Когда HTML меняется:
npx cap sync android

Затем снова открой/запусти проект в Android Studio.
