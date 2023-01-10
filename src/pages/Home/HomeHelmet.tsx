import {Helmet} from 'react-helmet'
import useMode from '../../hooks/useMode'

function HomeHelmet() {
  const {mode} = useMode()
  return (
    <Helmet>
      <title>Ommi Putera - Software Engineer</title>
      <meta
        name="theme-color"
        content={mode === 'light' ? '#fff' : '#18181b'}
      />
    </Helmet>
  )
}

export default HomeHelmet
