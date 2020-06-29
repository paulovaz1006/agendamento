const token = localStorage.getItem('token');
const id = localStorage.getItem('id');
const type = localStorage.getItem('type');
const company = localStorage.getItem('company');

const localItems = {
    token: token,
    id: id,
    type: type,
    company: company
};

export default localItems;

