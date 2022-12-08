import {Container} from '@mantine/core'
import clsx from 'clsx'
import {CONTAINER_SIZE} from '../../defaultVariable'
import {useNavigation} from '../../store/rootStore'
import {LeftContent, RightContent, WrapperFooter} from './styled'

function Footer() {
  const {isOpen} = useNavigation()
  return (
    <WrapperFooter className={clsx(isOpen ? 'nav__open' : '')}>
      <Container size={CONTAINER_SIZE}>
        <LeftContent>
          <span>Logo</span>
        </LeftContent>
        <RightContent>
          <span>Logo</span>
        </RightContent>
      </Container>
    </WrapperFooter>
  )
}

export default Footer
