import i18n from 'src/plugins/i18n'

export function changeLanguage(lang) {
    i18n.global.locale.value = lang
}

export function getCurrentLanguage() {
    return i18n.global.locale.value
}