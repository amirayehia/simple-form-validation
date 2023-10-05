import { createContext } from "react";

const data = [{ type: 'text', id: 'userName', label: 'User Name ' },
{ type: 'password', id: 'passwordUsr', label: 'Password' }
]
const DataForm = createContext(data);
export default DataForm;

