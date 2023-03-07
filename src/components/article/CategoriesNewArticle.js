import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { getDataUser } from '../../data/account_function'
import { CATEGORIES, SELECTED_CATEGORIES, USER_DATA } from '../../data/constants'
import { useStore } from '../../store'
import CreateNewTag from './CreateNewTag'

const CategoriesNewArticle = () => {

    const [state, dispatch] = useStore()
    const { tags_list } = state

    const [isAdmin, setAdmin] = useState(false)
    const [selected_tags, setTags] = useState(JSON.parse(window.localStorage.getItem(SELECTED_CATEGORIES)) ?? [])

    useEffect(() => {
        window.localStorage.setItem(SELECTED_CATEGORIES, JSON.stringify(selected_tags))
    }, [selected_tags])


    useEffect(() => {
        if (window.localStorage.getItem(USER_DATA) != null) {
            const checkAdmin = async () => {
                let user = JSON.parse(window.localStorage.getItem(USER_DATA))
                const result = await getDataUser(user.username)
                let roles = result.roles
                if (roles.length > 1) {
                    roles.forEach(role => {
                        if (role.name === 'ROLE_ADMIN') {
                            setAdmin(true)
                        }
                    });
                } else {
                    if (roles[0].name === 'ROLE_ADMIN') {
                        setAdmin(true)
                    }
                }

            }

            checkAdmin()
        }
    }, [])



    const add_tags = (item) => {
        if (selected_tags.find(e => e.id == item.id) == null && selected_tags.length < 3) {
            setTags(selected_tags => [...selected_tags, item])
        }
        else {
            let new_list = selected_tags.filter(e => e.id != item.id);
            setTags(new_list)
        }
    }


    return (
        <div className='w-full flex flex-col border rounded-md p-2 '>
            <p className='text-base p-2'>Select tags</p>
            <div className='w-full bg-white flex flex-row flex-wrap'>

                {
                    tags_list?.length > 0 &&
                    tags_list?.map(item => (
                        <button key={item.id} onClick={() => add_tags(item)} className={`p-2 rounded-md border m-1 ${selected_tags.find(e => e.id == item.id) == null ? 'bg-white' : 'bg-primary text-white'}  hover:bg-black hover:text-white transition-all`}>{item.name}</button>
                    ))
                }

                {
                    isAdmin &&
                    <CreateNewTag />
                }

            </div>
        </div>
    )
}

export default CategoriesNewArticle