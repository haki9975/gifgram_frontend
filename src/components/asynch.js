export async function fetchPosts(){
    return await fetch(`http://localhost3000/posts`).then(resp => resp.json())
}