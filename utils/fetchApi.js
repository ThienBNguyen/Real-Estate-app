import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
const key = "43358f40e1msh324fef1919ecce4p132942jsnabebd1a22b1e"
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': key,
        },
    });

    return data;
}

// process.env.NEXT_PUBLIC_RAPID_API_KEY