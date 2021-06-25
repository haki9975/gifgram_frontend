export async function fetchPosts(arg){
    console.log(arg)
    return await fetch(`http://localhost:3000/${arg}`).then(resp => resp.json())
}