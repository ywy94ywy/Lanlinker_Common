---
group:
  title: 模态框
title: 模态框(定制footer)
---

```jsx
import React, { useState } from 'react'
import { LModal } from 'lanlinker'
import { Button } from 'antd'

export default () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          setShow(true)
        }}
      >
        弹出
      </Button>
      <LModal
        visible={show}
        onOk={() => {
          alert('确定')
        }}
        onCancel={() => {
          setShow(false)
        }}
      />
    </>
  )
}
```
