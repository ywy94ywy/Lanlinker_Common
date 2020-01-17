import React from 'react'
import { Tree } from 'antd'
import { TreeProps } from 'antd/es/Tree'

const LTree: React.FC<TreeProps> = ({ children, ...props }) => {
  return <Tree {...props}>{children}</Tree>
}

export default LTree
