'use client'
import React from 'react';
import {useRouter} from 'next/navigation';


const CreateBrandButton = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log('Create a new brand');
        return router.push('/dashboard/create');
    };

    return (
        <button onClick={handleClick} className="bg-primary text-sm text-white p-2 rounded hover:bg-white hover:text-primary hover:border hover:border-primary">
            Create a new brand 🫰
        </button>
    );
};

export default CreateBrandButton;