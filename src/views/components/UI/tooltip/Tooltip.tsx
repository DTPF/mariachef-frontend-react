import { Tooltip as TooltipAntd } from 'antd'
import React, { memo } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

function Tooltip({ title, children }: Props) {
  return (
    <TooltipAntd title={title} color={'rgb(64, 128, 69)'} key={'rgb(64, 128, 69)'}>
      {children}
    </TooltipAntd>
  )
}

export default memo(Tooltip)