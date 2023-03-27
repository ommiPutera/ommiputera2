import {IBlog} from './BlogCollection'
import Example from '../../content/blog/example.mdx'

const blog: IBlog[] = [
  {
    id: 'example',
    title: 'Use react-error-boundary to handle errors in React',
    contentMDX: <Example />,
    imageUrl: '',
  },
]

export {blog as dataBlog}
