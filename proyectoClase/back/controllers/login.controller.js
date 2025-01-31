

const modelUser = async (dniUser)=> {
    const result = await modelUser.getUser(dniUser);
    return result;


};
const getLogin = async (username,password)=> {
    const resul = await modelCredentials.findOne({
        where: { username: username, password: password},
    });
    return result;
};
module.exports = {
    getUser,
    getLogin,
};
