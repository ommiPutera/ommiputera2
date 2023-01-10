import {IconArrowBack, IconMoonStars, IconSunHigh} from '@tabler/icons'
import {ICON_SIZE} from '../defaultVariable'

function getIcon(type: string) {
  switch (type) {
    case 'x':
      return <IconArrowBack className="close__icon" size={ICON_SIZE} />
    default:
      return
  }
}

function getIconMode(mode: string) {
  switch (mode) {
    case 'dark':
      return <IconSunHigh className="sun__icon" size={ICON_SIZE} />
    case 'light':
      return <IconMoonStars className="moon__icon" size={ICON_SIZE} />
    default:
  }
}

export {getIcon, getIconMode}
