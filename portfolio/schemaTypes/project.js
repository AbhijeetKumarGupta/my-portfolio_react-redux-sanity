import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
        }),
        defineField({
            name: 'projectDescription',
            title: 'Project Description',
            type: 'text',
        }),
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})