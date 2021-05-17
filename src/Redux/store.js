import contactsReducer from './Phonebook/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer,   FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: {
        phonebook: persistReducer(contactsPersistConfig, contactsReducer),
    },
    middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };