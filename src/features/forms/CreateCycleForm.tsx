
'use client'

import { startTransition, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { axios } from "@/init/axios";
import { CyclePostResolver, CyclePostType } from '@/schema/CycleSchema';


export function CreateCycleForm() {
    const [actionSuccess, setActionSuccess] = useState<boolean | null>(null);
    const router = useRouter();
    const { handleSubmit, register } = useForm<CyclePostType>({
        resolver: CyclePostResolver,
        defaultValues: {
            title: "",
            // problemDescription: "",
            // planDescription: "",
            // doDescription: "",
            // checkDescription: "",
            // analyzeDescription: "",
        },
      });
    
    const onSubmit = handleSubmit((data) => {
        startTransition(() => {
          const asyncAction = async () => {
              const result = await axios.post('/api/cycles', data);
            setActionSuccess(result.status === 200 ? true : false);
          };
            asyncAction();
            router.push('/');
        });
      });

    return (
        <form onSubmit={onSubmit}>
            <input type="text" id={'title'} {...register('title')} />
            <button type="submit">Start a cycle</button>
        </form>
    );
 };