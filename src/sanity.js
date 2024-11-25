import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'j6w5glvk',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2024-11-22',
})