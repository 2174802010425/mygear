import { defineType, defineField } from "sanity";
export const brandType = defineType({
    name :'brand',
    title : 'Brand',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            title : 'Brand Name',
            type : 'string',
            validation : (rule) => rule.required().error('This field is currently empty !!!')
        }),
        defineField({
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'name'
            },
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'logo',
            title : 'Logo',
            type : 'image',
            options : {
                hotspot : true
            },
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'description',
            title : 'Description',
            type : 'array',
            of : [{type : 'block'}],
            validation : (rule) => rule.required()
        })
    ],
    preview : {
        select : {
            title : 'name',
            subtitle : 'description',
            media : 'logo'
        }
    }
})