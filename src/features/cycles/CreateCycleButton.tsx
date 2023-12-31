'use client';

import { useDialog } from '@/hooks/useDialog'

import { Dialog } from '@/components/dialogs/Dialog'

export function CreateCycleButton() {
   const { ref, showModal } = useDialog();

    return (
        <div>
            <button type="button" onClick={() => showModal}>create</button>
            <Dialog ref={ref}>
               <div>
                <p>
                   Create a cycle manually
                </p>
                <br />
                <p>
                   Create a cycle with AI assitance
                </p>
               </div>
            </Dialog>
        </div>
    );
 };