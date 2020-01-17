import React from 'react'
import { Modal, Button } from 'antd'
import { ModalProps } from 'antd/lib/modal'

const LModal: React.FC<ModalProps> = ({
  onOk,
  onCancel,
  children,
  ...props
}) => {
  return (
    <Modal
      footer={
        <>
          <Button
            type='primary'
            onClick={e => {
              onOk && onOk(e)
            }}
          >
            确定
          </Button>
          <Button
            onClick={e => {
              onCancel && onCancel(e)
            }}
          >
            取消
          </Button>
        </>
      }
      onCancel={onCancel}
      {...props}
    >
      {children}
    </Modal>
  )
}

export default LModal
