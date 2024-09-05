import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importez vos reducers ici
import rootReducer from './reducers';

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Créer le store Redux avec le reducer racine et Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
