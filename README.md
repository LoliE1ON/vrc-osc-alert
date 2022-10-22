# Alert app
Синхронизация статуса воздушной тривоги и анимации аватара сделаного в VRChat посредством OSC.<br>
При запуске VRChat будет запускатся приложение, при закрытии - убиватся.

## Использование
1. Скачать последний билд из [Releases](https://github.com/LoliE1ON/vrc-osc-alert/releases) либо сбилдить вручную: `npm run pkg`
2. Добавить приложение в автозагрузку

### Avatar parameter
Имя: EnableAlert<br>
Тип: Bolean<br>
Значения:
- false - тревога отсуствует
- true - тревога присуствует

## Provider
https://alerts.in.ua
