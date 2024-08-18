import { boot } from 'quasar/wrappers'
import i18n from 'src/plugins/i18n'

export default boot(({ app }) => {
    app.use(i18n)
})