import React, { useState } from 'react'
import { Button } from 'antd'
import { LModal } from '../'
import { ButtonProps } from 'antd/es/button'
import { ModalProps } from 'antd/lib/modal'

interface IProps {
  text: React.ReactNode
  buttonProps: ButtonProps
  modalProps: ModalProps
}

const A: React.FC<IProps> = ({
  text = '',
  buttonProps = {},
  modalProps = {},
  children,
}) => {
  const [show, setShow] = useState(false)
  const { visible } = modalProps
  const useShow = visible === undefined

  return (
    <>
      <Button
        onClick={() => {
          useShow && setShow(true)
        }}
        {...buttonProps}
      >
        {text}
      </Button>
      <LModal
        visible={useShow ? show : visible}
        onCancel={() => {
          useShow && setShow(false)
        }}
        {...modalProps}
      >
        {children}
      </LModal>
    </>
  )
}

export default A
