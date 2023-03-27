const posts = [
    { title: 'Baslik 1', content: 'Icerik 1' }
]

const listPosts = () => {
    posts.map(post => {
        console.log(post.title + ": " + post.content);
    })
}
const addPosts = (newPost) => {

    return new Promise((resolve, reject) => {
        if (newPost) {
            posts.push(newPost)
            resolve('Post Eklendi')
        } else {
            reject('Post Eklenemedi')
        }    

    })
}

// addPosts({ title: 'Baslik 2', content: 'Icerik 2' }, false)
//     .then(result => {console.log(result);})
//     .catch(err => console.log(err))

const sortPost = async () => {
    try {
        await addPosts({ title: 'Baslik 2', content: 'Icerik 2' })
        listPosts()
    } catch (error) {
        console.log(error);
    }
}

sortPost()