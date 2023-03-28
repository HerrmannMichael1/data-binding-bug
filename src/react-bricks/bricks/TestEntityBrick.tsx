import React from 'react'
import { Text, types } from 'react-bricks/frontend'

interface TestEntityBrickProps {
  text1: string
  text2: string
}

const TestEntityBrick: types.Brick<TestEntityBrickProps> = ({}) => {
  return (
    <div>
      <Text
        renderBlock={(props) => <p>{props.children}</p>}
        placeholder="Text..."
        customFieldName="text1"
      />
      <Text
        renderBlock={(props) => <p>{props.children}</p>}
        placeholder="Text..."
        customFieldName="text2"
      />
    </div>
  )
}

TestEntityBrick.schema = {
  name: 'test-entity-brick',
  label: 'Test Entity Brick',
}

export default TestEntityBrick
