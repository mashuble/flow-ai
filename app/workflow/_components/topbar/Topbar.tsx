"use client";

import TooltipWrapper from '@/components/TooltipWrapper'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeftIcon } from 'lucide-react';
import SaveBtn from './SaveBtn';
import ExecuteBtn from './ExecuteBtn';
import NavigationTabs from './NavigationTabs';
import PublishBtn from './PublishBtn';
import UnpublishBtn from './UnpublishBtn';

interface Props {
    title: string;
    subtitle?: string;
    workflowId: string;
    hideButtons?: boolean;
    isPublished?: boolean;
}

function Topbar({ title, subtitle, workflowId, hideButtons, isPublished }: Props) {
    const router = useRouter();

    return (
        <header className='flex p-2 border-b-2 border-separate justify-between w-full h-[60px] sticky top-0 bg-background z-10'>
            <div className="flex gap-1 flex-1">
                <TooltipWrapper content='Back'>
                    <Button variant='ghost' size='icon' onClick={() => router.back()}>
                    <ChevronLeftIcon size={20} />
                    </Button>
                </TooltipWrapper>
                <div>
                    <p className="font-bold text-ellipsis truncate">{title}</p>
                    {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
                </div>
            </div>
            <NavigationTabs workflowId={workflowId} />
            <div className="flex gap-1 flex-1 justify-end">
                {!hideButtons && (
                    <>
                        <ExecuteBtn workflowId={workflowId} />
                        {isPublished && (
                            <UnpublishBtn workflowId={workflowId} />
                        )}
                        {!isPublished && (
                            <>
                                <PublishBtn workflowId={workflowId} />
                                <SaveBtn workflowId={workflowId} />
                            </>
                        )}
                    </>
                )}
            </div>
        </header>
    )
}

export default Topbar