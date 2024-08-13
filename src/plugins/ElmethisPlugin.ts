import { App, Plugin, createVNode, render } from 'vue'

// # --------------------------------------------------------------------------------
//
// Hooks
//
// # --------------------------------------------------------------------------------

import Toast from '../hooks/toast/Toast.vue'
import { useToast } from '../hooks/toast/useToast'

// # --------------------------------------------------------------------------------
//
// Global Components
//
// # --------------------------------------------------------------------------------

// code
import ElmCodeBlock from '../components/code/elm-code-block/elm-code-block.vue'

// containment
import ElmModal from '../components/containment/elm-modal/elm-modal.vue'
import ElmToggle from '../components/containment/elm-toggle/elm-toggle.vue'
import ElmTooltip from '../components/containment/elm-tooltip/elm-tooltip.vue'

// data
import ElmLinearProgress from '../components/data/elm-linear-progress/elm-linear-progress.vue'

// form
import ElmCheckbox from '../components/form/elm-checkbox/elm-checkbox.vue'
import ElmSwitchTheme from '../components/form/elm-switch-theme/elm-switch-theme.vue'

// icon
import ElmConnectionIcon from '../components/icon/elm-connection-icon/elm-connection-icon.vue'
import ElmDotLoadingIcon from '../components/icon/elm-dot-loading-icon/elm-dot-loading-icon.vue'
import ElmGridLoadingIcon from '../components/icon/elm-grid-loading-icon/elm-grid-loading-icon.vue'
import ElmHelpIcon from '../components/icon/elm-help-icon/elm-help-icon.vue'
import ElmInfoIcon from '../components/icon/elm-info-icon/elm-info-icon.vue'
import ElmSquareLoadingIcon from '../components/icon/elm-square-loading-icon/elm-square-loading-icon.vue'
import ElmTriangleLoadingIcon from '../components/icon/elm-triangle-loading-icon/elm-triangle-loading-icon.vue'
import ElmTrushIcon from '../components/icon/elm-trush-icon/elm-trush-icon.vue'

// image
import ElmImageWithFallback from '../components/image/elm-image-with-fallback/elm-image-with-fallback.vue'
import ElmImageWithFallbackSmall from '../components/image/elm-image-with-fallback-small/elm-image-with-fallback-small.vue'
import ElmImageWithModal from '../components/image/elm-image-with-modal/elm-image-with-modal.vue'

// json-component
import ElmJsonComponent from '../components/json-component/elm-json-component.vue'
import ElmJsonInlineComponent from '../components/json-component/elm-json-inline-component.vue'

// navigation
import ElmBreadcrumb from '../components/navigation/elm-breadcrumb/elm-breadcrumb.vue'
import ElmPagetop from '../components/navigation/elm-pagetop/elm-pagetop.vue'

// text
import ElmTurnText from '../components/text/elm-turn-text/elm-turn-text.vue'

// typography
import ElmBookmarkCard from '../components/typography/elm-bookmark-card/elm-bookmark-card.vue'
import ElmCallout from '../components/typography/elm-callout/elm-callout.vue'
import ElmDivider from '../components/typography/elm-divider/elm-divider.vue'
import ElmErrorCard from '../components/typography/elm-error-card/elm-error-card.vue'
import ElmFragmentIdentifier from '../components/typography/elm-fragment-identifier/elm-fragment-identifier.vue'
import ElmHeading1 from '../components/typography/elm-heading-1/elm-heading-1.vue'
import ElmHeading2 from '../components/typography/elm-heading-2/elm-heading-2.vue'
import ElmHeading3 from '../components/typography/elm-heading-3/elm-heading-3.vue'
import ElmKatex from '../components/typography/elm-katex/elm-katex.vue'
import ElmLinkText from '../components/typography/elm-link-text/elm-link-text.vue'

export const ElmethisPlugin: Plugin = {
  install(app: App) {
    // # --------------------------------------------------------------------------------
    //
    // Toast
    //
    // # --------------------------------------------------------------------------------

    const toastVNode = createVNode(Toast)
    const container = document.createElement('div')
    document.body.appendChild(container)
    render(toastVNode, container)

    app.provide('useToast', useToast)

    // # --------------------------------------------------------------------------------
    //
    // register component
    //
    // # --------------------------------------------------------------------------------

    // code
    app.component('elm-code-block', ElmCodeBlock)

    // containment
    app.component('elm-elm-modal', ElmModal)
    app.component('elm-elm-toggle', ElmToggle)
    app.component('elm-elm-tooltip', ElmTooltip)

    // data
    app.component('elm-linear-progress', ElmLinearProgress)

    // form
    app.component('elm-checkbox', ElmCheckbox)
    app.component('elm-switch-theme', ElmSwitchTheme)

    // icon
    app.component('elm-connection-icon', ElmConnectionIcon)
    app.component('elm-dot-loading-icon', ElmDotLoadingIcon)
    app.component('elm-grid-loading-icon', ElmGridLoadingIcon)
    app.component('elm-help-icon', ElmHelpIcon)
    app.component('elm-info-icon', ElmInfoIcon)
    app.component('elm-square-loading-icon', ElmSquareLoadingIcon)
    app.component('elm-triangle-loading-icon', ElmTriangleLoadingIcon)
    app.component('elm-trush-icon', ElmTrushIcon)

    // image
    app.component('elm-image-with-fallback', ElmImageWithFallback)
    app.component('elm-image-with-fallback-small', ElmImageWithFallbackSmall)
    app.component('elm-image-with-modal', ElmImageWithModal)

    // json-component
    app.component('elm-json-component', ElmJsonComponent)
    app.component('elm-json-inline-component', ElmJsonInlineComponent)

    // navigation
    app.component('elm-breadcrumb', ElmBreadcrumb)
    app.component('elm-pagetop', ElmPagetop)

    // text
    app.component('elm-turn-text', ElmTurnText)

    // typography
    app.component('elm-bookmark-card', ElmBookmarkCard)
    app.component('elm-callout', ElmCallout)
    app.component('elm-divider', ElmDivider)
    app.component('elm-error-card', ElmErrorCard)
    app.component('elm-fragment-identifier', ElmFragmentIdentifier)
    app.component('elm-heading-1', ElmHeading1)
    app.component('elm-heading-2', ElmHeading2)
    app.component('elm-heading-3', ElmHeading3)
    app.component('elm-katex', ElmKatex)
    app.component('elm-link-text', ElmLinkText)
  }
}
