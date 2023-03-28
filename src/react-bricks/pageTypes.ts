import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'en',
    getDefaultContent: () => [],
  },
  {
    name: 'test-entity',
    pluralName: 'test-entities',
    isEntity: true,
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'en',
    getDefaultContent: () => ['test-entity-brick'],
    customFields: [
      {
        name: 'text1',
        type: types.SideEditPropType.Text,
        label: 'Text 1',
      },
      {
        name: 'text2',
        type: types.SideEditPropType.Text,
        label: 'Text 2',
      },
    ],
  },
]

export default pageTypes
