let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likes: 12},
            {id: 2, message: 'It\'s my first post', likes: 23},
            {id: 3, message: 'kawabanga!', likes: 46},
            {id: 4, message: 'чекаво, сучары?', likes: 118},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'sup beatch!'},
            {id: 2, message: 'shalomchiki'},
            {id: 3, message: 'go bukhat'},
            {id: 4, message: 'go!go!go!'},
        ],
        dialogs: [
            {id: 1, name: 'Oleg', avatar: 'https://f1.upet.com/hWM6pr1tUl.jpg',},
            {id: 2, name: 'Vika', avatar: 'https://f1.upet.com/QFHEDQIu6N.jpg',},
            {id: 3, name: 'Zheka', avatar: 'https://f1.upet.com/49eLA82WnR.jpg',},
            {id: 4, name: 'Dimas', avatar: 'https://f1.upet.com/yEnLsB2L3i.jpg',},
            {id: 5, name: 'Andrej', avatar: 'https://f3.upet.com/bYBAMA2PI1.jpg',},
            {id: 6, name: 'Kolyan', avatar: 'https://f1.upet.com/uoxbNc19LU.jpg',},
            {id: 7, name: 'Tolyan', avatar: 'https://f1.upet.com/Z_3ghMA9OSpTmM7Cl.jpg',},
        ],
    },
    navbar: {
        friends: [
            {id: 2, name: 'Vika', avatar: 'https://f1.upet.com/QFHEDQIu6N.jpg',},
            {id: 3, name: 'Zheka', avatar: 'https://f1.upet.com/49eLA82WnR.jpg',},
            {id: 4, name: 'Dimas', avatar: 'https://f1.upet.com/yEnLsB2L3i.jpg',},
        ],
    },
};

export let addPost = (postMessage) => {
    let newPost = {
        id:5, message: postMessage, likes:8,
    };
    state.profilePage.posts.push(newPost);
}

export default state;