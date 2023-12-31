import { InferType } from 'yup';
import yup from '@/init/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const CyclePostSchema = yup.object({
  title: yup.string().required('please enter the title'),
  // problemDescription: yup.string().required('please describe the problem'),
  // planDescription: yup.string().required('please describe your plan to solve the problem'),
  // doDescription: yup.string().required('please describe your plan to solve the problem'),
  // checkDescription: yup.string().required('please describe your plan to solve the problem'),
  // analyzeDescription: yup.string().required('please describe your plan to solve the problem'),

});

export type CyclePostType = InferType<typeof CyclePostSchema>;

export const CyclePostResolver = yupResolver(CyclePostSchema);
