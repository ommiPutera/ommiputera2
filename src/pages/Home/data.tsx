import {IBigProject} from './BigProjectSection'
import {IProject} from './ProjectsSection'
import {Icon1, Icon2, Icon3} from '../../utils/icons'
import {IServices} from './ServicesSection'

const projects: IProject[] = [
  {
    id: '01',
    layout: '1',
    title: 'Naufal Ghifari Website',
    description: 'description',
    type: 'Personal Website',
    note: 'ReactJS with CSS-in-JS and of course Typescript',
    viewsURL: [
      '/assets/projects/example1.webp',
      '/assets/projects/example1.webp',
      '/assets/projects/example1.webp',
    ],
  },
  {
    id: '02',
    layout: '1',
    title: 'Naufal Ghifari Website',
    description: 'description',
    type: 'Personal Website',
    note: 'ReactJS with CSS-in-JS and of course Typescript',
    viewsURL: [
      '/assets/projects/example1.webp',
      '/assets/projects/example1.webp',
      '/assets/projects/example1.webp',
    ],
  },
]

const bigProject: IBigProject[] = [
  {
    id: '1',
    title: 'Engineering',
    content:
      'Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    imageUrl: '/assets/icons/engineering.png',
  },
  {
    id: '2',
    title: 'Design',
    content:
      'eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    imageUrl: '/assets/icons/design.png',
  },
  {
    id: '3',
    title: 'Product',
    content:
      'Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    imageUrl: '/assets/icons/product.png',
  },
]

const services: IServices[] = [
  {
    id: '3',
    title: 'Front-End',
    animate: 'basic-animate-1',
    desc: 'Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.',
    Icon: <Icon3 />,
  },
  {
    id: '1',
    title: 'Back-End',
    animate: 'basic-animate-1',
    desc: 'Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.',
    Icon: <Icon1 />,
  },
  {
    id: '2',
    title: 'UI Design',
    animate: 'basic-animate-3',
    desc: 'Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe. Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.',
    Icon: <Icon2 />,
  },
]

export {
  projects as dataProjects,
  bigProject as dataBigProject,
  services as dataServices,
}
