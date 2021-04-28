`use strict`;

function validateUsersNumber(usersNumber) {
    if (Number.isNaN(Number(usersNumber))) {
        throw new Error(`not a number`);
    } else if (usersNumber > 5000) {
        throw new Error(`max. value allowed is 5000`);
    }
}

async function getUsers(usersNumber) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${usersNumber}`);

        const data = await response.json();
        const users = data.results;

        const usersResult = users.map((user) => ({
            userName: user.login.username,
            name: user.name.first,
            lastName: user.name.last,
            gender: user.gender,
            country: user.location.state,
            email: user.email,
            picture: user.picture.medium,
        }));
        //console.log(usersResult);
        return usersResult;
    } catch (error) {
        return error;
    }
}

const getAsyncValue = async () => {
    const users = await getUsers(5);
    console.log(users);
};
getAsyncValue();
