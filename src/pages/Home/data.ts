import {IProject} from './ProjectsSection'

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

const bigProject = [
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

export {projects as dataProjects, bigProject as dataBigProject}
