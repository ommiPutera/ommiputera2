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
    content: 'content 1',
    imageUrl: '/assets/icons/engineering.png',
  },
  {
    id: '2',
    title: 'Design',
    content: 'content 2',
    imageUrl: '/assets/icons/design.png',
  },
  {
    id: '3',
    title: 'Design Product',
    content: 'content 3',
    imageUrl: '/assets/icons/product.png',
  },
]

export {projects as dataProjects, bigProject as dataBigProject}
