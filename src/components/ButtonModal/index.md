---
group:
  title: 按钮
title: 按钮(模态框)
---

### 按钮自带模态框

```jsx
import React from 'react'
import { ButtonModal } from 'lanlinker'

export default () => (
  <>
    <ButtonModal
      text='按钮'
      buttonProps={{
        type: 'primary',
      }}
      modalProps={{
        title: '标题',
        onOk() {
          alert('确定')
        },
      }}
    >
      模态框内容
    </ButtonModal>
  </>
)
```
