'use client'

import { cn } from '@/lib/utils'
import { TaskParam } from '@/types/tasks'
import { Handle, Position } from '@xyflow/react'
import React from 'react'
import NodeParamField from './NodeParamField'
import { ColorForHandle } from './common'

export function NodeOutputs({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col divide-y gap-1'>{children}</div>
  )
}

export function NodeOutput({ output }: { output: TaskParam }) {
    return (
      <div className='flex justify-end relative p-3 bg-secondary w-full'>
        <p className="text-xs text-muted-foreground">{output.name}</p>
        <Handle 
            id={output.name} 
            type="source" 
            position={Position.Right} 
            className={cn('!bg-muted-foreground !border-2 !border-background !-right-2 !w-4 !h-4', ColorForHandle[output.type])} 
        />
      </div>
    )
  }