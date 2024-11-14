export type Contact = { 
    id: string;
    name: string;
    phone: string;
}

export type RootStackParamList = { 
    Home: undefined; 
    Details: { id: string };
    addContact: undefined;
}