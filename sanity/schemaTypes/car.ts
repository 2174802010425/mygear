import { defineType, defineField } from "sanity";
import { CarIcon } from "lucide-react";
export const carTypes = defineType({
    name : 'car',
    title : "Car",
    type : 'document',
    icon : CarIcon,
    fields :[
        defineField({
            name : 'name',
            title : 'Name',
            type : 'string',
            validation : (rule) => rule.required()
        }),
        defineField({
            name : "slug",
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'name'
            },
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'price',
            title : "Price",
            type : 'number',
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'description',
            title : "Description",
            type : 'array',
            of : [{type : 'block'}],
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'image',
            title : "Image",
            type : 'image',
            options : {
                hotspot : true
            },
            validation : (rule) => rule.required()
        }),
        defineField({
            name : 'brand',
            title : 'Brand',
            type : 'reference',
            to : [{type : 'brand'}],
            validation : (rule) => rule.required()
        })
    ],
    preview : {
        select : {
            title : 'name',
            subtitle : 'description',
            media : 'image'
        }
    }
})