import React, { useState } from 'react'
import { Input, SIZE } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'
import { API } from './lib/api'
import ClipboardJS from 'clipboard'

const itemsProps = {
  display: 'flex',
  justifyContent: 'center',
}

function App() {
  const [value, setValue] = useState('')
  const [isCreated, setIsCreated] = useState({
    creating: false,
    created: false,
    copied: false,
    status: false,
  })

  const shortenLink = async () => {
    try {
      setIsCreated((prevState) => ({ ...prevState, creating: true }))
      const response = await API.post('/shorten', {
        long_url: value,
        domain: 'bit.ly',
        group_guid: 'Bm7qncNNBLu',
      })
      setValue(response.data.id)
      setIsCreated((prevState) => ({
        ...prevState,
        creating: false,
        created: true,
        status: true,
      }))
    } catch (error) {
      throw new Error(error)
    }
  }

  const copyLink = () => {
    setIsCreated((prevState) => ({ ...prevState, created: false }))
    ClipboardJS.copy(value)
    setIsCreated((prevState) => ({ ...prevState, copied: true }))
    setTimeout(() => {
      setIsCreated({
        creating: false,
        created: false,
        copied: false,
        status: false,
      })
      setValue('')
    }, 2000)
  }

  return (
    <FlexGrid marginTop={'10rem'}>
      <FlexGridItem {...itemsProps}>
        <Input
          name='URL'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter Long URL'
          clearOnEscape
          size={SIZE.large}
          overrides={{
            Root: {
              style: { width: '30rem' },
            },
          }}
        />
      </FlexGridItem>
      <FlexGridItem {...itemsProps} marginTop={'1rem'}>
        <Button onClick={() => (isCreated.status ? copyLink() : shortenLink())}>
          {!isCreated.creating
            ? !isCreated.created
              ? !isCreated.copied
                ? 'Create'
                : 'Copied!'
              : 'Copy'
            : 'Creating...'}
        </Button>
      </FlexGridItem>
    </FlexGrid>
  )
}

export default App
