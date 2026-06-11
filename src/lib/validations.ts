import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(100)
    .trim(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(100)
    .trim(),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(200)
    .trim(),
  email: z
    .string()
    .email('Please enter a valid work email')
    .max(254)
    .toLowerCase()
    .trim(),
  psaPlatform: z.enum(
    ['spp', 'kantata', 'bigtime', 'unanet', 'netsuite', 'other', 'evaluating'],
    { errorMap: () => ({ message: 'Please select your PSA platform' }) }
  ),
  teamSize: z
    .enum(['1-10', '10-50', '50-150', '150-500', '500+'])
    .optional(),
  message: z.string().max(2000).trim().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
