
const API_KEY = process.env.REACT_APP_API_KEY
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};




export const fetchSearchResultFromAPI=async(query)=>{
const data= await fetch(`https://youtube138.p.rapidapi.com/search/?q=${query}&hl=en&gl=US`,options)


return data
}
export const fetchVideoResultFromAPI=async(id)=>{
	const data= await fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`,options)
	
	
	return data
	}
	export const fetchrelatedVideoFromAPI=async(id)=>{
		const data= await fetch(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`,options)
		
		
		return data
		}
		export const fetchVideoCommentsFromAPI=async(id)=>{
			const data= await fetch(`https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`,options)
			
			
			return data
			}