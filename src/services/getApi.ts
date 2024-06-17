
export async function getApi(name: string): Promise<Response | null> {
    let data: Response | null = null;
    try {
        const response = await fetch(`https://api.tibiadata.com/v4/character/${name}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data = response;
    } catch (error) {
        data = null;
        console.log('error', error);
    }
    
    return data;
}
