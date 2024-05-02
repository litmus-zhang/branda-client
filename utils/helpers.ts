export const getURL = (path: string='') => {
    let url = process?.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== '' ? process.env.NEXT_PUBLIC_SITE_URL : process.env.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== '' ? process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000';
    url = url.replace(/\/$/, '');
    url = url.includes('http') ? url : `http://${url}`;
    path = path.replace(/^\//, '');
    return path ? `${url}/${path}` : url;
}


export const getCountries = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_BRANDA_BASE_URL as string + '/all-countries')
    return await res.json()
}

export const getBrands = async (formData: FormData) => {

    const res = await fetch(process.env.NEXT_PUBLIC_BRANDA_BASE_URL as string + '/all-brands', {
        method: 'POST',
        body: formData
    })
    return await res.json()
}