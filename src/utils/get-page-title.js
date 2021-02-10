import defaultSettings from '@/settings'

const title = defaultSettings.title || '표준화.com'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
