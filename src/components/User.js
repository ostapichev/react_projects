const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
        </div>
    );
};

export {
    User
};