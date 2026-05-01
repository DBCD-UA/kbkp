import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Автоматизація', value: 'automation' },
                { label: "Зв'язок", value: 'telecom' },
                { label: 'Енергетика', value: 'energy' },
            ],
            required: false,
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
        },
        {
            name: 'fullDescription',
            type: 'richText',
            required: false,
        },
        {
            name: 'galleryImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'features',
            type: 'array',
            fields: [
                { name: 'feature', type: 'text' }
            ]
        }
    ],
}
